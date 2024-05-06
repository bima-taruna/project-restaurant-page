import "./style.css";
import Logo from "./images/logo1.png";
import home from "./home";

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

  myLogo.src = Logo;
  myLogo.classList.add("logo");
  header.insertBefore(myLogo, nav);

  loadContent(home());

  window.onscroll = function () {
    if (window.scrollY >= header.offsetTop + header.offsetHeight) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  };

  function loadContent(params) {
    while (content.children.length > 0) {
      content.removeChild(content.firstChild);
    }
    content.append(params);
  }

  return header;
}

Header();
