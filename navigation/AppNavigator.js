import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import GameStack from "./GameNavigator";

export default createAppContainer(
  createSwitchNavigator(
    {
      Main: GameStack
    },
    {
      initialRouteName: "Main"
    }
  )
);
