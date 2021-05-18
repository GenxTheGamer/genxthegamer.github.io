import React from "react";
import "../Styles/Home.css";
import Tabs from "../Components/Tabs";
import {
  ltwitter,
  lgithub,
  llinkedin,
  lmedium,
  ltwitch,
  lyoutube,
} from "../Resources/Links";

const Home = () => {
  const linkArray = [
    {
      img: ltwitter,
      link: "https://twitter.com/genxthegamer",
      tag: "Twitter",
    },
    {
      img: llinkedin,
      link: "https://www.linkedin.com/in/vaibhav-vyas-b06103193/",
      tag: "Linkedin",
    },
    {
      img: ltwitch,
      link: "https://www.twitch.tv/genxthegamer",
      tag: "Twitch",
    },
    {
      img: lgithub,
      link: "https://github.com/GenxTheGamer",
      tag: "Github",
    },
    {
      img: lyoutube,
      link: "https://www.youtube.com/c/SMGenz/",
      tag: "Youtube",
    },
    {
      img: lmedium,
      link: "https://vaibhavvyas32.medium.com",
      tag: "Medium",
    },
  ];
  return (
    <>
      <div className="main__home">
        <span className="home__mypic">
          <span className="mypic">
            <img
              src="https://avatars.githubusercontent.com/u/52570863?v=4"
              id="github"
            />
          </span>
          <h1>Vaibhav Vyas</h1>
        </span>
        <div className="home__social">
          {linkArray.map(({ img, link, tag }) => (
            <Tabs image={img} link={link} tag={tag} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
