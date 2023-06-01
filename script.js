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
      setTimeout(typeLogo, 150);
    } else {
      logoElement.style.width = logoElement.offsetWidth + 'px';
    }
  }

  typeLogo();
});


