import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { Card, Icon } from '@rneui/themed';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles/app-styles';
import axios from 'axios';
import Constants from 'expo-constants';
import Layout from '@/components/Layout';
import useLoadUser from '@/hooks/useLoadUser';
import { useFocusEffect } from '@react-navigation/native';

const UserProfile = () => {
  const { username, isGuest, loadUser } = useLoadUser();
  const [userNotes, setUserNotes] = useState<number>(0);
  const [userFavourites, setUserFavourites] = useState<number>(0);
  const [userPreferences, setUserPreferences] = useState<number>(0);
  const HOST_IP = Constants.expoConfig?.extra?.HOST_IP;

  useFocusEffect(
    useCallback(() => {
      loadUser();
      if (username) {
        fetchNotes();
        handleUserDetails();
      }
    }, [username])
  );

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    router.push('/');
    loadUser();
  };

  const fetchNotes = async () => {
    if (username) {
      const url = `http://${HOST_IP}:4000/note/getNotes/${username}`;
      try {
        const response = await axios.get(url);
        setUserNotes(response?.data?.length || 0);
      } catch (error) {
        console.error("Error fetching notes", error);
      }
    }
  };

  const handleUserDetails = async () => {
    try {
      if (username) {
        const response = await axios.get(`http://${HOST_IP}:4000/user/getUser/${username}`);
        setUserFavourites(response.data[0]?.favourites?.length || 0);
        setUserPreferences(response.data[0]?.preferences?.length || 0);
      }
    } catch (error) {
      console.error('Unable to get user details', error);
    }
  };

  return (
    <Layout>
      <Card containerStyle={styles.rectangle}>
        <Icon style={{ color: '#000000' }} name='account-circle' type='material' size={75} />

        {isGuest ? (
          <Text style={styles.supportingText}>
            Currently browsing as a guest. Please{' '}
            <Pressable onPress={() => router.push('/login')}>
                <Text style={[styles.supportingText, {color: '#720BC4', marginBottom: -11}]}>log in</Text>
            </Pressable>{' '}
            to add user preferences, favourites, and personal notes.
          </Text>
        ) : (
          <Text style={styles.subtitle}>{username}</Text>
        )}

        <TouchableOpacity style={styles.button} onPress={() => router.push('/settings')}>
          <Text style={styles.buttonText}>SETTINGS</Text>
        </TouchableOpacity>

        {!isGuest && (
          <View style={styles.userContainer}>
            <TouchableOpacity onPress={() => router.push('/notes')}>
              <Card containerStyle={styles.user}>
                <Icon style={styles.userIcon} name='note' type='material' size={40} />
                <Text style={styles.userCount}>{userNotes}</Text>
                <Text style={styles.userText}>Notes</Text>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/favourites')}>
              <Card containerStyle={styles.user}>
                <Icon style={styles.userIcon} name='favorite' type='material' size={40} />
                <Text style={styles.userCount}>{userFavourites}</Text>
                <Text style={styles.userText}>Favourites</Text>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/preferences')}>
              <Card containerStyle={styles.user}>
                <Icon style={styles.userIcon} name='checklist' type='material' size={40} />
                <Text style={styles.userCount}>{userPreferences}</Text>
                <Text style={styles.userText}>Preferences</Text>
              </Card>
            </TouchableOpacity>
          </View>
        )}

        {!isGuest && (
          <View style={styles.userContainer}>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.signUpButtonText}>LOGOUT</Text>
            </TouchableOpacity>
          </View>
        )}
      </Card>
    </Layout>
  );
};

export default UserProfile;