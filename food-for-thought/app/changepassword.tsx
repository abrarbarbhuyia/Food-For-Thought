import { router } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { Card } from "@rneui/themed";
import { styles } from "../styles/app-styles";
import Constants from "expo-constants";
import Layout from "@/components/Layout";
import useLoadUser from '@/hooks/useLoadUser';

const ChangePassword = () => {
  const { username, loadUser } = useLoadUser();
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>();

  const HOST_IP = Constants.expoConfig?.extra?.HOST_IP;

  useEffect(() => {
    loadUser();
  }, [loadUser, username]);

  const handleChangePassword = useCallback(async () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      await axios.post(`http://${HOST_IP}:4000/user/changepassword`, {
        username,
        oldPassword,
        newPassword,
      });
      router.push("/settings");
    } catch (error: any) {
      setErrorMessage(
        error?.response?.data?.message ||
          "Unable to change password. Try again later."
      );
    }
  }, [oldPassword, newPassword, confirmPassword]);

  return (
    <Layout>
      <Card containerStyle={styles.rectangle}>
        <Image
          source={require("../assets/images/food-for-thought-logo.png")}
          style={styles.logo}
        />

        <Text style={[styles.subtitle, { marginBottom: 50 }]}>
          Change Password
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Current Password</Text>
          <TextInput
            style={styles.input}
            value={oldPassword}
            onChangeText={setOldPassword}
            secureTextEntry
          />
          <Icon name="lock" size={20} color="#7E7093" style={styles.icon} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>New Password</Text>
          <TextInput
            style={styles.input}
            value={newPassword}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Icon name="lock" size={20} color="#7E7093" style={styles.icon} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <Icon name="lock" size={20} color="#7E7093" style={styles.icon} />
        </View>

        {errorMessage && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}

        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
          <Text style={styles.buttonText}>CHANGE PASSWORD</Text>
        </TouchableOpacity>
      </Card>
    </Layout>
  );
};

export default ChangePassword;
