function loadContact() {
  const content = document.getElementById("content");

  const contactSection = document.createElement("section");
  contactSection.classList.add("contact-section");

  const heading = document.createElement("h2");
  heading.textContent = "Contact Us";

  const intro = document.createElement("p");
  intro.textContent =
    "Visit Bili-Bili Bistro for warm service, bold flavors, and a relaxing dining experience.";

  const details = document.createElement("div");
  details.classList.add("contact-details");

  details.innerHTML = `
    <p><strong>Address:</strong> 24 Golden Street, Johannesburg</p>
    <p><strong>Phone:</strong> +27 11 555 2026</p>
    <p><strong>Email:</strong> bookings@bilibistro.co.za</p>
    <p><strong>Hours:</strong> Monday - Sunday, 10:00 - 22:00</p>
  `;

  contactSection.appendChild(heading);
  contactSection.appendChild(intro);
  contactSection.appendChild(details);

  content.appendChild(contactSection);
}

export default loadContact;
