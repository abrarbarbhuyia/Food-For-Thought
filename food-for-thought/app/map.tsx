import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import SearchBarComponent from "@/components/SearchBar";
import { Badge, Icon } from "@rneui/themed";
import { DietaryFilterModal } from '@/components/DietaryFilterModal';
import Header from '@/components/Header';
import axios from 'axios';
import { HOST_IP } from '@env';

const Map = () => {
  const [filterType, setFilterType] = useState<string | undefined>();
  const [activeFilters, setActiveFilters] = useState<{ type: string, value: string }[]>([]);
  const [restaurants, setRestaurants] = useState<any[]>([]); // Stores the fetched restaurant data
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filterTypes = ['diets', 'allergens', 'ingredients', 'cuisine'];

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(`http://${HOST_IP}:4000/search`, {
        params: {
          ingredientFilter: searchTerm,
          allergens: activeFilters.filter(f => f.type === 'allergen').map(f => f.value),
          diets: activeFilters.filter(f => f.type === 'diet').map(f => f.value),
        },
      });
      setRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, [searchTerm, activeFilters]);

  const handleSearch = (search: string) => {
    setSearchTerm(search);
  };

  const renderRestaurant = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => console.log(`Clicked restaurant: ${item.name}`)}>
      <View style={styles.restaurantItem}>
        <Text style={styles.restaurantName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Header />
        <View style={{ backgroundColor: '#FBF8FF', borderRadius: 20, flex: 1, maxHeight: 200 }}>
          <SearchBarComponent onSearch={handleSearch} />
          <View style={{ flex: 1, maxHeight: 60 }}>
            <View style={styles.flexContainer}>
              <Icon name='sliders' type='font-awesome' iconStyle={styles.icon} size={20} />
              {activeFilters.map(f => (
                <Badge
                  badgeStyle={{ ...styles.filterBackground, backgroundColor: filterColours[f.type].fill, borderColor: filterColours[f.type].border }}
                  textStyle={styles.filterText}
                  key={`${f.type}-${f.value}`}
                  value={
                    <Text style={styles.filterText}>
                      {capitaliseFirstLetter(f.value)}
                      <Icon name='x' type='feather' iconStyle={styles.badgesCross} size={15} onPress={() => setActiveFilters(activeFilters.filter(af => af.value !== f.value))} />
                    </Text>
                  }
                />
              ))}
            </View>
            <View style={{ ...styles.flexContainer, paddingHorizontal: 8 }}>
              {filterTypes.map(f => (
                <Badge
                  badgeStyle={{ ...styles.typesBackground, ...(filterType === f && { backgroundColor: filterColours['selected'].fill, borderColor: filterColours['selected'].border }) }}
                  textStyle={styles.typesText}
                  value={capitaliseFirstLetter(f)}
                  key={f}
                  onPress={() => setFilterType(f)}
                />
              ))}
            </View>
          </View>
          <Button onPress={handlePresentModalPress} title="Present Modal" color="black" />
          <BottomSheetModal ref={bottomSheetModalRef} index={1} snapPoints={snapPoints} onChange={handleSheetChanges}>
            <BottomSheetView style={styles.contentContainer}>
              <Text>Awesome 🎉</Text>
            </BottomSheetView>
          </BottomSheetModal>
        </View>
        <View style={styles.restaurantListContainer}>
          <FlatList
            data={restaurants}
            renderItem={renderRestaurant}
            keyExtractor={item => item.restaurantId}
          />
        </View>
      </View>
      {filterType && <DietaryFilterModal filterType={filterType} setShowModal={setFilterType} />}
    </BottomSheetModalProvider>
  );
};

function capitaliseFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const filterColours: { [key: string]: { fill: string, border: string } } = {
  'diet': { fill: '#FFE7DC', border: '#FEBFAC' },
  'allergen': { fill: '#F3D9FF', border: '#D59CEF' },
  'ingredient': { fill: '#E4EDFF', border: '#A8C1F3' },
  'cuisine': { fill: '#E7FFE7', border: '#B1F6B1' },
  'selected': { fill: '#E8DEF8', border: '#BDB0CA' }
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: '#E6D7FA' },
  contentContainer: { flex: 1, alignItems: 'center' },
  flexContainer: { flex: 1, flexDirection: 'row', gap: 4 },
  typesBackground: { backgroundColor: '#FBF8FF', height: 28, paddingLeft: 4, paddingRight: 4, borderRadius: 8, borderColor: '#D7CEE4', borderWidth: 1 },
  typesText: { color: '#625B71', fontFamily: 'Roboto' },
  filterBackground: { backgroundColor: '#E8DEF8', height: 28, paddingLeft: 4, paddingRight: 4, borderRadius: 8, borderWidth: 1 },
  filterText: { color: '#28005D', fontSize: 13, fontFamily: 'Roboto' },
  restaurantListContainer: { flex: 1, marginTop: 20, paddingHorizontal: 20 },
  restaurantItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#EEE' },
  restaurantName: { fontSize: 18, fontWeight: 'bold' },
  icon: { color: '#28005D' },
  badgesCross: { color: '#28005D', marginLeft: 8 },
});

export default Map;