import React from "react";
import { Platform } from "react-native";
import { AdMobInterstitial, AdMobRewarded } from "expo";

const INTERSTITIAL_ID =
  Platform.OS === "ios"
    ? "ca-app-pub-3940256099942544/1033173712"
    : "ca-app-pub-3940256099942544/1033173712";
const REWARDED_ID =
  Platform.OS === "ios"
    ? "ca-app-pub-3940256099942544/5224354917"
    : "ca-app-pub-3940256099942544/5224354917";

AdMobInterstitial.setAdUnitID(INTERSTITIAL_ID);
AdMobInterstitial.setTestDeviceID("EMULATOR");
AdMobRewarded.setAdUnitID(REWARDED_ID);
AdMobRewarded.setTestDeviceID("EMULATOR");

export const showAdmobRewardedAd = async () => {
  await AdMobRewarded.requestAdAsync();
  await AdMobRewarded.showAdAsync();
};

export const showAdmobInterstitialAd = async () => {
  await AdMobInterstitial.requestAdAsync();
  await AdMobInterstitial.showAdAsync();
};
