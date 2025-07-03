import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LogBox, StatusBar } from 'react-native';
import colors from './src/styles/colors';
import { LanguageProvider } from './src/localization/LanguageContext';
import { NavigationContainer } from '@react-navigation/native';
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <LanguageProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <SafeAreaView
            style={{ flex: 1, backgroundColor: colors.primary }}
            edges={['right', 'top', 'left']}
          >
            <StatusBar
              barStyle="light-content"
              backgroundColor={colors.primary}
            />
            <RootNavigator />
          </SafeAreaView>
        </SafeAreaProvider>
      </NavigationContainer>
    </LanguageProvider>
  );
}
