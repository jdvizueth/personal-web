const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
  window.location.href = 'index.html';
});

document.addEventListener('DOMContentLoaded', () => {
  const logoElement = document.getElementById('name');
  const logoText = 'Jose Vizueth';
  let currentCharacter = 0;

  function typeLogo() {
    if (currentCharacter < logoText.length) {
      logoElement.textContent += logoText.charAt(currentCharacter);
      currentCharacter++;
      setTimeout(typeLogo, 75);
    } else {
      logoElement.style.width = logoElement.offsetWidth + 'px';
    }
  }

  typeLogo();
});

function typeOutText(element, text, speed) {
  let index = 0;
  const intervalId = setInterval(() => {
    element.textContent += text[index];
    index++;
    if (index >= text.length) {
      clearInterval(intervalId);
    }
  }, speed);
}

let currentIndex = 0;
document.addEventListener('DOMContentLoaded', function () {
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach((item) => {
    let prevArrow = item.querySelector('.prev-arrow');
    let nextArrow = item.querySelector('.next-arrow');
    const projectCount = projectItems.length - 1;

    prevArrow.addEventListener('click', () => {
      if (currentIndex - 1 < 0) {
        currentIndex = projectCount
      }
      else {
        currentIndex = currentIndex - 1
      }
      console.log('prevPasses')
      updateProjectVisibility();
    });

    nextArrow.addEventListener('click', () => {
      if (currentIndex + 1 > projectCount) {
        currentIndex = 0
      }
      else {
        currentIndex = currentIndex + 1
      }
      console.log('nextPasses')
      updateProjectVisibility();
    });

    function updateProjectVisibility() {
      projectItems.forEach((item, index) => {
        if (index === currentIndex) {
          item.style.display = 'flex';
          const projectTitle = item.querySelector('.project-title');
          const titleText = projectTitle.getAttribute('data-title');
          projectTitle.textContent = '';
          typeOutText(projectTitle, titleText, 50);
        } else {
          item.style.display = 'none';
        }
      });
    }
  });
  projectItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.style.display = 'flex';
      const projectTitle = item.querySelector('.project-title');
      const titleText = projectTitle.getAttribute('data-title');
      projectTitle.textContent = '';
      typeOutText(projectTitle, titleText, 50);
    } else {
      item.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const skillCards = document.querySelectorAll('.skill-card');

  function checkVisibility() {
    skillCards.forEach((card) => {
      if (isElementInViewport(card)) {
        card.classList.add('show');
      }
    });
  }

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  checkVisibility();
  window.addEventListener('scroll', checkVisibility);
});


const email = "vizueth.jd@gmail.com";
const contactButton = document.getElementById("contact-button");

contactButton.addEventListener("click", () => {
  const subject = "Inquiry from Website";
  const body = "Hello,\n\nI would like to get in touch regarding...";
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
});
