/* ============================================================
   Same Same Auto Repair — main.js
   ============================================================
   All config lives here. Edit these values to update the site.
   ============================================================ */

// ---- CONFIG ------------------------------------------------
const PHONE = "(912) 332-8214";
const PHONE_LINK = "tel:+19123328214";
const EMAIL = "josh@samesameautorepair.com";
const EMAIL_LINK = "mailto:josh@samesameautorepair.com?subject=Repair%20request";

// Borrowed listing for the demo — this is another Denton mobile mechanic's profile,
// used only so the 5-star path lands somewhere real. Swap to Josh's GBP once verified.
const GBP_REVIEW_URL = "https://www.google.com/maps/place/Denton+Mobile+Mechanic/@33.2089425,-97.4046755,11z/data=!4m12!1m2!2m1!1sdenton+mobile+mechanic!3m8!1s0x204d642e9763a77d:0xa9e1c5e7419deeed!8m2!3d33.2089425!4d-97.1162844!9m1!1b1!15sChZkZW50b24gbW9iaWxlIG1lY2hhbmljWhgiFmRlbnRvbiBtb2JpbGUgbWVjaGFuaWOSAQpjYXJfcmVwYWlymgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU53TUhKSGIzZFJSUkFC4AEA-gEECCEQRQ!16s%2Fg%2F11kr76kbty";

const SERVICES = [
  { name: "Brakes",              desc: "Pads, rotors, calipers, lines. Squealing, grinding, or a soft pedal.",                   duration: "2h"   },
  { name: "Alternators",         desc: "Battery light on, dimming headlights, dying while driving.",                              duration: "1.5h" },
  { name: "Starters",            desc: "Clicking, cranking slow, or nothing at all when you turn the key.",                       duration: "1.5h" },
  { name: "Transmissions",       desc: "Slipping, hard shifts, fluid leaks. Diagnosis and repair.",                               duration: "3h"   },
  { name: "Engine work",         desc: "Timing, gaskets, sensors, belts, cooling. Most jobs a shop would take.",                  duration: "3h"   },
  { name: "Regular maintenance", desc: "Oil, filters, fluids, plugs, belts \u2014 on your schedule, at your place.",              duration: "1h"   },
];

// SAMPLE COPY — replace with real customer quotes before this site goes public.
const TESTIMONIALS = [
  { quote: "Quoted $1,400 at the dealership for my brakes. Josh did it in my driveway for $600 and showed me the old pads.",           attr: "Marcus T., Denton"    },
  { quote: "Truck wouldn\u2019t start before a shift. He came out same evening, replaced the starter, and I made it to work.",         attr: "Rachel B., Corinth"   },
  { quote: "Told me my transmission issue wasn\u2019t worth fixing on a car that old. Could\u2019ve taken my money and didn\u2019t.",   attr: "Danny K., Sanger"     },
  { quote: "Third mechanic I called and the only one who answered. Straight answer on price, showed up when he said.",                 attr: "Alicia M., Denton"    },
  { quote: "Does my oil changes and inspections in my apartment lot now. I\u2019m never sitting in a waiting room again.",             attr: "Tyrone W., Lewisville"},
];

// SAMPLE DATA — Josh has no Google reviews yet. Replace with real reviews at launch.
const MOCK_REVIEWS = [
  { name: "James R.",  initials: "JR", color: "#2563EB", date: "2 weeks ago",  text: "Called at 7am with a dead alternator, he was at my house by 10. Fair price, showed me the old part, cleaned up after himself. Saved me a tow." },
  { name: "Priya N.",  initials: "PN", color: "#7C3AED", date: "1 month ago",  text: "Honest is the word. Told me the noise was a heat shield, not the exhaust, and charged me almost nothing to fix it. Another shop wanted $900." },
  { name: "Kevin D.",  initials: "KD", color: "#059669", date: "1 month ago",  text: "Brakes on my F-150 done in my own driveway for way less than the shop quoted. Texted me updates the whole time. Already booked him for my wife\u2019s car." },
];

const CAROUSEL_IMAGES = [
  { src: "work-engine-fluid.jpg",     alt: "Josh adding fluid under the hood of a blue SUV on a sunny day",               caption: "Fluid top-off and inspection" },
  { src: "work-under-hood.jpg",       alt: "Close-up of Josh inspecting an engine bay",                                    caption: "Engine bay inspection" },
  { src: "work-jack-setup.jpg",       alt: "Floor jack and toolboxes set up beside a silver car in a parking lot",          caption: "Mobile setup \u2014 everything comes to you" },
  { src: "work-under-truck.jpg",      alt: "Josh working under a truck, legs visible \u2014 classic mobile mechanic",       caption: "Under-vehicle work on site" },
  { src: "work-driveway-brakes.jpg",  alt: "Josh working under a car in a driveway with wheel off and safety cone",        caption: "Driveway brake job" },
  { src: "work-wheel-repair.jpg",     alt: "Josh crouched working on a wheel area between two parked cars",                 caption: "Wheel and suspension work" },
  { src: "detail-rotor-caliper.jpg",  alt: "New brake rotor and caliper close-up, freshly installed",                       caption: "Fresh rotor and caliper" },
  { src: "work-nissan-front.jpg",     alt: "White Nissan Altima front end, axle work in a parking lot",                     caption: "Front axle repair" },
  { src: "work-nissan-hood.jpg",      alt: "Nissan with hood open and bumper removed for front-end work",                   caption: "Front-end teardown and repair" },
  { src: "detail-camshafts.jpg",      alt: "Camshafts and lifters laid out on paper towel for inspection",                  caption: "Camshafts and lifters \u2014 parts inspection" },
  { src: "detail-valve-train.jpg",    alt: "Cylinder head with valve springs exposed during rebuild",                       caption: "Valve train work" },
  { src: "detail-engine-top.jpg",     alt: "Engine top view showing ignition coils and oil cap",                            caption: "Engine top inspection" },
  { src: "detail-timing-chain.jpg",   alt: "Timing chain and camshaft sprockets exposed during service",                    caption: "Timing chain service" },
  { src: "detail-honda-header.jpg",   alt: "Honda exhaust header and manifold close-up",                                    caption: "Exhaust manifold work" },
  { src: "work-night-garage.jpg",     alt: "Blue car under work lights in a garage during a late night job",                caption: "Late night job \u2014 we work around your schedule" },
];

const SCHEDULER_SERVICES = [
  ...SERVICES.map(s => ({ name: s.name, duration: s.duration })),
  { name: "Something else / not sure", duration: "1h" },
];

const TIME_SLOTS = ["8:00a", "9:30a", "11:00a", "12:30p", "2:00p", "3:30p", "5:00p"];

// ---- END CONFIG --------------------------------------------


/* ============================================================
   Premium Star Popover
   ============================================================ */
function initPremiumPopovers() {
  document.querySelectorAll(".premium-star").forEach(btn => {
    const popoverId = btn.getAttribute("aria-controls");
    const popover = document.getElementById(popoverId);
    if (!popover) return;

    btn.addEventListener("click", () => popover.classList.add("is-open"));

    const closeBtn = popover.querySelector(".premium-popover__close");
    if (closeBtn) closeBtn.addEventListener("click", () => popover.classList.remove("is-open"));

    popover.addEventListener("click", e => {
      if (e.target === popover) popover.classList.remove("is-open");
    });

    popover.addEventListener("keydown", e => {
      if (e.key === "Escape") popover.classList.remove("is-open");
    });
  });
}


/* ============================================================
   Photo Carousel
   ============================================================ */
function initCarousel() {
  const track = document.querySelector(".carousel__track");
  const dotsContainer = document.querySelector(".carousel__dots");
  const prevBtn = document.querySelector(".carousel__arrow--prev");
  const nextBtn = document.querySelector(".carousel__arrow--next");
  if (!track) return;

  const slides = track.querySelectorAll(".carousel__slide");
  const dots = [];

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "carousel__dot" + (i === 0 ? " is-active" : "");
    dot.setAttribute("aria-label", "Go to slide " + (i + 1));
    dot.addEventListener("click", () => {
      slides[i].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    });
    dotsContainer.appendChild(dot);
    dots.push(dot);
  });

  // IntersectionObserver for dot sync
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = Array.from(slides).indexOf(entry.target);
        dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
      }
    });
  }, { root: track, threshold: 0.6 });

  slides.forEach(s => observer.observe(s));

  // Arrow buttons
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -track.offsetWidth * 0.5, behavior: "smooth" });
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: track.offsetWidth * 0.5, behavior: "smooth" });
    });
  }

  // Keyboard nav when track has focus
  track.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      track.scrollBy({ left: -track.offsetWidth * 0.5, behavior: "smooth" });
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      track.scrollBy({ left: track.offsetWidth * 0.5, behavior: "smooth" });
    }
  });
}


/* ============================================================
   Contact Form
   ============================================================ */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const success = document.getElementById("contact-success");
  if (!form || !success) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    let valid = true;

    // Name
    const name = form.querySelector("[name='name']");
    const nameGroup = name.closest(".form-group");
    if (!name.value.trim()) {
      nameGroup.classList.add("has-error");
      valid = false;
    } else {
      nameGroup.classList.remove("has-error");
    }

    // Phone
    const phone = form.querySelector("[name='phone']");
    const phoneGroup = phone.closest(".form-group");
    const phoneClean = phone.value.replace(/\D/g, "");
    if (phoneClean.length < 7) {
      phoneGroup.classList.add("has-error");
      valid = false;
    } else {
      phoneGroup.classList.remove("has-error");
    }

    // Vehicle
    const vehicle = form.querySelector("[name='vehicle']");
    const vehicleGroup = vehicle.closest(".form-group");
    if (!vehicle.value.trim()) {
      vehicleGroup.classList.add("has-error");
      valid = false;
    } else {
      vehicleGroup.classList.remove("has-error");
    }

    // Issue
    const issue = form.querySelector("[name='issue']");
    const issueGroup = issue.closest(".form-group");
    if (!issue.value.trim()) {
      issueGroup.classList.add("has-error");
      valid = false;
    } else {
      issueGroup.classList.remove("has-error");
    }

    if (!valid) return;

    // "Submit" — show success
    form.style.display = "none";
    success.classList.add("is-visible");
  });

  // Reset
  const resetBtn = success.querySelector(".form-success__reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      form.reset();
      form.querySelectorAll(".form-group").forEach(g => g.classList.remove("has-error"));
      form.style.display = "";
      success.classList.remove("is-visible");
    });
  }
}


/* ============================================================
   Appointment Scheduler
   ============================================================ */
function initScheduler() {
  const container = document.getElementById("scheduler");
  if (!container) return;

  let step = 1;
  let selectedService = null;
  let selectedDay = null;
  let selectedSlot = null;

  function generateDays() {
    const days = [];
    const now = new Date();
    for (let i = 1; i <= 14; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() + i);
      days.push(d);
    }
    return days;
  }

  function isBooked(dayOfMonth, slotIndex) {
    return (dayOfMonth * 7 + slotIndex) % 3 === 0;
  }

  function formatDay(d) {
    const abbrs = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    return { abbr: abbrs[d.getDay()], num: d.getDate(), isSunday: d.getDay() === 0, date: d };
  }

  function genConfCode() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "SSA-";
    for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
    return code;
  }

  function formatDate(d) {
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate();
  }

  function render() {
    const body = container.querySelector(".scheduler__body");
    const header = container.querySelector(".scheduler__header");

    // Back button
    let backHtml = "";
    if (step > 1) {
      backHtml = '<button class="scheduler__back" aria-label="Go back"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>';
    }

    const titles = {
      1: "Pick a service",
      2: "Pick a day and time",
      3: "Confirm your details",
      4: ""
    };

    header.innerHTML = backHtml + '<span class="scheduler__step-title">' + (titles[step] || "") + '</span>';

    // Back handler
    const backBtn = header.querySelector(".scheduler__back");
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        if (step === 2) { step = 1; selectedDay = null; selectedSlot = null; }
        else if (step === 3) { step = 2; }
        render();
      });
    }

    if (step === 1) renderStep1(body);
    else if (step === 2) renderStep2(body);
    else if (step === 3) renderStep3(body);
    else if (step === 4) renderStep4(body);
  }

  function renderStep1(body) {
    let html = '<div class="scheduler__services">';
    SCHEDULER_SERVICES.forEach((s, i) => {
      html += '<button class="scheduler__service-btn" data-idx="' + i + '">' +
        s.name + ' <span>' + s.duration + '</span></button>';
    });
    html += '</div>';
    body.innerHTML = html;

    body.querySelectorAll(".scheduler__service-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        selectedService = SCHEDULER_SERVICES[parseInt(btn.dataset.idx)];
        step = 2;
        render();
      });
    });
  }

  function renderStep2(body) {
    const days = generateDays();
    let html = '<div class="scheduler__day-strip">';
    days.forEach((d, i) => {
      const f = formatDay(d);
      const disabled = f.isSunday ? " disabled" : "";
      const selected = selectedDay && d.toDateString() === selectedDay.toDateString() ? " is-selected" : "";
      html += '<button class="scheduler__day' + selected + '" data-idx="' + i + '"' + disabled + '>' +
        '<span class="scheduler__day-abbr">' + f.abbr + '</span>' +
        '<span class="scheduler__day-num">' + f.num + '</span></button>';
    });
    html += '</div>';

    if (selectedDay) {
      html += '<div class="scheduler__slots">';
      TIME_SLOTS.forEach((slot, si) => {
        const booked = isBooked(selectedDay.getDate(), si);
        const selected = selectedSlot === slot ? " is-selected" : "";
        html += '<button class="scheduler__slot' + selected + '" data-slot="' + slot + '"' +
          (booked ? " disabled" : "") + '>' + slot + (booked ? " Booked" : "") + '</button>';
      });
      html += '</div>';
      html += '<p class="scheduler__tz">All times Central</p>';
    }

    if (selectedDay && selectedSlot) {
      html += '<div style="text-align:center;margin-top:16px"><button class="btn btn--signal" id="sched-next">Continue</button></div>';
    }

    body.innerHTML = html;

    // Day click handlers
    body.querySelectorAll(".scheduler__day:not(:disabled)").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.idx);
        selectedDay = days[idx];
        selectedSlot = null;
        render();
      });
    });

    // Slot click handlers
    body.querySelectorAll(".scheduler__slot:not(:disabled)").forEach(btn => {
      btn.addEventListener("click", () => {
        selectedSlot = btn.dataset.slot;
        render();
      });
    });

    const nextBtn = body.querySelector("#sched-next");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => { step = 3; render(); });
    }
  }

  function renderStep3(body) {
    const summaryText = selectedService.name + " \u00b7 " + formatDate(selectedDay) + " at " + selectedSlot + " \u00b7 " + selectedService.duration;
    let html = '<div class="scheduler__summary">' + summaryText + '</div>';
    html += '<form class="scheduler__confirm-form" id="sched-confirm-form">';
    html += '<div class="form-group"><label for="sched-name">Your name</label><input type="text" id="sched-name" name="name" required></div>';
    html += '<div class="form-group"><label for="sched-phone">Phone</label><input type="tel" id="sched-phone" name="phone" required></div>';
    html += '<div class="form-group"><label for="sched-vehicle">Vehicle (year, make, model)</label><input type="text" id="sched-vehicle" name="vehicle" required></div>';
    html += '<div class="form-group"><label for="sched-address">Address</label><input type="text" id="sched-address" name="address" placeholder="Where should Josh come?" required></div>';
    html += '<button type="submit" class="btn btn--signal" style="width:100%">Book it</button>';
    html += '</form>';
    body.innerHTML = html;

    const form = body.querySelector("#sched-confirm-form");
    form.addEventListener("submit", e => {
      e.preventDefault();
      step = 4;
      render();
    });
  }

  function renderStep4(body) {
    const code = genConfCode();
    let html = '<div class="scheduler__done">';
    html += '<div class="scheduler__done-title">You\u2019re booked.</div>';
    html += '<div class="scheduler__done-details">' +
      selectedService.name + '<br>' +
      formatDate(selectedDay) + ' at ' + selectedSlot + '<br>' +
      'Estimated: ' + selectedService.duration + '</div>';
    html += '<div class="scheduler__done-code">' + code + '</div>';
    html += '<div class="scheduler__done-note">Josh will text you the morning of to confirm.</div>';
    html += '<div class="scheduler__done-demo">Demo \u2014 this booking wasn\u2019t saved.</div>';
    html += '<button class="scheduler__done-reset">Book another</button>';
    html += '</div>';
    body.innerHTML = html;

    // Hide header
    container.querySelector(".scheduler__header").innerHTML = '';

    body.querySelector(".scheduler__done-reset").addEventListener("click", () => {
      step = 1;
      selectedService = null;
      selectedDay = null;
      selectedSlot = null;
      render();
    });
  }

  render();
}


/* ============================================================
   Section Fade-In
   ============================================================ */
function initFadeIn() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-rise").forEach(el => observer.observe(el));
}


/* ============================================================
   Review Page
   ============================================================ */
function initReviewPage() {
  const starsContainer = document.querySelector(".review-page__stars");
  if (!starsContainer) return;

  const stars = starsContainer.querySelectorAll(".review-page__star");
  const interstitial = document.querySelector(".review-interstitial");
  const starsSection = document.querySelector(".review-page__rating-section");
  const modal = document.querySelector(".review-modal");
  let selected = 0;

  // Hover fill
  stars.forEach((star, i) => {
    star.addEventListener("mouseenter", () => fillStars(i + 1));
    star.addEventListener("mouseleave", () => fillStars(selected));

    star.addEventListener("click", () => {
      selected = i + 1;
      fillStars(selected);
      handleRating(selected);
    });
  });

  function fillStars(count) {
    stars.forEach((s, i) => s.classList.toggle("is-filled", i < count));
  }

  function handleRating(rating) {
    if (rating === 5) {
      // Show interstitial, then redirect
      if (starsSection) starsSection.style.display = "none";
      if (interstitial) interstitial.classList.add("is-visible");
      setTimeout(() => {
        window.location.href = GBP_REVIEW_URL;
      }, 1200);
    } else {
      // Open feedback modal
      if (modal) modal.classList.add("is-open");
    }
  }

  // Modal handling
  if (modal) {
    const submitBtn = modal.querySelector(".review-modal__submit");
    if (submitBtn) {
      submitBtn.addEventListener("click", e => {
        e.preventDefault();
        modal.classList.remove("is-open");
        showToast("Thanks \u2014 Josh will follow up with you personally.");
        selected = 0;
        fillStars(0);
      });
    }

    modal.addEventListener("click", e => {
      if (e.target === modal) {
        modal.classList.remove("is-open");
        selected = 0;
        fillStars(0);
      }
    });

    modal.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        modal.classList.remove("is-open");
        selected = 0;
        fillStars(0);
      }
    });
  }
}

function showToast(msg) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  // Force reflow
  toast.offsetHeight;
  toast.classList.add("is-visible");
  setTimeout(() => toast.classList.remove("is-visible"), 3500);
}


/* ============================================================
   Init
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initPremiumPopovers();
  initCarousel();
  initContactForm();
  initScheduler();
  initFadeIn();
  initReviewPage();
});
