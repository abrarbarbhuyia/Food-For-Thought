import { View, Linking } from "react-native";
import { Text } from '@rneui/themed';
import React, { useState, useEffect } from "react";
import { Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Constants from "expo-constants";
import axios from "axios";
import { styles } from "@/styles/app-styles";
import { Meal as MealType, Menu, Restaurant } from "@/constants/interfaces";
import Meal from "./Meal";

export default function RestaurantMenu({ restaurant }: { restaurant: Restaurant }) {
    const menuURL = 'https://irp.cdn-website.com/1efc617b/files/uploaded/takeawaymenu_2021_Aug.pdf';
    
    //const [isMatchingMeal, setIsMatchingMeal] = React.useState(false);
    const [menu, setMenu] = useState<Menu>();
    const [meals, setMeals] = useState<MealType[]>([]);
    //const [setFilter, setSetFilter] = useState(null);
    const [cachedMenu, setCachedMenu] = useState<Menu>(); // For caching menu data
    const item = restaurant || {};
    const restaurantId = item.restaurantId;

    const HOST_IP = Constants.expoConfig?.extra?.HOST_IP;

    useEffect(() => {
        if (!cachedMenu && restaurantId) {
            fetchMenu(restaurantId);
        }
    }, [restaurantId, cachedMenu]);

    //fetch menu using restaurantId
    const fetchMenu = async (restaurantId: string) => {
        try {
            const response = await axios.get(`http://${HOST_IP}:4000/menu/getMenu/${restaurantId}`);
            const menuData = response.data;
            setMenu(menuData);
            setCachedMenu(menuData); 

            if (menuData && menuData[0]?.menuId) {
                fetchMeals(menuData[0].menuId); //fetch meals from menuId, returns full list
            }
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    //returns all meals associated with a menu id
    const fetchMeals = async (menuId: string) => {
        try {
            const response = await axios.get(`http://${HOST_IP}:4000/meal/getMealByMenuId/${menuId}`);
            setMeals(response.data);
        } catch (error) {
            console.error("Error fetching meals:", error);
        }
    };

    //idk how does the filtering stuff work? using this just to test
    // const isMealMatching = (meal : any) => {
    //     if (setFilter && meal.ingredients) {
    //         return meal.ingredients.some((ingredient : any) => ingredient.includes(setFilter));
    //     }
    //     return false;
    // };

    return (
        <View style={{}}>
            <View style={styles.appliedFilters}>
                <Text>Filtering by: </Text>
            </View>
            {/* insert a link here but not sure what for */}
            <View style={styles.clipboardLink}>
                <Icon name='clipboard-list' type='font-awesome-5' size={22}/>
                <Text 
                    style={{fontSize: 12, paddingLeft: 15, textDecorationLine: 'underline', }} 
                    numberOfLines={1}
                    ellipsizeMode="tail" 
                    onPress={() => Linking.openURL(menuURL)}>{menuURL}
                </Text>
            </View>
            <ScrollView style={{ height: '73%'}}>
                <View style={styles.matchingMealsList}>
                    <View style={styles.menuListHeader}>
                        <Text style={{paddingRight: 15, fontWeight: 'bold'}}>Matching Meals</Text>
                        <Icon name='check-circle' type='feather' size={20} color={'#16D59C'}/>
                    </View>
                    {/* {meals.filter(isMealMatching).map((meal) => (
                        <Meal key={meal.mealId} meal={meal}/>
                    ))} */}
                    <Meal meal={meals[0]}/>
                    <Meal meal={meals[1]}/>

                </View>
                <View style={styles.otherMealsList}>
                    <View style={styles.menuListHeader}>
                        <Text style={{paddingRight: 15, fontWeight: 'bold'}}>Other Meals</Text> 
                    </View>
                    {meals.map((meal) => (
                        <Meal key={meal.mealId} meal={meal}/>
                    ))}
                    {/* {meals.filter((meal) => !isMealMatching(meal)).map((meal) => (
                        <Meal key={meal.mealId} meal={meal}/>
                    ))} */}
                </View>
            </ScrollView>
        </View>
    )
}