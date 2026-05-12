function loadContact() {
  const content = document.getElementById("content");

  const contactSection = document.createElement("section");
  contactSection.classList.add("contact-section");

  const eyebrow = document.createElement("p");
  eyebrow.classList.add("eyebrow");
  eyebrow.textContent = "Bookings and visits";

  const heading = document.createElement("h2");
  heading.textContent = "Reserve a table or drop in.";

  const intro = document.createElement("p");
  intro.textContent =
    "Visit Bili-Bili Bistro for warm service, bold flavours, and a relaxed dining room in the heart of Johannesburg.";

  const contactCopy = document.createElement("div");
  contactCopy.classList.add("contact-copy");

  const details = document.createElement("div");
  details.classList.add("contact-details");

  details.innerHTML = `
    <p><span>Address</span><strong>24 Golden Street, Johannesburg</strong></p>
    <p><span>Phone</span><strong>+27 11 555 2026</strong></p>
    <p><span>Email</span><strong>bookings@bilibistro.co.za</strong></p>
    <p><span>Hours</span><strong>Monday - Sunday, 10:00 - 22:00</strong></p>
  `;

  contactCopy.appendChild(eyebrow);
  contactCopy.appendChild(heading);
  contactCopy.appendChild(intro);

  contactSection.appendChild(contactCopy);
  contactSection.appendChild(details);

  content.appendChild(contactSection);
}

export default loadContact;
