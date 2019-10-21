import React, { FunctionComponent, ReactElement } from "react";
import {
    VideoListStyle,
    VideoItemStyle,
    VideoItemTitleStyle,
    VideoItemImgStyle
} from "./VideoList.styles";
import { Grid, GridElement } from "../../styles/grid";
import { Heading3 } from "../Text/Text.style";

const VideoList: FunctionComponent<IVideoList> = (props): ReactElement<any> => (
    <Grid>
        <GridElement lgColumn="1 / 13" mdColumn="1 / 13" smColumn="1 / 7">
            <VideoListStyle>
                {props.videoList &&
                    props.videoList.map((videoItem: any, index: number) => {
                        return (
                            <VideoItemStyle
                                key={index}
                                onClick={() => props.setActiveVideo(index)}>
                                <VideoItemImgStyle src={videoItem.image} isActive={props.activeVideo === index} />
                                <VideoItemTitleStyle>
                                    <Heading3>{videoItem.title}</Heading3>
                                </VideoItemTitleStyle>
                            </VideoItemStyle>
                        );
                    })}
            </VideoListStyle>
        </GridElement>
    </Grid>
);

export default VideoList;
