import AsyncStorage from '@react-native-async-storage/async-storage'

// Save the pin code value to local storage
export const savePinCodeToLocalStorage = async (key : string, value : string) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log(`${key} value saved successfully!`);
  } catch (error) {
    console.log(`Error saving ${key}: ${error}`);
  }
};

// Retrieve the pin code value from local storage
export const getPinCodeFromLocalStorage = async (key : string) => {
  try {
    const value : string | null = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('Value retrieved successfully!');
      return value;
    } else {
      console.log('Value not found!');
      return "";
    }
  } catch (error) {
    console.log(`Error retrieving value: ${error}`);
    return "";
  }
};