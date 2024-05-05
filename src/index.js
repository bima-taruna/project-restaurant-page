import "./style.css";
import Logo from "./images/logo1.png";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

function Header() {
  const header = document.querySelector("header");

  const myLogo = new Image();
  myLogo.src = Logo;

  header.appendChild(myLogo);

  return header;
}

document.body.appendChild(Header());
