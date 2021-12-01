const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const auto = true;
const intervalTime = 5000;
let slideInterval;


function nextSlide() {
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next slibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  // setTimeout(function() {
  //   current.classList.remove('current')
  // });
}

function prevSlide() {
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev slibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  // setTimeout(function() {
  //   current.classList.remove('current')
  // })
}

// Button Event
next.addEventListener('click', function (){
  nextSlide();
  if (auto) {
    clearInterval(slideInterval)
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime)
  }
}
)
prev.addEventListener('click', function (){
  prevSlide();
  if (auto) {
    clearInterval(slideInterval)
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime)
  }
})

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime)
}
