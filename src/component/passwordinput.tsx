import React, { FC, useState } from 'react';
import { TextInput, View, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface passwordInputProps {
    label : string ;
    name : string;
    placeholder : string;
    password : boolean;
    secureTextEntry : boolean;
    innerRef : any;
    value: string; 
    onChangeText: (text: string) => void;
  }

const PasswordInput: FC<passwordInputProps> = (props) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                secureTextEntry={!isPasswordVisible}
                placeholder={props.placeholder}
                placeholderTextColor={'grey'}
                name={props.name}
                label={props.label}
                value={props.value} 
                onChangeText={props.onChangeText}
            />
            <Pressable
                style={styles.iconContainer}
                onPress={togglePasswordVisibility}
            >
                <MaterialIcons
                    name={isPasswordVisible ? 'visibility' : 'visibility-off'}
                    size={24}
                    color="#888"
                />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#8AAEC9',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    input: {
        fontFamily: 'cera-pro',
        flex: 1,
        height: 30,
    },
    iconContainer: {
        marginLeft: 8,
    },
});

export default PasswordInput;
