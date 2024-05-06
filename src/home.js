export default function home() {
  const homeSection = document.createElement("section");
  homeSection.classList.add("home");
  homeSection.innerHTML = "HOME";

  return homeSection;
}
