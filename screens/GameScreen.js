import React from "react";
import { StyleSheet, View, Vibration } from "react-native";
import StyledView from "../components/StyledView";
import LoadingModal from "../components/LoadingModal";
import { height, width } from "../constants/Layout";
import { AnswerButtons } from "../components/AnswerButtons";
import { Question } from "../components/Question";
import { GameConsumer } from "../context/GameContext";
import { GameHeader } from "../components/GameHeader";
import { _showToast } from "../utils/ShowToast";
import { soundPlay } from "../utils/soundPlay";
import AdmobBanner from "../utils/showAdmobBanner";
import { showAdmobInterstitialAd, showAdmobRewardedAd } from "../utils/showAd";

export default class GameScreen extends React.Component {
  state = {
    GameMode: this.props.navigation.getParam("gamemode"),
    topNumber: this.props.navigation.getParam("topNumber"),
    rightAnswer: "",
    x: "",
    y: "",
    loading: true,
    answer: "",
    action: "",
    showedHint: false,
    usedEightHints: 0,
    answeredEightWrong: 0,
    answeredTenCorrect: 0
  };
  componentDidMount() {
    this.setState({ loading: false });
    this.loadEquation();
  }

  randomNumberInRange = (maximum, minimum) => {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  };

  loadEquation = async () => {
    const x = this.randomNumberInRange(1, this.state.topNumber);
    const y = this.randomNumberInRange(1, this.state.topNumber);
    let rightAnswer;
    switch (this.state.GameMode) {
      case "add":
        rightAnswer = x + y;
        await this.setState({
          rightAnswer,
          action: "+",
          answer: "",
          showedHint: false,
          x,
          y
        });
        return;
      case "sub":
        rightAnswer = x - y;
        await this.setState({
          rightAnswer,
          action: "-",
          answer: "",
          showedHint: false,
          x,
          y
        });
        return;
      case "mult":
        rightAnswer = x * y;
        await this.setState({
          rightAnswer,
          action: "*",
          answer: "",
          showedHint: false,
          x,
          y
        });
        return;
      case "div":
        rightAnswer = Math.floor(x / y);
        if (x % y !== 0 || rightAnswer === 1) {
          return this.loadEquation();
        }
        await this.setState({
          rightAnswer,
          action: "/",
          answer: "",
          showedHint: false,
          x,
          y
        });
        return;
    }
  };
  action1 = () => {
    soundPlay(require("../assets/sounds/click.wav"));
    this.setState({ answer: (this.state.answer + 1).toString() });
  };
  action2 = () => {
    soundPlay(require("../assets/sounds/click.wav"));
    this.setState({ answer: (this.state.answer + 2).toString() });
  };
  action3 = () => {
    soundPlay(require("../assets/sounds/click.wav"));
    this.setState({ answer: (this.state.answer + 3).toString() });
  };
  action4 = () => {
    soundPlay(require("../assets/sounds/click.wav"));
    this.setState({ answer: (this.state.answer + 4).toString() });
  };
  action5 = () => {
    soundPlay(require("../assets/sounds/click.wav"));
    this.setState({ answer: (this.state.answer + 5).toString() });
  };
  action6 = () => {
    soundPlay(require("../assets/sounds/click.wav"));
    this.setState({ answer: (this.state.answer + 6).toString() });
  };
  action7 = () => {
    soundPlay(require("../assets/sounds/click.wav"));
    this.setState({ answer: (this.state.answer + 7).toString() });
  };
  action8 = () => {
    soundPlay(require("../assets/sounds/click.wav"));
    this.setState({ answer: (this.state.answer + 8).toString() });
  };
  action9 = () => {
    soundPlay(require("../assets/sounds/click.wav"));
    this.setState({ answer: (this.state.answer + 9).toString() });
  };
  action0 = () => {
    soundPlay(require("../assets/sounds/click.wav"));
    this.setState({ answer: (this.state.answer + 0).toString() });
  };
  actionDot = () => {
    soundPlay(require("../assets/sounds/click.wav"));
    this.setState({ answer: (this.state.answer + ".").toString() });
  };
  actionNegative = () => {
    soundPlay(require("../assets/sounds/click.wav"));
    this.setState({ answer: (this.state.answer + "-").toString() });
  };
  actionSkip = () => {
    soundPlay(require("../assets/sounds/hint.wav"));

    this.loadEquation();
  };

  actionCheck = () => {
    if (this.state.showedHint) {
      soundPlay(require("../assets/sounds/hint.wav"));
      _showToast(" no cheating ", 2000, "warning", "top");
      this.loadEquation();
      return;
    }
    if (this.state.answer.length === 0) {
      soundPlay(require("../assets/sounds/wrong.wav"));
      _showToast(" no answer ", 2000, "warning", "top");
      return;
    }
    if (this.state.answer.toString() === this.state.rightAnswer.toString()) {
      if (this.state.answeredTenCorrect >= 8) {
        showAdmobInterstitialAd();
        this.setState({ answeredTenCorrect: 0 });
      }
      this.setState({ answeredTenCorrect: this.state.answeredTenCorrect + 1 });
      soundPlay(require("../assets/sounds/success.wav"));
      _showToast(" C o r r e c t ! ", 2000, "success", "top");

      this.loadEquation();
      this.context.reducers.addCoins();
      return;
    }
    if (this.state.answer.toString() !== this.state.rightAnswer.toString()) {
      if (this.state.answeredEightWrong >= 8) {
        showAdmobInterstitialAd();
        showAdmobRewardedAd();
        this.setState({ answeredEightWrong: 0 });
      }
      this.setState({
        answeredEightWrong: this.state.answeredEightWrong + 1,
        answer: ""
      });

      Vibration.vibrate(600);
      soundPlay(require("../assets/sounds/wrong.wav"));
      _showToast(" wrong, please try again! ", 4000, "danger", "top");
      return;
    }
  };

  showHint = () => {
    if (this.state.usedEightHints >= 6) {
      showAdmobInterstitialAd();
      showAdmobRewardedAd();
      this.setState({ usedEightHints: 0 });
    }
    this.setState({
      answer: this.state.rightAnswer,
      showedHint: true,
      usedEightHints: this.state.usedEightHints + 1
    });
  };

  clearField = () => {
    if (this.state.answer.length === 0) {
      return;
    }
    soundPlay(require("../assets/sounds/hint.wav"));
    this.setState({ answer: "" });
  };

  render() {
    const { loading, action, answer, x, y } = this.state;
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
                <GameHeader coins={context.coins} showHint={this.showHint} />
                <View style={{ flex: 1 }}>
                  <View style={styles.box}>
                    <Question
                      number1={x}
                      number2={y}
                      action={action}
                      answer={answer}
                      clearField={this.clearField}
                    />
                  </View>
                  <View style={{ height: height * 0.4 }}>
                    <AnswerButtons
                      action1={this.action1}
                      action2={this.action2}
                      action3={this.action3}
                      action4={this.action4}
                      action5={this.action5}
                      action6={this.action6}
                      action7={this.action7}
                      action8={this.action8}
                      action9={this.action9}
                      action0={this.action0}
                      actionDot={this.actionDot}
                      actionNegative={this.actionNegative}
                      actionSkip={this.actionSkip}
                      actionCheck={this.actionCheck}
                    />
                  </View>
                </View>
                <AdmobBanner />
                <View
                  style={{
                    backgroundColor: "transparent",
                    paddingBottom: height * 0.02
                  }}
                />
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
