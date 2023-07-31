import React, { FC } from "react";
import { Image } from "react-native";

interface imageviewerProps {
    placeholderImageSource : string;
    selectedImage : string;
}

export const ImageViewer: FC<imageviewerProps> = ( props ) => {
    const imageSource = props.selectedImage !== ""
      ? { uri: props.selectedImage }
      : props.placeholderImageSource;
  
    return <Image source={imageSource} resizeMode="contain" className="flex-row items-center w-[80px] h-[80px] rounded-full" />;
  }