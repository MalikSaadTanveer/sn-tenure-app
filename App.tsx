import { AppRegistry, View } from 'react-native';
import { useFonts } from 'expo-font';
import Router from "./router";

export default function App() {

  const [fontsLoaded] = useFonts({
    "cera-pro" : require('./assets/fonts/Cera-ProRegular.otf'),
    "cera-pro-bold" : require('./assets/fonts/Cera-ProBold.otf'),
  });

  if (!fontsLoaded) {
    return <View />; // Return an empty view while fonts are loading
  }

  return <Router />;
}

AppRegistry.registerComponent('TenureApp', () => App);