const body = document.querySelector("body");
document.body.style.backgroundColor = "hsl(217, 54%, 11%)";
document.body.style.fontSize = "18px";
document.body.style.margin = "250px 600px";
document.body.style.display = "flex";
document.body.style.gap = "150px";
document.body.style.justifyContent = "space-around";
document.body.style.alignItems = "center";

const wrapper = document.createElement("div"); //обертка
body.append(wrapper);
wrapper.id = "wrapper";
wrapper.style.cssText =
  "max-width:1440px; display:flex; justify-content:space-between; align-items:center;";

const card = document.createElement("div"); //card
card.className = "card";
body.append(card);
card.style.maxWidth = "300px";
card.style.backgroundColor = "hsl(216, 50%, 16%)";
card.style.borderRadius = "15px";

const img = document.createElement("img"); //image
card.prepend(img);
img.setAttribute("src", "images/image-equilibrium.jpg");
img.style.width = "250px";
img.style.padding = "25px";
img.style.borderRadius = "15px";

const title = document.createElement("h3"); //title
card.appendChild(title);
title.innerText = "Equilibrium #3429";
title.style.cssText =
  "font-family:'Outfit', sans-serif; color:hsl(0, 0%, 100%); padding:0 22px 22px 22px; margin:0;";

const paragraph = document.createElement("p"); //text
card.appendChild(paragraph);
paragraph.innerText = "Our Equilibrium collection promotes balance and calm.";
paragraph.style.cssText =
  "font-family:'Outfit', sans-serif; color:hsl(215, 51%, 70%); padding:0 22px 22px 22px; margin:0; font-size:18px;";

const items = document.createElement("div"); //обертка для иконок
card.append(items);
items.style.display = "flex";
items.style.justifyContent = "space-between";
items.style.paddingBottom = "20px";

const item_1 = document.createElement("div"); // создала 2 дива
const item_2 = document.createElement("div");
items.prepend(item_1);
items.append(item_2);

item_1.style.cssText =
  "display:flex; gap:6px; font-family: 'Outfit', sans-serif; color:hsl(178, 100%, 50%); padding-left:20px";
item_2.style.cssText =
  "display:flex; gap:6px; align-items:center; font-family: 'Outfit', sans-serif;font-size: 16px; color:hsl(215, 51%, 70%); padding-right:25px;";

const icon = new Image();
icon.setAttribute("src", "images/icon-ethereum.svg");
item_1.prepend(icon);
icon.style.height = "7px;";

const price = document.createElement("span");
item_1.append(price);
price.innerText = "0.041 ETH";
price.style.height = "7px;";

const iconClock = new Image();
iconClock.setAttribute("src", "images/icon-clock.svg");
item_2.prepend(iconClock);
iconClock.style.height = "7px;";

const time = document.createElement("span");
item_2.append(time);
time.innerText = "3 days left";

const line = document.createElement("div");
card.append(line);
line.style.border = "0.1px solid hsl(215, 32%, 27%)";
line.style.width = "245px";
line.style.paddingLeft = "25px";
line.style.margin = "0 auto";

const author = document.createElement("div");
card.append(author);
author.style.display = "flex";
author.style.gap = "3px";
author.style.alignItems = "center";

const authorphoto = new Image();
author.prepend(authorphoto);
authorphoto.setAttribute("src", "images/image-avatar.png");
authorphoto.style.width = "35px";
authorphoto.style.margin = "25px 10px 25px 25px";
authorphoto.style.border = "0.1px solid hsl(0, 0%, 100%)";
authorphoto.style.borderRadius = "50px";

const authorTxt = document.createElement("div");
author.append(authorTxt);
authorTxt.innerText = "Creation of";
authorTxt.style.color = "hsl(215, 51%, 70%)";

const authorName = document.createElement("p");
authorName.innerText = "Jules Wyvern";
author.append(authorName);
authorName.style.cssText =
  "font-family: 'Outfit', sans-serif;font-size: 16px; margin-left: 5px; color: hsl(0, 0%, 100%);";

const copy = card.cloneNode(true);
wrapper.append(copy);

alert("Я оцениваю свою работу на 105 баллов");
