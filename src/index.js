import "./style.css";
import Logo from "./images/logo1.png";
import home from "./home";
import menu from "./menu";
import about from "./about";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

function Header() {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const content = document.getElementById("content");
  const navButton = document.querySelectorAll(".nav-button");
  const myLogo = new Image();

  navButton[0].addEventListener("click", () => loadContent(home()));
  navButton[1].addEventListener("click", () => loadContent(menu()));
  navButton[2].addEventListener("click", () => loadContent(about()));

  window.onscroll = function () {
    if (window.scrollY >= header.offsetTop + header.offsetHeight) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  };

  myLogo.src = Logo;
  myLogo.classList.add("logo");
  header.insertBefore(myLogo, nav);

  loadContent(home());

  function loadContent(params) {
    while (content.children.length > 0) {
      content.removeChild(content.firstChild);
    }
    content.append(params);
  }

  return header;
}

Header();
