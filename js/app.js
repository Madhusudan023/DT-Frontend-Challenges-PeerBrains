let sidebar_btn = document.getElementById("sidebarbtn");
let flag = true;
sidebar_btn.addEventListener("click", function () {
  let position = 280;


  if (flag === false) {
    sidebar_btn.parentElement.parentElement.style.transform = `translateX(${0}px)`;
    sidebar_btn.style.transform = `rotate(0)`;

  }
  else {
    sidebar_btn.parentElement.parentElement.style.transform = `translateX(${position}px)`;
    sidebar_btn.style.transform = `rotate(180deg)`;

  }

  flag = !flag;
})


