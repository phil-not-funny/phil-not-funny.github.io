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
};

export enum ProjectType {
  WEB = "Web-Application",
  APP = "Application",
  GAME = "Game | Mod",
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
