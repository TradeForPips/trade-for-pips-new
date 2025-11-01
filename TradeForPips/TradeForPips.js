/* ===========================
   SUBSCRIBER COUNTER ANIMATION
   =========================== */
const targetSubs = 20965;
const subsElement = document.getElementById('subs');
let currentCount = 0;
const duration = 9000; // 9 seconds
const frameRate = 60;
const totalFrames = (duration / 500) * frameRate;
const incrementStep = Math.ceil(targetSubs / totalFrames);

function animateCount() {
  currentCount += incrementStep;
  
  if (currentCount >= targetSubs) {
    currentCount = targetSubs;
    subsElement.textContent = currentCount.toLocaleString();
    return;
  }
  
  subsElement.textContent = currentCount.toLocaleString();
  requestAnimationFrame(animateCount);
}

/* ===========================
   TYPEWRITER EFFECT
   =========================== */
const phrases = ["Stop Gambling.", "Start Mastering It."];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById('typewriter');
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBetweenPhrases = 1000;

function typeWriter() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }
  
  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(typeWriter, pauseBetweenPhrases);
    return;
  }
  
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeWriter, 500);
    return;
  }
  
  const speed = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(typeWriter, speed);
}

/* ===========================
   CHART SLIDER FUNCTIONALITY
   =========================== */
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
  // Remove active class from all slides and dots
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Handle edge cases
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  
  // Add active class to current slide and dot
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

/* ===========================
   SCROLL TO TESTIMONIALS
   =========================== */
function scrollToTestimonials() {
  const testimonialsSection = document.querySelector('.testimonials-section');
  if (testimonialsSection) {
    testimonialsSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

/* ===========================
   EVENT LISTENERS
   =========================== */
window.addEventListener('DOMContentLoaded', function() {
  // Start subscriber counter animation
  requestAnimationFrame(animateCount);
  
  // Start typewriter effect after 1 second
  setTimeout(typeWriter, 1000);
  
  // Chart slider - Next button
  document.getElementById('nextBtn').addEventListener('click', nextSlide);
  
  // Chart slider - Previous button
  document.getElementById('prevBtn').addEventListener('click', prevSlide);
  
  // Chart slider - Dots navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });
  
  // Auto-advance slider every 4 seconds
  setInterval(nextSlide, 4000);
  
  // Join button handlers (opens Telegram)
  document.getElementById('joinBtn').addEventListener('click', function() {
    window.open('https://t.me/tradeforpips', '_blank');
  });
  
  document.getElementById('joinBtn2').addEventListener('click', function() {
    window.open('https://t.me/tradeforpips', '_blank');
  });
  
  document.getElementById('joinBtn3').addEventListener('click', function() {
    window.open('https://t.me/tradeforpips', '_blank');
  });
  
  // "What Others Are Saying" button - scrolls to testimonials
  document.getElementById('testimonialBtn').addEventListener('click', scrollToTestimonials);
  
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
});
