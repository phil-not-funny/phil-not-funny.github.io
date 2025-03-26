export type Project = {
  slug: string;
  title: string;
  yap: string;
  type: ProjectType;
  extendedYap?: string;
  cover: ProjectImage;
  gallery?: ProjectGalleryImage[];
  tags?: string[];
  designatedClassName?: string;  //classes need to be added to safelist here
  repositoryUrl?: string;
  versions?: ProjectVersion[];
};

export enum ProjectType {
  WEB = "Web-Application",
  APP = "Application",
  GAME = "Game | Mod",
}

type ProjectVersion = {
  version: string;
  releaseDate: string;
  changes?: string[];
  download?: string;
}

type ProjectImage = {
  src: string;
  alt: string;
  renderedWidth: number;
  renderedHeight: number;
};

type ProjectGalleryImage = ProjectImage & {
  caption: string;
};
