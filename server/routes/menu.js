require('dotenv').config();
const express = require('express');
const router = express.Router();
const Menu = require('../models/menuModel');
const databaseMaster = require('../databaseMaster');
const axios = require('axios');
const Tesseract = require('tesseract.js');


const { v4: uuidv4 } = require('uuid');

/* Get a menu associated with a restaurantId */
router.get('/getMenu/:restaurantId', async (req, res) => {
    try {
        const restaurantId = req.params.restaurantId;
        const data = await databaseMaster.dbOp('find', 'MenuDetails', { query: { restaurantId: restaurantId } });
        // .then(data => {
        //     res.status(200).json(data);
        // });
        if(data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ error: 'Menu not found' })
        } 
    }   
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

/* Create a menu */
router.post('/createMenu', async (req, res) => {
    try {
        const menuId = uuidv4();

        const menu = new Menu({
            menuId: menuId,
            restaurantId: req.body.restaurantId,
            menuString: req.body.menuString
        });
        await databaseMaster.dbOp('insert', 'MenuDetails', { docs: [menu] });
        res.status(201).json(menu)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

/* Delete a menu */
router.delete('/deleteFavourite/:menuId', async (req, res) => {
    try {
        const menuId = req.params.menuId;
        await databaseMaster.dbOp('delete', 'MenuDetails', { query: { menuId: menuId } } );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.get('/getMenuString/:restaurantId', async (req, res) => {
    const placeId = req.params.restaurantId;
    const url = `https://api.foursquare.com/v3/places/${placeId}/photos?classifications=menu`;

    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `${process.env.FOURSQUARE_API_KEY}`
            }
        });

        const place_photo_array = response.data;
        let menu_items = {};  // Store items and prices as key-value pairs

        for (let i = 0; i < place_photo_array.length; i++) {
            const menu_image = place_photo_array[i];
            const menu_url = menu_image.prefix + menu_image.width + "x" + menu_image.height + menu_image.suffix;

            const result = await (Tesseract.recognize(menu_url, 'eng'));
            const cleaned_string = result.data.text.replace(/\n/g, ' ');

            // Check if is menu
            const is_menu_flag = await isMenu(cleaned_string);
            if (is_menu_flag) {
                const pricePattern = /\$\d+(?:\.\d{2})?/g;
                const lines = cleaned_string.split(/[\.,;]\s*/);  // split text by punctuation
                
                // for each line get price, remove price and store item and price as pair
                lines.forEach(line => {
                    const priceMatch = line.match(pricePattern);
                    if (priceMatch) {
                        const price = priceMatch[0];

                        const item = line.replace(price, '').trim();

                        if (item.length > 0) {
                            menu_items[item] = price;
                        }
                    }
                });
            }
        }

        console.log(menu_items);
        res.json(menu_items);  // Respond with the menu items as key-value pairs
    } catch (error) {
        console.error(error);
        throw new Error('Menu was not found!');
    }
});

async function isMenu(extractedText) {
    const commonKeywords = ['appetizers', 'appetizer', 'appetiser', 'appetisers', 'main course', 'dessert',  'desserts', 'starter',  'starters', 'salad', 
                            'salads', 'drink', 'drinks', 'entree', 'entrees', 'side',  'sides', 'beverage', 'beverages', 'soup', 'soups', 'main',
                            'mains', 'lunch', 'menu', 'vegetable', 'vegetables',  'breakfast', 'seafood', 'meat', 'chicken', 'fish', 'noodle', 'noodles'];
    
    const pricePattern = /\d+(\.\d{2})?/g;
    const textLower = extractedText.toLowerCase();
    const commonKeywordCount = commonKeywords.reduce((count, keyword) => {
        return count + (textLower.includes(keyword) ? 1 : 0);
    }, 0);

    const priceCount = (textLower.match(pricePattern) || []).length;

    // Check for at least one price and common keyword in the text to determine if it is a menu
    if (commonKeywordCount >= 1 && priceCount >= 1) {
        console.log("Item is a menu");
        return true;
    }

    console.log("Item is not a menu");
    return false;
}

module.exports = router;