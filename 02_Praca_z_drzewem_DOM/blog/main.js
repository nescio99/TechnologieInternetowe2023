//Zadanie 1

const header = document.querySelector(".about-blog__content-title");
const logo = document.querySelector("img");
const form = document.querySelector("form");
const link = document.querySelector(".e-mail a");

//Zadanie 2

const galleryList = document.querySelectorAll(".gallery-main-photo");

//Zadanie 3
// header.textContent = "Lubię pizzę :)";
// console.log(logo.tagName);
// logo.setAttribute("src", "https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/31/64/52/31645240-4001-50ec-1358-cc0dfda253de/source/512x512bb.jpg");
// console.log(form.innerHTML);
// link.setAttribute("href", "mailto:gkowalski@wwsi.edu.pl");
// const headerClass1 = header.className;
// const headerClass2 = header.classList;
// console.log({headerClass1, headerClass2});
// header.className = "";
// header.classList.remove("about-blog__content-title");
// document.querySelector("a").className = headerClass1;

//Zadanie 4
const newLi = document.createElement("li");
const newLink = document.createElement("a");
newLink.setAttribute("href", "#contact");
newLink.innerText = "kontakt";
newLi.append(newLink);
document.querySelector(".navigation-menu ul").append(newLi);

//<li><a href="#contact">kontakt</a></li>

//Zadanie 5

const clone = document.querySelector(".navigation-menu ul li:nth-child(1)").cloneNode(true);
const clone2 = document.querySelector(".navigation-menu ul li:nth-child(2)").cloneNode(true);
document.querySelector(".navigation-menu ul").append(clone);
document.querySelector(".navigation-menu ul").append(clone2);

//Zadanie 6

document.querySelector(".about-me-title").remove();

//Zadanie 1 - style
header.style.color = "deeppink";
header.style.fontSize = "40px";
header.style.textDecoration = "underline";

logo.addEventListener("click", function() {
    if (this.style.borderColor === "") {
        this.style.borderColor = "magenta";
        this.style.borderWidth = "5px";
        this.style.borderStyle = "solid";
    }
    else {
        this.style.borderColor = "";
        this.style.borderWidth = "";
        this.style.borderStyle = "";
    }
})

//Zadanie 2 style
const formBtn = document.querySelector(".form-button");
formBtn.addEventListener("click", () => {
    form.classList.add("hide");
    const info = document.createElement("p");
    info.textContent = "Wiadomość została wysłana";
    info.classList.add("about-blog__content-title");
    form.after(info);
})

//Zadanie 3 style

const laos = document.querySelector(".first-article__text-title");
laos.addEventListener("mouseenter", function () {
    this.style.color = "red";
    document.querySelector(".first-article__photo").style.backgroundImage
        = "url(./img/kowal.png)";
});