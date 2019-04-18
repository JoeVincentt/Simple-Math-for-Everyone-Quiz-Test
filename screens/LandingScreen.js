import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { BounceButton } from "../components/Buttons";
import { ButtonText, MainText } from "../components/Text";
import { height, width } from "../constants/Layout";
import StyledView from "../components/StyledView";
import Slider from "react-native-slider";
import AdmobBanner from "../utils/showAdmobBanner";

export default class LandingScreen extends React.Component {
  state = {
    topNumber: 10
  };
  navigationParams = gamemode => {
    this.props.navigation.navigate("Game", {
      gamemode: gamemode,
      topNumber: this.state.topNumber
    });
  };

  render() {
    return (
      <StyledView>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ marginVertical: height * 0.05 }}>
            <View>
              <MainText style={{ padding: height * 0.025 }}>
                Enjoy Simple Math!
              </MainText>
              <MainText>Pick a maximum number:</MainText>
            </View>
            <View
              style={{
                justifyContent: "center"
              }}
            >
              <Slider
                minimumValue={5}
                maximumValue={100}
                step={5}
                value={this.state.topNumber}
                onValueChange={topNumber => this.setState({ topNumber })}
              />
              <ButtonText> choice: {this.state.topNumber} </ButtonText>
            </View>
          </View>
          <MainText>Choose an action:</MainText>
          <BounceButton
            style={styles.bounceBase}
            innerStyle={styles.bounceInner}
            onPress={() => this.navigationParams(actions.add)}
          >
            <ButtonText> 2 + 2 = ? </ButtonText>
          </BounceButton>
          <BounceButton
            style={styles.bounceBase}
            innerStyle={styles.bounceInner}
            onPress={() => this.navigationParams(actions.sub)}
          >
            <ButtonText> 2 - 2 = ? </ButtonText>
          </BounceButton>
          <BounceButton
            style={styles.bounceBase}
            innerStyle={styles.bounceInner}
            onPress={() => this.navigationParams(actions.mult)}
          >
            <ButtonText> 2 * 2 = ? </ButtonText>
          </BounceButton>
          <BounceButton
            style={styles.bounceBase}
            innerStyle={styles.bounceInner}
            onPress={() => this.navigationParams(actions.div)}
          >
            <ButtonText> 2 / 2 = ? </ButtonText>
          </BounceButton>
        </View>

        <AdmobBanner />
        <View
          style={{
            backgroundColor: "transparent",
            paddingBottom: height * 0.02
          }}
        />
      </StyledView>
    );
  }
}

const actions = {
  add: "add",
  sub: "sub",
  mult: "mult",
  div: "div"
};

const styles = StyleSheet.create({
  bounceBase: {
    marginVertical: height * 0.008
  },
  bounceInner: {
    paddingHorizontal: width * 0.2,
    paddingVertical: height * 0.01
  }
});
