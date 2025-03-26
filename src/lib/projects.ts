import { Project, ProjectType } from "@/types/LibTypes";

export const projects: Project[] = [
  {
    slug: "triptales",
    title: "TripTales",
    yap: "TripTales is a Social Media Platform for Travelers. It allows users to share their travel experiences with others, and to discover new places to visit.",
    extendedYap:
      "TripTales is a full-stack project I did with a bunch of classmates of mine. We had a blast working on this project, and I learned a lot about working in a team and using modern web technologies. The project is written in TypeScript and uses Next.js for the frontend and C# for the backend.",
    cover: {
      src: "/images/projects/triptales_logo.png",
      alt: "TripTales Logo",
      renderedHeight: 300,
      renderedWidth: 300,
    },
    type: ProjectType.WEB,
    repositoryUrl: "https://github.com/DieNullpointer/triptales",
    gallery: [
      {
        alt: "TripTales 1",
        caption: "Image1",
        src: "/images/projects/triptales1.png",
        renderedHeight: 720,
        renderedWidth: 1024,
      },
    ],
  },
  {
    slug: "badgame2",
    title: "Bad Game 2 (Unity)",
    yap: "Bad Game 2 is a Unity Game that I made because I was bored. It's a 3D Platformer with movement and abilities written from scratch.",
    extendedYap:
      "Honestly, I don't think this game is that bad at all. The game is written in C# and uses Unity's Physics Engine. I wrote the movement myslef, just to get a feel for the Unity C# API. After some time I startet adding more advanced features like object-grabbing and dashing.",
    cover: {
      src: "/images/projects/badgame_logo.png",
      alt: "Bad Game 2 Logo",
      renderedHeight: 300,
      renderedWidth: 300,
    },
    type: ProjectType.GAME,
    gallery: [
      {
        alt: "Bad Game 1",
        caption: "Image1",
        src: "/images/projects/badgame1.png",
        renderedHeight: 720,
        renderedWidth: 1024,
      },
      {
        alt: "Bad Game 2",
        caption: "Image2",
        src: "/images/projects/badgame2.png",
        renderedHeight: 720,
        renderedWidth: 1024,
      },
      {
        alt: "Bad Game 3",
        caption: "Image3",
        src: "/images/projects/badgame3.png",
        renderedHeight: 720,
        renderedWidth: 1024,
      },
    ],
  },
  {
    slug: "proxnotes",
    title: "ProxNotes",
    cover: {
      src: "/images/projects/proxnotes_logo.png",
      alt: "ProxNotes Logo",
      renderedHeight: 300,
      renderedWidth: 300,
    },
    type: ProjectType.APP,
    yap: "ProxNotes is a simple note-taking app that I made for my personal use. It's a client-side only app that i made using Java.",
    extendedYap: "One time I was bored and I wanted to make a note-taking app. So I did. It's written in Java and uses JavaFX for the GUI. The app saves notes to a local file using Java Serializable and can load them back in. It can also load up on startup if you wish to do so.",
  }
];
