import { useState } from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';


///
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

///
SplashScreen.preventAutoHideAsync();

export default function Home() {
  const router = useRouter();

  ///
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async () =>  {
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded) return null;
  ///

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
      onLayout={onLayoutRootView}
    >
      <Stack.Screen 
        options={{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
          ),
          headerTitle: '',
          headerTitleAlign:'center',
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          flex: 1,
          padding: SIZES.medium,
        }}>
          <Welcome
          
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}
