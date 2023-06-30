const toggle1 = document.getElementById("toggle1");
const ques1 = document.getElementById("ques1");
const h4_1 = document.getElementById("h4-1");
const toggle2 = document.getElementById("toggle2");
const ques2 = document.getElementById("ques2");
const h4_2 = document.getElementById("h4-2");
const toggle3 = document.getElementById("toggle3");
const ques3 = document.getElementById("ques3");
const h4_3 = document.getElementById("h4-3");
const toggle4 = document.getElementById("toggle4");
const ques4 = document.getElementById("ques4");
const h4_4 = document.getElementById("h4-4");
const toggle5 = document.getElementById("toggle5");
const ques5 = document.getElementById("ques5");
const h4_5 = document.getElementById("h4-5");

function switcher1(event) {
  if (event.target.className == "down") {
    toggle1.removeAttribute("class", "hide");
    toggle1.setAttribute("class", "show");
    ques1.removeAttribute("class", "down");
    ques1.setAttribute("class", "up");
    h4_1.removeAttribute("class", "normal");
    h4_1.setAttribute("class", "large");
    toggle2.setAttribute("class", "hide");
    ques2.setAttribute("class", "down");
    h4_2.setAttribute("class", "normal");
    toggle3.setAttribute("class", "hide");
    ques3.setAttribute("class", "down");
    h4_3.setAttribute("class", "normal");
    toggle4.setAttribute("class", "hide");
    ques4.setAttribute("class", "down");
    h4_4.setAttribute("class", "normal");
    toggle5.setAttribute("class", "hide");
    ques5.setAttribute("class", "down");
    h4_5.setAttribute("class", "normal");
  } else {
    toggle1.removeAttribute("class", "show");
    toggle1.setAttribute("class", "hide");
    ques1.removeAttribute("class", "up");
    ques1.setAttribute("class", "down");
    h4_1.removeAttribute("class", "large");
    h4_1.setAttribute("class", "normal");
    ques2.removeAttribute("class", "down");
    ques3.removeAttribute("class", "down");
    ques4.removeAttribute("class", "down");
    ques5.removeAttribute("class", "down");
  }
}

function switcher2(event) {
  if (event.target.className == "down") {
    toggle2.removeAttribute("class", "hide");
    toggle2.setAttribute("class", "show");
    ques2.removeAttribute("class", "down");
    ques2.setAttribute("class", "up");
    h4_2.removeAttribute("class", "normal");
    h4_2.setAttribute("class", "large");
    toggle1.setAttribute("class", "hide");
    ques1.setAttribute("class", "down");
    h4_1.setAttribute("class", "normal");
    toggle3.setAttribute("class", "hide");
    ques3.setAttribute("class", "down");
    h4_3.setAttribute("class", "normal");
    toggle4.setAttribute("class", "hide");
    ques4.setAttribute("class", "down");
    h4_4.setAttribute("class", "normal");
    toggle5.setAttribute("class", "hide");
    ques5.setAttribute("class", "down");
    h4_5.setAttribute("class", "normal");
  } else {
    toggle2.removeAttribute("class", "show");
    toggle2.setAttribute("class", "hide");
    ques2.removeAttribute("class", "up");
    ques2.setAttribute("class", "down");
    h4_2.removeAttribute("class", "large");
    h4_2.setAttribute("class", "normal");
    ques3.removeAttribute("class", "down");
    ques4.removeAttribute("class", "down");
    ques5.removeAttribute("class", "down");
    ques1.removeAttribute("class", "down");
  }
}

function switcher3(event) {
  if (event.target.className == "down") {
    toggle3.removeAttribute("class", "hide");
    toggle3.setAttribute("class", "show");
    ques3.removeAttribute("class", "down");
    ques3.setAttribute("class", "up");
    h4_3.removeAttribute("class", "normal");
    h4_3.setAttribute("class", "large");
    toggle1.setAttribute("class", "hide");
    ques1.setAttribute("class", "down");
    h4_1.setAttribute("class", "normal");
    toggle2.setAttribute("class", "hide");
    ques2.setAttribute("class", "down");
    h4_2.setAttribute("class", "normal");
    toggle4.setAttribute("class", "hide");
    ques4.setAttribute("class", "down");
    h4_4.setAttribute("class", "normal");
    toggle5.setAttribute("class", "hide");
    ques5.setAttribute("class", "down");
    h4_5.setAttribute("class", "normal");
  } else {
    toggle3.removeAttribute("class", "show");
    toggle3.setAttribute("class", "hide");
    ques3.removeAttribute("class", "up");
    ques3.setAttribute("class", "down");
    h4_3.removeAttribute("class", "large");
    h4_3.setAttribute("class", "normal");
    ques4.removeAttribute("class", "down");
    ques5.removeAttribute("class", "down");
    ques1.removeAttribute("class", "down");
    ques2.removeAttribute("class", "down");
  }
}

function switcher4(event) {
  if (event.target.className == "down") {
    toggle4.removeAttribute("class", "hide");
    toggle4.setAttribute("class", "show");
    ques4.removeAttribute("class", "down");
    ques4.setAttribute("class", "up");
    h4_4.removeAttribute("class", "normal");
    h4_4.setAttribute("class", "large");
    toggle1.setAttribute("class", "hide");
    ques1.setAttribute("class", "down");
    h4_1.setAttribute("class", "normal");
    toggle2.setAttribute("class", "hide");
    ques2.setAttribute("class", "down");
    h4_2.setAttribute("class", "normal");
    toggle3.setAttribute("class", "hide");
    ques3.setAttribute("class", "down");
    h4_3.setAttribute("class", "normal");
    toggle5.setAttribute("class", "hide");
    ques5.setAttribute("class", "down");
    h4_5.setAttribute("class", "normal");
  } else {
    toggle4.removeAttribute("class", "show");
    toggle4.setAttribute("class", "hide");
    ques4.removeAttribute("class", "up");
    ques4.setAttribute("class", "down");
    h4_4.removeAttribute("class", "large");
    h4_4.setAttribute("class", "normal");
    ques5.removeAttribute("class", "down");
    ques1.removeAttribute("class", "down");
    ques2.removeAttribute("class", "down");
    ques3.removeAttribute("class", "down");
  }
}

function switcher5(event) {
  if (event.target.className == "down") {
    toggle5.removeAttribute("class", "hide");
    toggle5.setAttribute("class", "show");
    ques5.removeAttribute("class", "down");
    ques5.setAttribute("class", "up");
    h4_5.removeAttribute("class", "normal");
    h4_5.setAttribute("class", "large");
    toggle1.setAttribute("class", "hide");
    ques1.setAttribute("class", "down");
    h4_1.setAttribute("class", "normal");
    toggle2.setAttribute("class", "hide");
    ques2.setAttribute("class", "down");
    h4_2.setAttribute("class", "normal");
    toggle3.setAttribute("class", "hide");
    ques3.setAttribute("class", "down");
    h4_3.setAttribute("class", "normal");
    toggle4.setAttribute("class", "hide");
    ques4.setAttribute("class", "down");
    h4_4.setAttribute("class", "normal");
  } else {
    toggle5.removeAttribute("class", "show");
    toggle5.setAttribute("class", "hide");
    ques5.removeAttribute("class", "up");
    ques5.setAttribute("class", "down");
    h4_5.removeAttribute("class", "large");
    h4_5.setAttribute("class", "normal");
    ques1.removeAttribute("class", "down");
    ques2.removeAttribute("class", "down");
    ques3.removeAttribute("class", "down");
    ques4.removeAttribute("class", "down");
  }
}

ques1.addEventListener("click", switcher1);
ques2.addEventListener("click", switcher2);
ques3.addEventListener("click", switcher3);
ques4.addEventListener("click", switcher4);
ques5.addEventListener("click", switcher5);
