import React from "react";
import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import js from "../assets/js.jpg";
import react from "../assets/react.jpg";
import git from "../assets/git.jpg";
import github from "../assets/github.jpg";
import vscode from "../assets/vscode.jpg";

function Technologies() {
  return (
    <div className="technologies">
      <h2 className="stack">My Tech Stack</h2>
      <p className="stack-text">Technologies I've been working with recently</p>

      <div className="tech">
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={js} alt="" />
        <img src={react} alt="" />
        <img src={git} alt="" />
        <img src={github} alt="" />
        <img src={vscode} alt="" />
      </div>
    </div>
  );
}

export default Technologies;
