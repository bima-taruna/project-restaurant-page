export default function menu() {
  const menuSection = document.createElement("section");
  menuSection.classList.add("menu");
  menuSection.innerHTML = `
    <h1 class="menu-headline">Menu</h1>
    <div class="menu-list"></div>
  `;

  return menuSection;
}
