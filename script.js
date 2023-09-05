
const boxxes = document.querySelectorAll('.box');

// Add a hover event listener to each box
boxxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.querySelector('.overlay').style.display = 'flex';
  });

  box.addEventListener('mouseleave', () => {
    box.querySelector('.overlay').style.display = 'none';
  });
});



// const boxesInner = document.querySelector(".boxes-inner");
// let isDown = false;
// let startX;
// let scrollLeft;

// boxesInner.addEventListener("mousedown", (e) => {
//   isDown = true;
//   boxesInner.classList.add("active");
//   startX = e.pageX - boxesInner.offsetLeft;
//   scrollLeft = boxesInner.scrollLeft;
// });

// boxesInner.addEventListener("mouseleave", () => {
//   isDown = false;
//   boxesInner.classList.remove("active");
// });

// boxesInner.addEventListener("mouseup", () => {
//   isDown = false;
//   boxesInner.classList.remove("active");
// });

// boxesInner.addEventListener("mousemove", (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - boxesInner.offsetLeft;
//   const walk = (x - startX) * 3; // Adjust scrolling speed
//   boxesInner.scrollLeft = scrollLeft - walk;
// });


const boxesInner = document.querySelector(".boxes-inner");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let scrollValue = 0;

prevButton.addEventListener("click", () => {
  scrollValue -= boxesInner.clientWidth;
  if (scrollValue < 0) scrollValue = 0;
  boxesInner.scrollTo({
    left: scrollValue,
    behavior: "smooth"
  });
});

nextButton.addEventListener("click", () => {
  scrollValue += boxesInner.clientWidth;
  if (scrollValue > boxesInner.scrollWidth - boxesInner.clientWidth) {
    scrollValue = boxesInner.scrollWidth - boxesInner.clientWidth;
  }
  boxesInner.scrollTo({
    left: scrollValue,
    behavior: "smooth"
  });
});














