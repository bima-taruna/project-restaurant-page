export default function about() {
  const aboutSection = document.createElement("section");
  aboutSection.classList.add("about");
  aboutSection.innerHTML = `
    <div class="contact-us">
      <input type="text" name="contact-us" id="contact-us" placeholder="Want to contact with us?">
      <button>Contact Us</button>
    <div>
    <div class="about-us">
      <h4 class="about-headline">About Us</h4>
      <p class="about-content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci dolor recusandae exercitationem facilis autem blanditiis aspernatur quidem fuga. Cumque mollitia sed tenetur, placeat ipsum error enim fugiat sequi natus!
      </p>
      <h5 class="read-more">READ MORE</h5>
    </div>
    <div class="gi-touch">
      <h4>Get in Touch</h4>
      <p>Have some question or want to say something?</p>
      <div class="email-input">
        <input type="email" name="email" id="email" placeholder="Your Email">
        <button>Send</button>
      </div>
    </div>
  `;

  return aboutSection;
}
