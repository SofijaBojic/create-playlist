import React, { Component, ReactElement } from "react";
import { connect } from "react-redux";
import ReactJWPlayer from "react-jw-player";
import { PlayerContainerStyle } from "./Player.styles";

class Player extends Component<any> {
  onVideoLoad = (): void => {
    this.props.setActiveVideo(window.jwplayer().getPlaylistIndex());
  }

  render(): ReactElement<any> {
    return (
      <PlayerContainerStyle>
        <ReactJWPlayer
          playerId="my-jw-player-instance"
          playerScript="https://content.jwplatform.com/libraries/S1V5XPQW.js"
          playlist={this.props.playlist}
          onVideoLoad={this.onVideoLoad}
        />
      </PlayerContainerStyle>
    );
  }
}

const mapStateToProps = (state: any) => ({
  playlist: state.playlist.videos
});

export default connect(
  mapStateToProps,
  null
)(Player);
