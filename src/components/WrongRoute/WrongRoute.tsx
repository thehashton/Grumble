import React from "react";
import "./WrongRoute.scss";

let giphyImage: any;
let giphyText: any;

const gifData = [
  {
    text: "Uh oh, something went wrong...",
    giphy: "https://media.giphy.com/media/vSSdLSLbGIXio/giphy.gif"
  },
  {
    text: "Ay Caramba! It's ded...",
    giphy: "https://media.giphy.com/media/oYtVHSxngR3lC/giphy.gif"
  },
  {
    text: "Turn back, it's all fucked...",
    giphy: "https://media.giphy.com/media/vsvBFlxjvLoME/giphy.gif"
  }
];

const randomGiphy = () => {
  const rando = [gifData[Math.floor(Math.random() * gifData.length)]];

  rando.forEach(giphy => {
    giphyText = giphy.text;
    giphyImage = giphy.giphy;
  });
};

const WrongRoute: React.FC = () => {
  randomGiphy();
  return (
    <div className={"WrongRoute"}>
      <h2>{giphyText}</h2>
      <img src={giphyImage} alt="" />
    </div>
  );
};

export default WrongRoute;
