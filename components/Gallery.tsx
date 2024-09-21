import { FocusCards } from "@/components/ui/focus-cards";

export function Gallery() {
  const cards = [
    {
      title: "",
      src: "/gallery/music.jpeg",
    },
    {
        title: "",
         src: "/gallery/2.png",
      },
      {
        title: "",
         src: "/gallery/code.jpeg",
      },
      {
        title: "",
         src: "/gallery/wall.png",
      },
      {
        title: "",
         src: "/gallery/principal.JPG",
      },
      {
        title: "",
         src: "/gallery/chess.jpeg",
      },
      {
        title: "",
         src: "/gallery/jyoti.jpeg",
      },
      {
        title: "",
         src: "/gallery/Treasure.jpeg",
      },
      {
        title: "",
         src: "/gallery/anchor.jpeg",
      },
      {
        title: "",
        src: "/gallery/social.jpeg",
      },
    //   {
    //     title: "",
    //      src: "/gallery/social.jpeg",
    //   },
    //   {
    //     title: "",
    //      src: "/gallery/gaming.png",
    //   },
    //   {
    //     title: "",
    //      src: "/gallery/wall.png",
    //   },
    //   {
    //     title: "",
    //      src: "/gallery/quiz.jpeg",
    //   },
    //   {
    //     title: "",
    //      src: "/gallery/quiz.jpeg",
    //   },
    
  ];

  return <FocusCards cards={cards} />;
}
