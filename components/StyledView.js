import React, { Component } from "react";
import { Container } from "native-base";
import { LinearGradient } from "expo";

export default class StyledView extends Component {
  render() {
    return (
      <Container>
        <LinearGradient
          colors={["#81d4fa", "#29b6f6", "#03a9f4", "#01579b"]}
          style={{
            flex: 1,
            padding: 0
          }}
        >
          {this.props.children}
        </LinearGradient>
      </Container>
    );
  }
}
