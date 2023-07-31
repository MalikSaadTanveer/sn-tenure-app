import React, {useState, ReactNode, FC} from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


interface Category {
  title: string;
  description: string;
  iconColor: string;
  icon: ReactNode;
  route: string;
}

interface categoryItemProps {
    item: Category;
}
const CategoryItem: FC<categoryItemProps> = (props) => {
    const item = props.item;
    const navigation = useNavigation();
    const [isPressed, setIsPressed] = useState(false);
    const handlePressIn = () => {
        setIsPressed(true);
    };
  
    const handlePressOut = () => {
        setIsPressed(false);
    };
  
    return (
      <Pressable
        onPress={() => (navigation.navigate(item.route))}
        onPressOut={handlePressOut}
        onPressIn={handlePressIn}
        className={isPressed ? "bg-[#EBC55B] w-[43%] translate-x-4 mr-5 p-[4px] rounded-md mb-6 translate-y-4 h-[165px] flex flex-col gap-2"
                  : "bg-white w-[43%] translate-x-4 mr-5 p-[4px] rounded-md mb-6 translate-y-4 h-[165px] flex flex-col gap-2"}
        style={styles.dropshadow}
        >
        <View
          style={{
            backgroundColor: item.iconColor,
            width: 50,
            height: 50,
          }}
          className="rounded-full flex items-center justify-center flex-row">
          {item.icon}
        </View>
        <Text className="font-semibold text-[15px] font-sans" numberOfLines={1} >{item.title}</Text>
        <Text className="text-[12px] font-sans" numberOfLines={2}>{item.description}</Text>
      </Pressable>
    )
}

const styles = StyleSheet.create({
    dropshadow: {
      marginHorizontal: 4,
      // No options forshadow offset, shadow opacity like iOS
      elevation: 5,
      // shadow color
      shadowColor: 'black',
      shadowRadius: 8,
      // work for iOS only
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
    },
  });

export default CategoryItem;