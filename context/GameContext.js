import React from "react";
import { AdMobInterstitial, AdMobRewarded } from "expo";
import { showAdmobInterstitialAd, showAdmobRewardedAd } from "../utils/showAd";
//Create context
export const GameContext = React.createContext();
export const GameConsumer = GameContext.Consumer;

//Save and retrieve data from local storage
const saveDataToSecureStorage = async (key, item) =>
  await Expo.SecureStore.setItemAsync(key, JSON.stringify(item));
// saveDataToSecureStorage("WordsMeaningCrystal", this.state.crystal);

const retrieveDataFromSecureStorage = async key =>
  await Expo.SecureStore.getItemAsync(key);
// let crystal = await retrieveDataFromSecureStorage(
//   "WordsMeaningCrystal"
// );
// if (crystal !== null) {
//   crystal = Number(JSON.parse(crystal));
//   this.setState({ crystal });
// }

export class GameProvider extends React.Component {
  state = {
    username: "",
    time: 25000,
    coins: 0,
    reducers: {
      pressMe: () => {
        console.log("hello");
      }
    }
  };

  componentDidMount() {
    console.log("context did mount");

    // Interstitial ad
    AdMobInterstitial.addEventListener("interstitialDidLoad", () => {});
    AdMobInterstitial.addEventListener("interstitialDidFailToLoad", () => {});
    AdMobInterstitial.addEventListener("interstitialDidOpen", () => {});
    AdMobInterstitial.addEventListener("interstitialDidClose", () => {});
    AdMobInterstitial.addEventListener(
      "interstitialWillLeaveApplication",
      () => {}
    );

    //Rewarded Add
    AdMobRewarded.addEventListener("rewardedVideoDidRewardUser", () => {
      soundPlay(require("../assets/sounds/success.wav"));
      this.context.reducers._getLifeAdd(105);
    });
    AdMobRewarded.addEventListener("rewardedVideoDidLoad", () => {});
    AdMobRewarded.addEventListener("rewardedVideoDidStart", () => {});
    AdMobRewarded.addEventListener("rewardedVideoDidFailToLoad", () => {
      soundPlay(require("../assets/sounds/success.wav"));
      this.context.reducers._getLifeAdd(105);
    });
    AdMobRewarded.addEventListener("rewardedVideoDidOpen", () => {});
    AdMobRewarded.addEventListener("rewardedVideoDidClose", () => {});
    AdMobRewarded.addEventListener(
      "rewardedVideoWillLeaveApplication",
      () => {}
    );
  }
  componentWillMount() {
    console.log("context will mount");
  }
  componentWillUnmount() {
    console.log("context will Unmount");
    AdMobInterstitial.removeAllListeners();
    AdMobRewarded.removeAllListeners();
  }

  render() {
    return (
      <GameContext.Provider value={this.state}>
        {this.props.children}
      </GameContext.Provider>
    );
  }
}
