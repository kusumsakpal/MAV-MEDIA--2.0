// const text = document.querySelector(".sec-text");
// const textLoad = () => {
//   setTimeout(() => {
//     text.textContent = "SUCCESS.";
//   }, 0);
//   setTimeout(() => {
//     text.textContent = "GROWTH.";
//   }, 3000);
//   setTimeout(() => {
//     text.textContent = "DREAM.";
//   }, 6000);
// };
// textLoad();

// setInterval(textLoad, 12000);


// $(document).ready(function(){
//     $(".counter").counterUp({
//         delay : 10,
//         time : 700
//     })
// })

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=> {
//   hamburger.classList.remove("active");
//   navMenu.classList.remove("active");
// }) )

// document.addEventListener('scroll', () => {
// const header = document.querySelector('header');

// if(window.scrollY > 0) {
//     header.classList.add('scrolled');
// }
// else{
//     header.classList.remove('scrolled');
// }

// })
// document.getElementById("html-form").addEventListener("click", function() {
// // Scroll to the desired section or webpage
// var targetElement = document.getElementById("form"); // Replace with the ID of the target section or element
// targetElement.scrollIntoView({ behavior: 'ease-in-out' });
// });

// document.getElementById("htmlForm2").addEventListener("click", function() {
// // Scroll to the desired section or webpage
// var targetElement = document.getElementById("form"); // Replace with the ID of the target section or element
// targetElement.scrollIntoView({ behavior: 'ease-in-out' });
// });


// window.addEventListener('scroll', function() {
// const header = document.querySelector('.transparent-header');
// if (window.scrollY > 0) {
//   header.classList.add('scrolled');
// } else {
//   header.classList.remove('scrolled');
// }
// });


// function startCountUp(targetValues) {
//   var counters = document.querySelectorAll('.counter');
//   var animationDuration = 2000; // Set your desired animation duration in milliseconds

//   counters.forEach(function (counter, index) {
//     var targetValue = targetValues[index];
//     var currentValue = 0;
//     var increment = Math.ceil(targetValue / (animationDuration / 16));

//     function updateCounter() {
//       currentValue += increment;
//       if (currentValue >= targetValue) {
//         currentValue = targetValue;
//       }

//       counter.textContent = currentValue;

//       if (currentValue < targetValue) {
//         requestAnimationFrame(updateCounter);
//       }
//     }

//     updateCounter();
//   });
// }

// // Set your target values here
// var targetValues = [560, 25, 200];

// // Call the function when the page loads
// window.onload = function() {
//   startCountUp(targetValues);
// };