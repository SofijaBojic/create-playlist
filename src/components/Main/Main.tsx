import React, { Component, ReactElement } from "react";
import { connect } from "react-redux";
import Header from "../Header";
import { MainStyle } from "./Main.styles";
import { Grid, GridElement } from "../../styles/grid";
import Player from "../Player";
import Form from "../Form";
import VideoList from "../VideoList";
import { addVideo, setActiveVideo } from "../../store/actions";

class Main extends Component<IMain> {
  render(): ReactElement<any> {
    const { setActiveVideo, addVideo, playlist, activeVideo } = this.props;
    return (
      <MainStyle>
        <Header />
        <Grid>
          <GridElement lgColumn="3 / 11" mdColumn="3 / 11" smColumn="1 / 7">
            <Player setActiveVideo={setActiveVideo} />
          </GridElement>
        </Grid>
        <Grid>
          <GridElement lgColumn="1 / 13" mdColumn="1 / 13" smColumn="1 / 7">
            <Form addVideo={addVideo} />
            <VideoList
              videoList={playlist}
              setActiveVideo={setActiveVideo}
              activeVideo={activeVideo}
            />
          </GridElement>
        </Grid>
        {/*<Footer /> */}
      </MainStyle>
    );
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  addVideo: ({ file, image, title }: IVideoListItem) =>
    dispatch(addVideo({ file, image, title })),
  setActiveVideo: (index: number) => dispatch(setActiveVideo(index))
});

const mapStateToProps = (state: any) => ({
  playlist: state.playlist.videos,
  activeVideo: state.playlist.activeVideo
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

