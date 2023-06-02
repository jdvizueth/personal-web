const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
  window.location.href = 'index.html';
});

// document.addEventListener('DOMContentLoaded', () => {
//   const logoElement = document.getElementById('logo');
//   const logoText = 'Jose Vizueth';
//   let currentCharacter = 0;

//   function typeLogo() {
//     if (currentCharacter < logoText.length) {
//       logoElement.textContent += logoText.charAt(currentCharacter);
//       currentCharacter++;
//       setTimeout(typeLogo, 150);
//     } else {
//       logoElement.style.width = logoElement.offsetWidth + 'px';
//     }
//   }

//   typeLogo();
// });


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
        item.style.display = index === currentIndex ? 'flex' : 'none';
        console.log('current Index:', currentIndex)
      });
    }

    // Initially show only the first project
    updateProjectVisibility();
    console.log('passes here')
  });
});