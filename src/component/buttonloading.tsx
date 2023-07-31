import React, { FC, useState } from 'react';
import { ActivityIndicator, Text, StyleSheet, View, Pressable } from 'react-native';

interface buttonLoadingProps {
    title : string;
    titleLoading : string;
    isLoading : boolean;
    onPress : () => void;
}

const ButtonLoading: FC<buttonLoadingProps> = (props) => {
    const [isPressed, setIsPressed] = useState(false);
    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    return (
        <View className = {isPressed ? "border p-[2px] rounded-[5px] border-[#38857B]" : "p-[3px] border-none rounded-[5px]"}>
            <Pressable
                onPress={props.onPress}
                onPressOut={handlePressOut}
                onPressIn={handlePressIn}
                disabled={props.isLoading}
                className={props.isLoading ? "bg-[#5A7894] py-[10px] px-10 rounded-[5px] items-center" :
                    "items-center bg-[#38857B] py-[10px] px-2 rounded-[5px]"}
            >
                <View className="flex flex-row">
                    <Text style={styles.buttonText} className={props.isLoading ? "text-[#BBDAED]" : "text-white "}>{props.isLoading ? props.titleLoading : props.title}</Text>
                    {props.isLoading ? (
                        <ActivityIndicator className="ml-1" size="small" color="#FFFFFF" />
                    ) : (
                        null
                    )}
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        fontFamily : 'cera-pro',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ButtonLoading;