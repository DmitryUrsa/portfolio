import React from "react";
import Title from "../modules/Title/Title";
import Subtitle from "../modules/Subtitle/Subtitle";
import Avatar from "../images/avatar.jpg";

const About = () => {
  return (
    <article className="article-wrapper">
      <p>
        <img src={Avatar} alt="My avatar" className="avatar" />
      </p>
      <p className="links-list">
        <a
          href="https://github.com/DmitryUrsa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.upwork.com/o/profiles/users/~01078cf37a83cc8d76/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Upwork
        </a>
      </p>
      <Title title="About me" />
      <Subtitle color="var(--cyan)">My story</Subtitle>
      <p>
        Hi, my name is Dmitry Lubyagin/Ursa and I am a Russian web developer
        with experience in front-end. Also, i love design
      </p>
      <p>
        I’ve had my first splash into web development when I was 14 - I’ve
        beenan admin of a Russian website with flash games for girls (
        <a
          href="http://game4girl.ru/"
          target="_blank"
          rel="noopener noreferrer"
        >
          game4girl.ru
        </a>{" "}
        it’s still running, though, some sections seem bugged). I was doing some
        CSS, HTML, PHP work. Even though i didn’t know what i was doing, i was
        able to understand it the more i’ve done it - this is where my love of
        coding began. Ever since I have been curious about how websites work,
        which pushed me to my development career 🤔
      </p>
      <p>
        Now I am developing websites and searching for interesting projects and
        work positions. <b className="color-cyan">Hire me!</b>
      </p>
      <p>
        I prefer the front-end development, but also can do back-end since my
        freelance work always has to do something with setting up the server and
        making server scripts work.
      </p>

      <Subtitle color="var(--cyan)">My experience</Subtitle>
      <h3>Here is some of the knowledge i use the most:</h3>
      <ul>
        <li>
          <b>HTML/CSS</b> - 5 years (modern markup, BEM, SASS)
        </li>
        <li>
          <b>Javascript</b> - 3 years (jQuery, ES6, React)
        </li>
        <li>
          <b>Wordpress</b> - 3 years (theme development, plugins development)
        </li>
        <li>
          <b>PHP</b> - 2 years
        </li>
        <li>
          <b className="color-cyan">Learning New Things - ∞</b>
        </li>
      </ul>
    </article>
  );
};

export default About;
