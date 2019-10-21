import { ADD_VIDEO, SET_ACTIVE_VIDEO } from "../actionTypes.constants";

export const addVideo = (video: IVideoListItem): IActions => ({
  type: ADD_VIDEO,
  payload: video
});

export const setActiveVideo = (index: number): IActions => ({
  type: SET_ACTIVE_VIDEO,
  payload: index
});
