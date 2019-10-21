import { ADD_VIDEO, SET_ACTIVE_VIDEO } from "../actionTypes.constants";

const playlistData: IVideoListItem[] = [
  {
    file: "//content.jwplatform.com/videos/iLwfYW2S-cIp6U8lV.mp4",
    image: "//content.jwplatform.com/thumbs/iLwfYW2S-720.jpg",
    title: "Road Trip"
  },
  {
    file: "//content.jwplatform.com/videos/8TbJTFy5-cIp6U8lV.mp4",
    image: "//content.jwplatform.com/thumbs/8TbJTFy5-720.jpg",
    title: "Hiking on the Edge"
  }
];

const initialState: IState = {
  videos: playlistData,
  activeVideo: 0
};

export const playlist = (
  state = initialState,
  action: { type: string; payload: any }
): IState => {
  const { type, payload } = action;
  switch (type) {
    case ADD_VIDEO:
      return {
        ...state,
        videos: [...state.videos, payload]
      };
    case SET_ACTIVE_VIDEO:
      const index: number = payload;
      window.jwplayer && window.jwplayer().playlistItem(index);
      return {
        ...state,
        activeVideo: index
      };

    default:
      break;
  }

  return state;
};
