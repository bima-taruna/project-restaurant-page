export default function card(...params) {
  const [image, name] = params;

  function createCard() {
    const newCard = document.createElement("div");
    newCard.classList.add("card");

    let content = `
      <div class="menu-name">${name}</div>
      <button class="order-button">Order Now</button>
    `;
    newCard.innerHTML = content;
    newCard.appendChild(appendImage());
    return newCard;
  }

  function appendImage() {
    const menuImage = new Image();
    menuImage.src = image;
    menuImage.classList.add("menu-image");

    return menuImage;
  }

  return {
    createCard,
  };
}
