import { Project, ProjectType } from "@/types/LibTypes";

export const projects: Project[] = [
    {
        slug: "triptales",
        title: "TripTales",
        yap: "TripTales is a Social Media Platform for Travelers. It allows users to share their travel experiences with others, and to discover new places to visit.",
        cover: {
            src: "/images/projects/triptales_logo.png",
            alt: "TripTales Logo",
            renderedHeight: 300,
            renderedWidth: 300
        },
        designatedClassName: "green-600" ,
        type: ProjectType.WEB,
        repositoryUrl: "https://github.com/DieNullpointer/triptales"
    },
    {
        slug: "badgame2",
        title: "Bad Game 2 (Unity)",
        yap: "Bad Game 2 is a Unity Game that I made because I was bored. It's a 3D Platformer with movement and abilities written from scratch.",
        cover: {
            src: "/images/projects/badgame_logo.png",
            alt: "Bad Game 2 Logo",
            renderedHeight: 300,
            renderedWidth: 300
        },
        designatedClassName: "red-600",
        type: ProjectType.GAME
    }
];