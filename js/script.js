function createStars(numStars, container) {
  const starfield = document.getElementsByClassName(container)[0];

  for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;

    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    star.style.animationDelay = `${Math.random() * 2}s`;

    starfield.appendChild(star);
  }
}

createStars(100, "opening-header");
createStars(30, "internships");

document.addEventListener("DOMContentLoaded", function () {
  const introContainer = document.getElementsByClassName("intro-container")[0];
  const helloText = document.getElementById("hello");
  const worldText = document.getElementById("world");
  const iAmAarushiText = document.getElementById("i-am-aarushi-text");

  function typeWriter(text, element, delay = 100) {
    let index = 0;
    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, delay);
      }
    }
    type();
  }

  async function animateText() {
    await new Promise((r) => setTimeout(r, 500));
    helloText.style.opacity = 1;
    helloText.style.transform = "translateX(0)";

    await new Promise((r) => setTimeout(r, 100));
    worldText.style.opacity = 1;

    await new Promise((r) => setTimeout(r, 100));
    iAmAarushiText.style.opacity = 1;

    await new Promise((r) => setTimeout(r, 1000));
    introContainer.style.transform = "translate(-50%, -130%)";

    await new Promise((r) => setTimeout(r, 1000));
    const typewriterText =
      "My pronouns are she/her. This website is a window (literally) to all the work that I have managed to do thus far. It ain't much, but it's honest work.";
    const typewriterElement = document.createElement("p");
    introContainer.appendChild(typewriterElement);
    typeWriter(typewriterText, typewriterElement, 50);
  }

  animateText();
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleNavButton = document.getElementById("toggleNavButton");
  const sideNav = document.querySelector(".side-nav");

  toggleNavButton.addEventListener("click", function () {
    if (sideNav.style.display === "none" || sideNav.style.display === "") {
      sideNav.style.display = "block";
      sideNav.style.animation = "navbar-appear 0.5s ease-out";
      sideNav.style.opacity = "1";
    } else {
      sideNav.style.animation = "navbar-disappear 0.5s";
      sideNav.style.opacity = "0";
      sideNav.style.display = "none";
    }
  });
});

let expandDescription = (i) => {
  let elementDisappear = document.getElementById("content-box");
  elementDisappear.style.display = "none";
  let elementAppear = document.getElementById("internship-" + i + "-expand");
  elementAppear.style.display = "block";
};

let removeDescription = (i) => {
  let elementDisappear = document.getElementById("content-box");
  elementDisappear.style.display = "block";
  let elementAppear = document.getElementById("internship-" + i + "-expand");
  elementAppear.style.display = "none";
};

// this is the function for okay
document.addEventListener("DOMContentLoaded", function () {
  var currentIndex = 0;
  var cards = document.querySelectorAll(".section-3-slide-container .card");
  var progressDots = document.querySelectorAll("#progressBar .progress-dot");
  var progressBar = document.getElementById("progressBar");
  var pcards = document.querySelectorAll(
    ".section-3-slide-container .card-prev"
  );
  var ncards = document.querySelectorAll(
    ".section-3-slide-container .card-next"
  );
  var totalCards = cards.length;

  // Initially hide all cards except the first one
  function initializeCards() {
    cards.forEach((card, index) => {
      card.style.display = index === 0 ? "block" : "none";
    });
    pcards.forEach((pcard, index) => {
      pcard.style.display = index === 0 ? "block" : "none";
    });
    ncards.forEach((ncard, index) => {
      ncard.style.display = index === 0 ? "block" : "none";
    });

    cards.forEach((card) => card.classList.add("card-visible"));
    pcards.forEach((pcard) => pcard.classList.add("card-visible"));
    ncards.forEach((ncard) => ncard.classList.add("card-visible"));
  }
  // Function to update the visibility of cards based on the current index
  function updateCardVisibility() {
    cards.forEach((card, index) => {
      if (index === currentIndex) {
        // Make the card visible first
        // Then add a slight delay to allow the display change to render
        setTimeout(() => {
          card.style.display = "block";
          card.classList.add("card-visible");
          card.classList.remove("card-not-visible");
        }, 500); // A minimal delay
      } else {
        // Remove the scaling class first to trigger the scale down effect
        card.classList.remove("card-visible");
        card.classList.add("card-not-visible");
        // Then set a timeout to hide the card after the transition finishes
        setTimeout(() => {
          card.style.display = "none";
        }, 500); // This should match your CSS transition duration
      }
    });
    pcards.forEach((pcard, index) => {
      if (index === currentIndex - 1) {
        // Make the card visible first
        // Then add a slight delay to allow the display change to render
        setTimeout(() => {
          pcard.style.display = "block";
          pcard.classList.add("card-visible");
          pcard.classList.remove("card-not-visible");
        }, 500); // A minimal delay
      } else {
        // Remove the scaling class first to trigger the scale down effect
        pcard.classList.remove("card-visible");
        pcard.classList.add("card-not-visible");
        // Then set a timeout to hide the card after the transition finishes
        setTimeout(() => {
          pcard.style.display = "none";
        }, 500); // This should match your CSS transition durations
      }
    });

    ncards.forEach((ncard, index) => {
      if (index === currentIndex + 1) {
        // Make the card visible first
        // Then add a slight delay to allow the display change to render
        setTimeout(() => {
          ncard.style.display = "block";
          ncard.classList.add("card-visible");
          ncard.classList.remove("card-not-visible");
        }, 500); // A minimal delay
      } else {
        // Remove the scaling class first to trigger the scale down effect
        ncard.classList.remove("card-visible");
        ncard.classList.add("card-not-visible");
        // Then set a timeout to hide the card after the transition finishes
        setTimeout(() => {
          ncard.style.display = "none";
        }, 500); // This should match your CSS transition duration
      }
    });

    progressDots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  document.getElementById("nextBtn").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCardVisibility();
  });

  document.getElementById("prevBtn").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCardVisibility();
  });

  // Initialize the card display
  initializeCards();
  initializeProgressBar();
});

function openLink(s) {
  window.open("https:" + s, "_blank");
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  var formData = new FormData(this);

  fetch("sendmail.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("resultMessage").textContent = data;
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("resultMessage").textContent =
        "An error occurred.";
    });
});
