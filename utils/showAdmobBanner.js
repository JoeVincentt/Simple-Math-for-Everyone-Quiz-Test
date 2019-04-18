import React from "react";
import { Platform } from "react-native";
import { AdMobBanner } from "expo";

class AdComponent extends React.Component {
  render() {
    return (
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID={
          Platform.OS === "ios"
            ? "ca-app-pub-3940256099942544/6300978111"
            : "ca-app-pub-3940256099942544/6300978111"
        } // Test ID, Replace with your-admob-unit-id
        testDeviceID="EMULATOR"
        onDidFailToReceiveAdWithError={this.bannerError}
      />
    );
  }
}

export default AdComponent;
