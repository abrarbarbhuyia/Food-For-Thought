import { View, Image, StyleSheet, FlatList, Modal, TouchableOpacity } from "react-native";
import { Text } from '@rneui/themed';
import React from "react";
import { currentFont, styles } from "@/styles/app-styles";

export default function RestaurantGallery({restaurant} : any) {

    const [modalVisible, setModalVisible] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(null);

    //open and close modal
    const openModal = (image : any) => {
        setSelectedImage(image);
        setModalVisible(true);
    }

    const closeModal = () => {
        setSelectedImage(null);
        setModalVisible(false);
    }

    //carousel view + styling
    const renderItem = ({ item } : any) => (
    <TouchableOpacity onPress={() => openModal({uri: item})}>
        <View style={styles.galleryImageContainer}>
            <Image source={{uri: item}} style={styles.image} />
        </View>
    </TouchableOpacity>
    )

    return (
        <View style={{padding: 10,}}>
            <Text h4 style={{...currentFont}}>Restaurant Photos</Text>
            <FlatList
            data={restaurant?.restaurantPhotos || []}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carousel}
            />
            <Text h4 style={{paddingTop: 25, ...currentFont}}>Food Photos</Text>
            <FlatList
            data={restaurant?.foodPhotos || []}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carousel}
            />

            {/* modal for selected image taking full screen */}
            <Modal visible={modalVisible} transparent={true} animationType="fade" onRequestClose={closeModal}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.modalBackground} onPress={closeModal}>
                        {selectedImage && (
                            <Image source={selectedImage} style={styles.fullImage}/>
                        )}
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}