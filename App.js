import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon, LinearGradient } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import { GameProvider } from "./context/GameContext";
import { Root } from "native-base";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <GameProvider>
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <Root>
              <AppNavigator />
            </Root>
          </View>
        </GameProvider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/coin.png"),
        require("./assets/images/hint.png"),
        require("./assets/images/skip.png"),
        require("./assets/images/time.png"),
        require("./assets/sounds/click.wav"),
        require("./assets/sounds/ticking.wav"),
        require("./assets/sounds/hint.wav"),
        require("./assets/sounds/success.wav"),
        require("./assets/sounds/wrong.wav")
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        bangers: require("./assets/fonts/Bangers-Regular.ttf"),
        Roboto_medium: require("./assets/fonts/Roboto_medium.ttf"),
        Fredoka_One: require("./assets/fonts/FredokaOne-Regular.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
