import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "native-base";
import { BounceButton } from "../components/Buttons";
import { ButtonText } from "../components/Text";
import { height, width } from "../constants/Layout";

export const AnswerButtons = ({
  action1,
  action2,
  action3,
  action4,
  action5,
  action6,
  action7,
  action8,
  action9,
  action0,
  actiionSubmit
}) => {
  return (
    <>
      <View style={styles.numbersRow}>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => {}}
        >
          <ButtonText> 7 </ButtonText>
        </BounceButton>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => {}}
        >
          <ButtonText> 8 </ButtonText>
        </BounceButton>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => {}}
        >
          <ButtonText> 9 </ButtonText>
        </BounceButton>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => {}}
        >
          <ButtonText> 0 </ButtonText>
        </BounceButton>
      </View>
      <View style={styles.numbersRow}>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => {}}
        >
          <ButtonText> 4 </ButtonText>
        </BounceButton>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => {}}
        >
          <ButtonText> 5 </ButtonText>
        </BounceButton>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => {}}
        >
          <ButtonText> 6 </ButtonText>
        </BounceButton>
        <View style={styles.bounceBase} />
      </View>
      <View style={styles.numbersRow}>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => {}}
        >
          <ButtonText> 1 </ButtonText>
        </BounceButton>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => {}}
        >
          <ButtonText> 2 </ButtonText>
        </BounceButton>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => {}}
        >
          <ButtonText> 3 </ButtonText>
        </BounceButton>
        <BounceButton
          colors={["#00e676", "#64dd17"]}
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => {}}
        >
          <ButtonText> ✔ </ButtonText>
        </BounceButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bounceBase: {
    height: height * 0.1,
    width: width * 0.2,
    marginVertical: height * 0.005,
    marginHorizontal: width * 0.018
  },
  bounceInner: {
    height: height * 0.1,
    width: width * 0.2
  },
  numbersRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
