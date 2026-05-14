function loadContact() {
  const content = document.getElementById("content");
  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=24%20Golden%20Street%2C%20Johannesburg";
  const whatsappUrl =
    "https://wa.me/27115552026?text=Hi%20Bili-Bili%20Bistro%2C%20I%27d%20like%20to%20request%20a%20table%20booking.";

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

  const contactActions = document.createElement("div");
  contactActions.classList.add("contact-actions");
  contactActions.innerHTML = `
    <a href="${mapUrl}" target="_blank" rel="noopener noreferrer">Open Map</a>
    <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">Book on WhatsApp</a>
  `;

  const bookingPanel = document.createElement("div");
  bookingPanel.classList.add("booking-panel");
  bookingPanel.innerHTML = `
    <h3>Reservation notes</h3>
    <p>For groups of six or more, call ahead so the team can prepare your table.</p>
    <ul>
      <li>Same-day bookings accepted by phone</li>
      <li>Outdoor seating available on request</li>
      <li>Kitchen closes 30 minutes before closing</li>
    </ul>
  `;

  const reservationForm = document.createElement("form");
  reservationForm.classList.add("reservation-form");
  reservationForm.id = "reservation-form";
  reservationForm.innerHTML = `
    <h3>Plan your visit</h3>
    <label>
      Name
      <input type="text" name="name" placeholder="Your name" autocomplete="name" required />
    </label>
    <label>
      Phone
      <input type="tel" name="phone" placeholder="+27 82 000 0000" autocomplete="tel" required />
    </label>
    <label>
      Guests
      <input type="number" name="guests" min="1" max="20" placeholder="2" required />
    </label>
    <label>
      Date
      <input type="date" name="date" required />
    </label>
    <label>
      Time
      <input type="time" name="time" min="10:00" max="21:30" step="900" required />
    </label>
    <label class="form-wide">
      Message
      <textarea name="message" placeholder="Occasion, seating preference, or dietary notes"></textarea>
    </label>
    <button type="submit">Request Booking</button>
    <p class="form-status" id="reservation-status" role="status" aria-live="polite"></p>
  `;

  contactCopy.appendChild(eyebrow);
  contactCopy.appendChild(heading);
  contactCopy.appendChild(intro);

  contactSection.appendChild(contactCopy);
  contactSection.appendChild(details);
  contactSection.appendChild(contactActions);
  contactSection.appendChild(bookingPanel);
  contactSection.appendChild(reservationForm);

  content.appendChild(contactSection);
}

export default loadContact;
