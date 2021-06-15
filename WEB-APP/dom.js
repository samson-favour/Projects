// ************
// ** PART 1 **
// ************

// EXAMINE THE DOCUMENT OBJECT
// console.dir(document);

// console.log(document.domain); // 127.0.0.1
// console.log(document.URL); // http://127.0.0.1:5500/index.html
// console.log(document.title);
// document.title = 123;
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = "Hello"; // this works...but not the way we want to do it
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// SELECTORS

// console.log(document.getElementById("header-title"));
// const headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerHTML = "Goodbye";

// textContent ignores styling and innerText pays attention to it. if something encosed in span is display:none
// if console.log w/ textContent it will still show, w/ innerText it will not
// const header = document.getElementById("main-header");
// header.style.borderBottom = "solid 3px #000";

// const items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }

// const li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }

// QUERY SELECTOR //
// const header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// const input = document.querySelector("input"); // even there are 2 inputs on page only grabs the first one
// input.value = "hello world";

// // grab firt input field of type "submit"
// const submit = document.querySelector("input[type='submit']");
// submit.value = "send";

// const item = document.querySelector(".list-group-item");
// item.style.color = "red";

// const lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// const secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "coral";

// QUERY SELECTOR ALL //
// const titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "Hello";

// const odds = document.querySelectorAll("li:nth-child(odd)");
// for (let i = 0; i < odds.length; i++) {
//   odds[i].style.backgroundColor = "#f4f4f4";
// }
// const evens = document.querySelectorAll("li:nth-child(even)");
// evens.forEach((even) => (even.style.backgroundColor = "#ccc"));

// ************
// ** PART 2 **
// ************

// TRAVERSING THE DOM //
// const itemList = document.querySelector("#items");
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

// parent element - mostly the same as parent node
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes); // the text nodes are the line breaks in formatting...
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// FirstChild
// console.log(itemList.firstChild); // just like childNodes this gives us the formatting linebreaks
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

// Last Child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

// nextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// previous Sibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

// createElement

// // create a div
// const newDiv = document.createElement("div");
// // Add Class
// newDiv.className = "hello";

// // add ID
// newDiv.id = "hello1";

// // add attribute
// newDiv.setAttribute("title", "hello Div");

// // create text node
// const newDivText = document.createTextNode("Hello World!");

// // add text to Div
// newDiv.appendChild(newDivText);

// console.log(newDiv);

// const container = document.querySelector("header .container");
// const h1 = document.querySelector("header h1");

// container.insertBefore(newDiv, h1);

// newDiv.style.fontSize = "30px";

// ************
// ** PART 3 **
// ************

// const button = document
//   .getElementById("button")
//   .addEventListener("click", () => console.log("123"));

// const button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);

// function buttonClick() {
//   console.log("button Clicked");
//   document.getElementById("header-title").textContent = "Changed";
//   document.querySelector("#main").style.backgroundColor = "#f4f4f4";
// }

// function buttonClick(e) {
// // e is the event information
//   console.log(e);
//   console.log(e.target); // elemnent that event was fired from, in this case, button we clicked
//   console.log(e.target.id); // id of target
//   console.log(e.target.className); // string of classes assigned to garget
//   console.log(e.target.classList); // dom token list of classes
//   const output = document.getElementById("output");
//   output.innerHTML = `<h3>${e.target.id}</h3>`;
//   console.log(e.type);
//   console.log(e.clientX, e.clientY); // x,y coord of mouse when clicked relative to window
//   console.log(e.offsetX, e.offsetY); // x,y coord of mouse when clicked relative to element
//   console.log(e.altKey); // boolean true if alt is held down
//   console.log(e.ctrlKey); // boolean true if ctrl is held down
//   console.log(e.shiftKey); // boolean true if shift is held down
// }

// const button = document.querySelector("#button");

// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);

// const box = document.querySelector("#box");

// mouse enter/leave only trigger for element itself
// mouse over/out also trigget for any inner element
// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);
// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);

// box.addEventListener("mousemove", runEvent); // fires off as mouse is moving

// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);
//   const output = document.getElementById("output");
//   output.innerHTML = `<H3> MouseX: ${e.offsetX}</H3><h3>MouseY: ${e.offsetY}</h3>`;
//   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
// }

// const itemInput = document.querySelector('input[type="text"]');
// const form = document.querySelector("form");
// const select = document.querySelector("select");

// with keydown the "value" will be one behind because the keyrpess doesn't get recorded in value unti keyup
// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent); // pushing and holding key will trigger repeatedtly

// itemInput.addEventListener("focus", runEvent); // click into element
// itemInput.addEventListener("blur", runEvent); // click out of element

// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("copy", runEvent);
// itemInput.addEventListener("paste", runEvent);

// run on keypress, cut, copy, paste, ...
// itemInput.addEventListener("input", runEvent);

// select.addEventListener("change", runEvent);
// select.addEventListener("input", runEvent);

// form.addEventListener("submit", runEvent);

// function runEvent(e) {
//   e.preventDefault(); // stop form submit from submitting
//   console.log(`EVENT TYPE: ${e.type}`);
//   console.log(e.target.value);
//   document.getElementById("output").innerHTML = `<h3>${e.target.value}</h3>`;
// }

// ************
// ** PART 4 **
// ************
