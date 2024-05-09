import { data } from "./data/menu-data";
import card from "./component/card";

export default function menu() {
  const menuSection = document.createElement("section");
  const headline = document.createElement("h1");
  const menuList = document.createElement("div");
  headline.classList.add("menu-headline");
  menuList.classList.add("menu-list");
  headline.innerHTML = "Menu";
  menuSection.appendChild(headline);
  menuSection.appendChild(menuList);
  menuSection.classList.add("menu");

  // const menuList = document.querySelector(".menu-list");
  data.forEach((item) => {
    if (menuList) {
      const cards = card(item.image, item.name);
      const newMenuCard = cards.createCard();
      menuList.appendChild(newMenuCard);
    }
  });

  return menuSection;
}
