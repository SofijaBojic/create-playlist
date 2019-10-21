interface IMain {
  addVideo: (IVideoListItem) => void;
  playlist: IVideoListItem[];
  setActiveVideo: (index: number) => void;
  activeVideo: number;
}
