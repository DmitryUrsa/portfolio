import React from "react";
import Title from "../modules/Title/Title";
import Subtitle from "../modules/Subtitle/Subtitle";
import Projects from "../modules/Projects/Projects";

const Home = () => {
  return (
    <>
      <article className="home-headline">
        <Title title="Dmitry Ursa: The Web Dev" />
        <Subtitle>
          Hi, i am experienced web developer that loves interesting projects and
          challenges 🐻
        </Subtitle>
      </article>
      <Projects />
    </>
  );
};

export default Home;
