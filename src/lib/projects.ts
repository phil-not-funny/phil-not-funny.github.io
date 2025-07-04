import { Project, ProjectType } from "@/types/LibTypes";

export const projects: Project[] = [
  {
    slug: "diploma",
    title: "IoE Videocall - Diploma",
    yap: "This project is my diploma thesis i did with 3 others at the HTL Spengergasse in Vienna in collad with the company Institute of Entrepreneurship.",
    extendedYap:
      "We worked on an AWS Chime based video call system with an additional transcription feature. Furthermore, we implemented a waiting room for guests to wait until a host accepts their participation.",
    type: ProjectType.WEB,
    cover: {
      src: "/images/projects/ioe_logo.png",
      alt: "Institute of Entrepreneurship Logo",
      renderedHeight: 300,
      renderedWidth: 300,
    },
    versions: [
      {
        version: "1.0.0",
        releaseDate: new Date(2025, 6, 26).toLocaleDateString(),
        download: "/downloads/IoE_Videocall.pdf",
      }
    ]
  },
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
      {
        alt: "TripTales 2",
        caption: "Image2",
        src: "/images/projects/triptales2.png",
        renderedHeight: 720,
        renderedWidth: 1024,
      },
      {
        alt: "TripTales 3",
        caption: "Image3",
        src: "/images/projects/triptales3.png",
        renderedHeight: 720,
        renderedWidth: 1024,
      },
    ],
  },
  {
    slug: "lifesmpmod",
    title: "Life SMP Mod",
    cover: {
      src: "/images/projects/minecraft_logo.png",
      alt: "Minecraft Logo",
      renderedHeight: 300,
      renderedWidth: 300,
    },
    type: ProjectType.GAME,
    yap: "This fabric serverside mod brings the unique gameplay mechanics of Grian's popular 'Life SMP' to you and your friends.",
    repositoryUrl: "https://github.com/phil-not-funny/lifesmp-mod",
    repositoryReleases: true,
    versions: [
      {
        releaseDate: new Date(2024, 12, 5).toLocaleDateString(),
        version: "1.3.7-1.21.4",
        download:
          "https://github.com/phil-not-funny/lifesmp-mod/releases/download/v1.3.7-1.21.4/lifeanarchy-v1.3.7-1.21.4.jar",
        changes: ["Added Custom TNT Recipe from the Original Series"],
      },
      {
        releaseDate: new Date(2024, 12, 5).toLocaleDateString(),
        version: "1.3.6",
        download:
          "https://github.com/phil-not-funny/lifesmp-mod/releases/download/v1.3.6/lifeanarchy-v1.3.6.jar",
        changes: [
          "Added StealLife Command",
          "Added Custom Boogey Fail Penalty",
          "Added Advanced Killer Detection",
        ],
      },
      {
        releaseDate: new Date(2024, 12, 5).toLocaleDateString(),
        version: "1.3.5",
        download:
          "https://github.com/phil-not-funny/lifesmp-mod/releases/download/v1.3.5/lifeanarchy-v1.3.5.jar",
        changes: [
          "Added Advanced Spawn Protection",
          "Fixed GiveLife on Dead Players",
        ],
      },
      {
        releaseDate: new Date(2024, 12, 4).toLocaleDateString(),
        version: "1.3.4",
        download:
          "https://github.com/phil-not-funny/lifesmp-mod/releases/download/v1.3.4/lifeanarchy-v1.3.4.jar",
        changes: ["Update Version in Gradle Properties"],
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
    versions: [
      {
        version: "0.1.2",
        releaseDate: new Date(2024, 9, 2).toLocaleDateString(),
        download: "/downloads/badgame2_v0.1.2.zip",
        changes: [
          "Added Levels 10 onwards",
          "Fixed a lot of major Bugs",
          "Added Pause Menu",
        ],
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
    extendedYap:
      "One time I was bored and I wanted to make a note-taking app. So I did. It's written in Java and uses JavaFX for the GUI. The app saves notes to a local file using Java Serializable and can load them back in. It can also load up on startup if you wish to do so.",
  },
  {
    slug: "arcadeflierbot",
    title: "Arcade Flier Bot (Discord)",
    cover: {
      src: "/images/projects/arcade.flyer_logo.webp",
      alt: "Arcade Flier Logo",
      renderedHeight: 300,
      renderedWidth: 300,
    },
    type: ProjectType.APP,
    yap: "Arcade Flyer Bot is a Discord Bot that I made just for fun. It's a simple all-purpose bot that focuses on fun.",
    extendedYap:
      "Arcade Flier features many commands, including a magic 8-ball, and -most importantly- an arcade command.",
    repositoryUrl: "https://github.com/phil-not-funny/arcadeflier_dcbot",
  },
];
