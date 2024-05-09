export default function card(...params) {
  const [image, name] = params;

  function createCard() {
    const newCard = document.createElement("div");
    const menuName = document.createElement("div");
    const orderButton = document.createElement("button");
    const flexOrder = document.createElement("div");
    flexOrder.classList.add("flex-order");
    flexOrder.appendChild(menuName);
    flexOrder.appendChild(orderButton);
    orderButton.classList.add("order-button");
    menuName.classList.add("menu-name");
    newCard.classList.add("card");
    menuName.innerHTML = name;
    orderButton.innerHTML = "Order Now";
    newCard.appendChild(appendImage());
    newCard.appendChild(flexOrder);
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
