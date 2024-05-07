export default function home() {
  const homeSection = document.createElement("section");
  homeSection.classList.add("home");

  homeSection.innerHTML = `
    <div class="left-side">
      <div class="headline">Discover The Art of Perfect Coffee</div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, unde recusandae, blanditiis magnam maiores accusantium ducimus voluptatem in sit voluptatum libero. Et repellendus id omnis rem veritatis laboriosam ratione obcaecati!</p>
      <div class="home-buttons">
          <button class="order-button">Order Now</button>
          <button class="explore-button">Explore More</button>
      </div>
    </div>
    <div class="right-side"></div>
  `;

  return homeSection;
}
