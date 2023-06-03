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
      startCaretBlink(element);
    }
  }, speed);
}


function startCaretBlink(element) {
  element.innerHTML += '<span class="caret">|</span>';
  const caret = element.querySelector('.caret');
  const blinkIntervalId = setInterval(() => {
    caret.style.visibility = caret.style.visibility === 'visible' ? 'hidden' : 'visible';
  }, 500); // Adjust blinking speed as desired

  // Stop blinking when necessary, for example:
  // clearInterval(blinkIntervalId);
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
          projectTitle.textContent = ''; // Clear existing title text
          typeOutText(projectTitle, titleText, 100); // Type out the new title
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
      projectTitle.textContent = ''; // Clear existing title text
      typeOutText(projectTitle, titleText, 100); // Type out the new title
    } else {
      item.style.display = 'none';
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const skillItems = document.querySelectorAll('.skill-item');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillItem = entry.target;
        const skillTitle = skillItem.querySelector('.skill-title');
        const skillDesc = skillItem.querySelector('.skill-description');
        const titleText = skillTitle.getAttribute('data-title');
        const descText = skillDesc.getAttribute('data-description');
        typeOutText(skillTitle, titleText, 200);
        typeOutText(skillDesc, descText, 10);
        observer.unobserve(skillItem);
      }
    });
  }, observerOptions);

  skillItems.forEach((item) => {
    observer.observe(item);
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

  // Initial check when page loads
  checkVisibility();

  // Check visibility on scroll
  window.addEventListener('scroll', checkVisibility);
});
