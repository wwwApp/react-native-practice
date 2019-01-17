import React from "react";
import { Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const DotMenu = () => {
  return (
      <TouchableOpacity>
          <Image
          style={{width: 30, height: 30}}
          source={require('./../assets/dotMenu.png')}
        />
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
});

export { DotMenu };
