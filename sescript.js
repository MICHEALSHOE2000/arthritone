// script.js

// COUNTDOWN TIMER
function startCountdown() {
  let timer = 600; // 10 minutes in seconds
  const timerElement = document.getElementById('timer');

  const interval = setInterval(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timer > 0) {
      timer--;
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

// FAQ TOGGLE
function setupFAQ() {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
}

// SMOOTH SCROLLING FOR INTERNAL LINKS
function setupSmoothScroll() {
  const links = document.querySelectorAll('.scroll-link, #discount-btn');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// FAKE BOTTLES LEFT COUNTDOWN
function setupBottlesCounter() {
  const bottlesLeft = document.getElementById('bottles-left');
  let bottles = parseInt(bottlesLeft.textContent, 10);

  window.addEventListener('scroll', () => {
    if (bottles > 3) { // Don't go below 3
      bottles--;
      bottlesLeft.textContent = bottles;
    }
  }, { once: true }); // Only decrease once per scroll
}

// INITIALIZE EVERYTHING AFTER PAGE LOAD
document.addEventListener('DOMContentLoaded', () => {
  startCountdown();
  setupFAQ();
  setupSmoothScroll();
  setupBottlesCounter();
});
