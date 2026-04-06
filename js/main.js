//header-nav
let toggleDev = document.querySelector(".mega-main");
let toggleMain = document.querySelector("#toggle-main");

toggleMain.addEventListener("click", (e) => {
  toggleDev.classList.toggle("active");
});
//header-nav
//our skills
let ourSkills = document.querySelector("#our-skills");
let widthBar = document.querySelectorAll(".widthBar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= ourSkills.offsetTop - 240) {
    widthBar.forEach((ele) => {
      ele.style.width = `${ele.dataset.width}`;
    });
  }
});
//our skills
//Latest Events
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let startDate = new Date("Sun Apr 05 2026 17:11:31");

setInterval(() => {
  let now = new Date();

  let diff = now - startDate;

  let d = Math.floor(diff / (1000 * 60 * 60 * 24));
  let h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  let m = Math.floor((diff / (1000 * 60)) % 60);
  let s = Math.floor((diff / 1000) % 60);

  days.innerHTML = d;
  hours.innerHTML = String(h).padStart(2, "0");
  minutes.innerHTML = String(m).padStart(2, "0");
  seconds.innerHTML = String(s).padStart(2, "0");
}, 1000);
//Latest Events
//Our Awesome Stats
let nums = document.querySelectorAll(".nums");
let awesome = document.querySelector(".awesome");
nums = [...nums];
let started = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= awesome.offsetTop -3) {
    if (!started) {
      nums.forEach((num) => {
        let number = 0;
        let interval = setInterval(() => {
          max = num.dataset.num;
          let self = max / 100;
          number += self;
          if (number >= max) {
            number = max;
            clearInterval(interval);
          }
          num.innerHTML = Math.trunc(number);
        }, 30);
      });
      started = true;
    }
  }
});

//Our Awesome Stats
