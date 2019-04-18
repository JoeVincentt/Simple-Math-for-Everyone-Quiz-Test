import React from "react";
import { View, StyleSheet } from "react-native";

import { MainText } from "./Text";
import { width } from "../constants/Layout";

export const Question = ({ number1, number2, action, answer }) => (
  <>
    <View
      style={{
        flexDirection: "row"
      }}
    >
      <MainText
        style={{
          fontSize: width * 0.15
        }}
      >
        {` ${number1} ${action} ${number2} `}
      </MainText>
    </View>
    <MainText
      style={{
        fontSize: width * 0.15
      }}
    >
      {" "}
      ={" "}
    </MainText>
    <View style={styles.box}>
      <MainText
        style={{
          fontSize: width * 0.15,
          paddingHorizontal: width * 0.01
        }}
      >
        {answer.toString()}
      </MainText>
    </View>
  </>
);

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.5,
    height: width * 0.15,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 1
  }
});
