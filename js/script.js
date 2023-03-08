// for (let i = 0; i < 100; i++) {
//   let mainElement = document.createElement("div");
//   let myHeading = document.createElement("h1");
//   let myParagraph = document.createElement("p");

//   let headingText = document.createTextNode("Product title");
//   let paragraphText = document.createTextNode("description products");

//   //add heading text
//   myHeading.appendChild(headingText);
//   //add heading and paragraph to main element
//   mainElement.appendChild(myHeading);
//   mainElement.appendChild(myParagraph);
//   //add paragraph text
//   myParagraph.appendChild(paragraphText);

//   mainElement.className = "product";
//   document.body.appendChild(mainElement);
// }

// function  checkpoints(a,b,v){

//   for(let i=0; i< check.length; i++ ){
//           if(typeof check[i]=== "string"){
//               userName = check[i];

//               if(typeof check[i] === "number"){
//                   age= check[i];

//                   if(typeof check[i] === "boolean" &&typeof check[i] === check[i]){
//                       userStatus = "available"
//                   } else {
//                       userStatus = "not available";
//                   }
//               }
//           }
//       }
//       console.log(`Hello User ${userName}, Your Age Is ${age}, You Are ${userStatus} For Hire`);
// }
// checkpoints("ahmed", 24, true);
// checkpoints(24, "ahmed", true);
// checkpoints(true, 24, "ahmed");
// checkpoints(false, "ahmed", 24);
//Creat Header Elements
let header = document.createElement("header");
header.className = "website-head";
let logo = document.createElement("h2");
let logoText = document.createTextNode("Elzayat");
logo.className = "logo";
logo.appendChild(logoText);
header.appendChild(logo);
let ul = document.createElement("ul");
ul.className = "menu";
let liArray = ["Home", "About", "Services", "Contact"];
for (let i = 0; i < liArray.length; i++) {
  let li = document.createElement("li");
  liText = document.createTextNode(liArray[i]);
  li.appendChild(liText);
  ul.appendChild(li);
}
header.appendChild(ul);
//Style Header Elements
document.body.style.cssText = `margin-top: 0; margin-bottom: 0;`;
header.style.cssText =
  "display:flex; justify-content: space-between; align-items: center; flex-wrap:wrap";
logo.style.cssText = "color: #019688";
ul.style.cssText =
  "list-style: none; display:flex; align-items: center; gap: 20px; font-size: 17px";
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    logo.style.cssText = " margin: 0 auto; color: #019688";
  } else {
    logo.style.cssText = "color: #019688";
  }
}
let x = window.matchMedia("(max-width: 500px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
document.body.appendChild(header);
// Creat Content Elements
let content = document.createElement("div");
content.className = "content";
content.style.cssText =
  "display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 15px; background-color: #ececec; padding: 15px;";
for (let i = 0; i < 15; i++) {
  let product = document.createElement("div");
  product.className = "product";
  let productText = document.createTextNode("product");
  product.appendChild(productText);
  let span = document.createElement("span");
  spanNumbers = document.createTextNode(`${i + 1}`);
  span.appendChild(spanNumbers);
  product.appendChild(span);
  content.appendChild(product);
  //Style Content Elements
  product.style.cssText =
    "display: flex; flex-direction: column-reverse; gap: 10px; align-items:center; padding: 15px; background-color: #fff; border-radius: 4px; box-shadow: rgb(0 0 0 / 9%) 1px 1px 10px 1px; font-size: 13px; color: rgb(153, 153, 153);";
  span.style.cssText = "font-size: 25px; font-weight: bold; color: #000";
}
function myNewFunction(y) {
  if (y.matches) {
    // If media query matches
    content.style.cssText =
      "display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; background-color: #ececec; padding: 15px;";
  } else {
    content.style.cssText =
      "display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 15px; background-color: #ececec; padding: 15px;";
  }
}
let y = window.matchMedia("(max-width: 400px)");
myNewFunction(y); // Call listener function at run time
y.addListener(myNewFunction); // Attach listener function on state changes
document.body.appendChild(content);
// Creat Footer Element
let footer = document.createElement("footer");
footer.className = "footer";
let footerText = document.createTextNode("abdallh Elzayat 2023");
footer.appendChild(footerText);
// Creat Footer Style
footer.style.cssText =
  "background-color: #019688; text-align: center; padding: 15px; color: #fff; font-size: 17px";
document.body.appendChild(footer);
console.log(footer);
