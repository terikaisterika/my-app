import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Helpers from "./helpers";
import workExperience from "./workExperience";

const Header = () => {
  const [showMenu, swithShowMenu] = useState({
    show: false,
    btnText: "㆔",
    styleMainMenu: "",
  });
  const changeShow = (e) => {
    e.preventDefault();
    swithShowMenu((showMenu) => {
      return {
        ...showMenu,
        show: !showMenu.show,
      };
    });
  };

  useEffect(() => {
    if (showMenu.show) {
      swithShowMenu({ ...showMenu, btnText: "X", styleMainMenu: "block" });
    } else {
      swithShowMenu({ ...showMenu, btnText: "㆔", styleMainMenu: "" });
    }
  }, [showMenu.show]);
  return (
    <div className="head">
      <h1 className="center">Резюме Смирновой Е.А.</h1>
      <nav>
        <ul className="nav">
          <li className="main_menu" style={{ display: showMenu.styleMainMenu }}>
            <a href="#main_information">Общая информация</a>
          </li>
          <li className="main_menu" style={{ display: showMenu.styleMainMenu }}>
            <a href="#desired_position">Желаемая должность</a>
          </li>
          <li className="main_menu" style={{ display: showMenu.styleMainMenu }}>
            <a href="#work_experience">Опыт работы</a>
          </li>
          <li className="main_menu" style={{ display: showMenu.styleMainMenu }}>
            <a href="#about_me">Обо мне</a>
          </li>
          <li className="mobile_menu" onClick={changeShow}>
            <a href="">{showMenu.btnText}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const MainInformation = () => {
  return (
    <div id="main_information">
      <h3>Общая информация</h3>
      <span>Телефон: </span>
      <span type="tel">+7 (919) 078-57-96</span>
      <br />
      <span>Email: </span>
      <span type="email">trililium@yandex.com</span>
    </div>
  );
};

const DesiredPosition = () => {
  return (
    <div id="desired_position">
      <h3>Желаемая должность: тестировщик</h3>

      <span className="bold">Специализация: </span>
      <span>Тестировщик</span>
      <span className="bold">Занятость: </span>
      <span>частичная занятость, полная занятость</span>
    </div>
  );
};

const WorkExperience = () => {
  const works = workExperience.works;
  const [display, switchDisplay] = useState("block");

  const getWorkBlock = (work) => {
    const responsibilities = work.responsibilities
      .split("\n")
      .map((el) => <span>{el}</span>);
    return (
      <div>
        <div>
          <span className="work">Компания: </span>
          <span className="bold">{work.company}</span>
          <span className="work">Должность: </span>
          <span className="bold">{work.position}</span>
        </div>
        <div>{responsibilities}</div>
      </div>
    );
  };

  if (display === "block") {
    return (
      <div id="work_experience">
        <h3>Опыт работы</h3>
        <div style={{ display: display }}>
          <div className="work_block">{getWorkBlock(works[0])}</div>
          <div className="work_block">{getWorkBlock(works[1])}</div>
          <div className="work_block">{getWorkBlock(works[2])}</div>
          <div className="work_block">{getWorkBlock(works[3])}</div>
          <div className="work_block">{getWorkBlock(works[4])}</div>
          <div className="work_block">{getWorkBlock(works[5])}</div>
          <div className="work_block">{getWorkBlock(works[6])}</div>
        </div>
        <button onClick={() => switchDisplay("none")}>Скрыть блок</button>
      </div>
    );
  } else {
    return (
      <div id="work_experience">
        <h3>Опыт работы</h3>
        <button onClick={() => switchDisplay("block")}>Показать блок</button>
      </div>
    );
  }
};

const AboutMe = () => {
  return (
    <div id="about_me">
      <h3>Обо мне</h3>
      <p>
        Есть опыт работы с автотестами на javascript (Cypress, ghost inspector),
        selenium + xunit + page object на C# (сюда же относится работа с git),
        devtools, fiddler, postman, browserstack, html, CSS, SQL.
      </p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <MainInformation />
      <DesiredPosition />
      <WorkExperience />
      <AboutMe />
    </div>
  );
};

// ========================================

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Game />);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
