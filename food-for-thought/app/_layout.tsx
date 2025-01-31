import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
      <GestureHandlerRootView style={{flex: 1}}>
          <Stack>
            <Stack.Screen name="index" options={{headerShown:false}}/>
            <Stack.Screen name="map" options={{headerShown:false,fullScreenGestureEnabled:true,gestureDirection:'horizontal'}}/>
            <Stack.Screen name="login" options={{headerShown:false,fullScreenGestureEnabled:true,gestureDirection:'horizontal'}}/>
            <Stack.Screen name="register" options={{headerShown:false,fullScreenGestureEnabled:true,gestureDirection:'horizontal'}}/>
            <Stack.Screen name="user" options={{headerShown:false,fullScreenGestureEnabled:true,gestureDirection:'horizontal'}}/>
            <Stack.Screen name="home" options={{headerShown:false,gestureEnabled:false}}/>
            <Stack.Screen name="restaurant" options={{headerShown:false,fullScreenGestureEnabled:true,gestureDirection:'horizontal'}}/>
            <Stack.Screen name ="preferences" options={{headerShown:false,fullScreenGestureEnabled:true,gestureDirection:'horizontal'}}/>
            <Stack.Screen name ="settings" options={{headerShown:false,fullScreenGestureEnabled:true,gestureDirection:'horizontal'}}/>
            <Stack.Screen name ="changepassword" options={{headerShown:false,fullScreenGestureEnabled:true,gestureDirection:'horizontal'}}/>
            <Stack.Screen name ="notes" options={{headerShown:false,fullScreenGestureEnabled:true,gestureDirection:'horizontal'}}/>
            <Stack.Screen name ="favourites" options={{headerShown:false,fullScreenGestureEnabled:true,gestureDirection:'horizontal'}}/>
          </Stack>
      </GestureHandlerRootView>
  );
}
