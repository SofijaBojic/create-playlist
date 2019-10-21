interface IVideoList {
    videoList: IVideoListItem[];
    setActiveVideo: (index: number) => void;
    activeVideo: number;
}