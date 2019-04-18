import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { BounceButton } from "../components/Buttons";
import { ButtonText, MainText } from "../components/Text";
import { height, width } from "../constants/Layout";
import StyledView from "../components/StyledView";

export default class LandingScreen extends React.Component {
  navigationParams = gamemode => {
    this.props.navigation.navigate("Game", {
      gamemode: gamemode
    });
  };

  componentDidMount() {
    console.log("landing did mount");
  }
  componentWillMount() {
    console.log("landing will mount");
  }
  componentWillUnmount() {
    console.log("landing will Unmount");
  }

  render() {
    return (
      <StyledView>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <BounceButton
            style={styles.bounceBase}
            innerStyle={styles.bounceInner}
            onPress={() => this.navigationParams("add")}
          >
            <ButtonText> 2 + 2 = ? </ButtonText>
          </BounceButton>
          <BounceButton
            style={styles.bounceBase}
            innerStyle={styles.bounceInner}
            onPress={() => this.navigationParams("sub")}
          >
            <ButtonText> 2 - 2 = ? </ButtonText>
          </BounceButton>
          <BounceButton
            style={styles.bounceBase}
            innerStyle={styles.bounceInner}
            onPress={() => this.navigationParams("mult")}
          >
            <ButtonText> 2 * 2 = ? </ButtonText>
          </BounceButton>
          <BounceButton
            style={styles.bounceBase}
            innerStyle={styles.bounceInner}
            onPress={() => this.navigationParams("div")}
          >
            <ButtonText> 2 / 2 = ? </ButtonText>
          </BounceButton>
        </View>
      </StyledView>
    );
  }
}

const styles = StyleSheet.create({
  bounceBase: {
    marginVertical: height * 0.008
  },
  bounceInner: {
    paddingHorizontal: width * 0.2,
    paddingVertical: height * 0.01
  }
});
