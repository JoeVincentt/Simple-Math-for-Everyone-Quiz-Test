import React from "react";
import { StyleSheet, View, Image, Platform } from "react-native";
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
  actionDot,
  actionCheck,
  actionSkip,
  actionNegative
}) => {
  return (
    <>
      <View style={styles.numbersRow}>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => action7()}
        >
          <ButtonText> 7 </ButtonText>
        </BounceButton>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => action8()}
        >
          <ButtonText> 8 </ButtonText>
        </BounceButton>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => action9()}
        >
          <ButtonText> 9 </ButtonText>
        </BounceButton>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => action0()}
        >
          <ButtonText> 0 </ButtonText>
        </BounceButton>

        <BounceButton
          colors={["#00e676", "#64dd17"]}
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => actionCheck()}
        >
          <ButtonText> ✔ </ButtonText>
        </BounceButton>
      </View>
      <View style={styles.numbersRow}>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => action4()}
        >
          <ButtonText> 4 </ButtonText>
        </BounceButton>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => action5()}
        >
          <ButtonText> 5 </ButtonText>
        </BounceButton>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => action6()}
        >
          <ButtonText> 6 </ButtonText>
        </BounceButton>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => actionDot()}
        >
          <ButtonText> . </ButtonText>
        </BounceButton>
        <View style={styles.bounceBase} />
      </View>
      <View style={styles.numbersRow}>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => action1()}
        >
          <ButtonText> 1 </ButtonText>
        </BounceButton>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => action2()}
        >
          <ButtonText> 2 </ButtonText>
        </BounceButton>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => action3()}
        >
          <ButtonText> 3 </ButtonText>
        </BounceButton>
        <BounceButton
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => actionNegative()}
        >
          <ButtonText> - </ButtonText>
        </BounceButton>
        <BounceButton
          colors={["#00e676", "#64dd17"]}
          style={styles.bounceBase}
          innerStyle={styles.bounceInner}
          onPress={() => actionSkip()}
        >
          <Image
            source={require("../assets/images/skip.png")}
            style={{
              overflow: "visible",
              height: height * 0.04,
              width: width * 0.058
            }}
          />
        </BounceButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bounceBase: {
    height: height * 0.07,
    width: width * 0.15,
    marginVertical: height * 0.004,
    marginHorizontal: width * 0.014
  },
  bounceInner: {
    height: height * 0.07,
    width: width * 0.15
  },
  numbersRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
