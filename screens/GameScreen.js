import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform
} from "react-native";
import StyledView from "../components/StyledView";
import LoadingModal from "../components/LoadingModal";
import { BounceButton } from "../components/Buttons";
import { MainText, ButtonText } from "../components/Text";
import { height, width } from "../constants/Layout";
import { AnswerButtons } from "../components/AnswerButtons";
import { Question } from "../components/Question";
import { GameConsumer } from "../context/GameContext";
import { GameHeader } from "../components/GameHeader";

export default class GameScreen extends React.Component {
  state = {
    // GameMode: this.props.navigation.getParam("gamemode"),
    loading: true,
    answer: 111,
    number1: 2,
    number2: 2,
    action: "+"
  };
  componentDidMount() {
    console.log("Game did mount");
    this.setState({ loading: false });
  }
  componentWillMount() {
    console.log("game mode:", this.props.navigation.getParam("gamemode"));
    console.log("Game will mount");
  }
  componentWillUnmount() {
    console.log("Game will Unmount");
  }

  callNumber = (maximum, minimum) => {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  };

  callMath = () => {
    const actions = [
      (add = (x, y) => {
        return x + y;
      }),
      (subtract = (x, y) => {
        return x - y;
      }),
      (multiply = (x, y) => {
        return (x * y).toFixed(2);
      }),
      (divide = (x, y) => {
        return (x / y).toFixed(2);
      })
    ];

    const actionNumber = this.callNumber(0, 4);
    switch (actionNumber) {
      case 0:
        console.log("+");
        break;
      case 1:
        console.log("-");
        break;
      case 2:
        console.log("*");
        break;
      case 3:
        console.log("/");
        break;
      default:
    }
    const actionNumber2 = this.callNumber(0, 4);
    switch (actionNumber2) {
      case 0:
        console.log("+");
        break;
      case 1:
        console.log("-");
        break;
      case 2:
        console.log("*");
        break;
      case 3:
        console.log("/");
        break;
      default:
    }
    const actionNumber3 = this.callNumber(0, 4);
    switch (actionNumber3) {
      case 0:
        console.log("+");
        break;
      case 1:
        console.log("-");
        break;
      case 2:
        console.log("*");
        break;
      case 3:
        console.log("/");
        break;
      default:
    }

    const x = this.callNumber(0, 10);
    const y = this.callNumber(0, 10);
    const z = this.callNumber(0, 10);

    const chosenAction = actions[actionNumber];
    const chosenAction2 = actions[actionNumber2];
    const chosenAction3 = actions[actionNumber3];

    console.log(x, y, z);

    console.log(chosenAction(x, y));
    console.log(chosenAction2(y, z));
    console.log(chosenAction3(chosenAction(x, y), chosenAction2(y, z)));
  };

  render() {
    const { loading, number1, number2, action, answer } = this.state;
    return (
      <>
        <GameConsumer>
          {context => (
            <>
              <StyledView
                ref={ref => {
                  this.context = context;
                }}
              >
                <View style={{ flex: 1 }}>
                  <GameHeader coins={10} />
                  <View style={styles.box}>
                    <Question
                      number1={number1}
                      number2={number2}
                      action={action}
                      answer={answer}
                    />
                  </View>
                  <View style={{ height: height * 0.4 }}>
                    <AnswerButtons />
                  </View>
                </View>
              </StyledView>
              <LoadingModal loading={loading} />
            </>
          )}
        </GameConsumer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    height: height * 0.5,
    justifyContent: "center",
    alignItems: "center"
  }
});
