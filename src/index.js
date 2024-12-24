import "./styles.css";
import apple1 from "./assets/apple1.png";
import apple2 from "./assets/apple2.png";
import apple3 from "./assets/apple3.jpg";
import apple4 from "./assets/apple4.jpg";
import apple5 from "./assets/apples-variety.jpg";
import creator from "./assets/creator.avif";
import award from "./assets/award.png";
import merch from "./assets/merch.webp";

const cont = document.getElementById("content");
const svgMenu = document.getElementById("svgBtn");

const dom = (() => {
  const homeP = function () {
    closeMobileMenu();
    cont.innerHTML = "";
    const home = document.createElement("div");
    home.classList.add("home");

    const h1 = document.createElement("h1");
    h1.textContent = "Hungry for Apples?";

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    const p1 = document.createElement("p");
    p1.textContent =
      "Our restaurant offers the best variety of apples on Earth C-137";
    const p2 = document.createElement("p");
    p2.textContent = "Check our menu and be blown away!";

    const btn = document.createElement("button");
    btn.textContent = "Book a table now!";

    home.append(h1, imgContainer, p1, p2, btn);
    cont.appendChild(home);
  };

  const menuP = function () {
    closeMobileMenu();
    cont.innerHTML = "";
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const card1 = helperDom.crSection(
      apple1,
      "The pale red mouth-plosion",
      "An uber pale red apple that explodes with flavour in your mouth."
    );
    const card2 = helperDom.crSection(
      apple2,
      "The plae green boss",
      "One apple that rules them all. It's rick's favorite"
    );
    card2.classList.add("reverse-section");
    const card3 = helperDom.crSection(
      apple3,
      "The red classic",
      "Our best selling dish apple. It's the best for a reason!"
    );
    const card4 = helperDom.crSection(
      apple4,
      "The green detox",
      "A doctor's biggest enemy"
    );
    card4.classList.add("reverse-section");
    const card5 = helperDom.crSection(
      apple5,
      `The "fill my mouth with your apples" platter`,
      "When you can't decide, let us choose for you from a fine assortment of all our excellent apples"
    );

    menu.append(card1, card2, card3, card4, card5, helperDom.crFooter());
    cont.appendChild(menu);
  };

  const aboutP = function () {
    closeMobileMenu();
    cont.innerHTML = "";
    const about = document.createElement("div");
    about.classList.add("about");

    const d1 = helperDom.crAboutCards(
      "Meet our founder the visionary Jerry Smith",
      creator
    );
    const d2 = helperDom.crAboutCards(
      "Winner of the Appley award",
      award
    );
    const d3 = helperDom.crAboutCards(
      "You can also buy our merch",
      merch
    );

    about.append(d1, d2, d3, helperDom.crFooter());

    cont.appendChild(about);
  };
  return { homeP, menuP, aboutP };
})();

const helperDom = (() => {
  const crAboutCards = function (h2Text, imgSrc) {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.textContent = h2Text;
    const img = document.createElement("img");
    img.setAttribute("src", imgSrc);

    div.append(h2, img);

    return div;
  };
  const crFooter = function () {
    const footer = document.createElement("footer");
    const p1 = document.createElement("p");
    p1.textContent =
      "Hungry for Apples - A taste of simplicity, just like Jerry's appetite for the ordinary!";
    const p2 = document.createElement("p");
    p2.textContent =
      "Serving up meals that even Jerry could appreciate... probably.";
    const p3 = document.createElement("p");
    p3.textContent =
      "Not affiliated with any multi-dimensional adventures... but we do serve the best apples in this dimension!";
    const p4 = document.createElement("p");
    p4.textContent =
      "© 2024 Hungry for Apples. All rights reserved... or whatever Jerry would say about that.";

    footer.append(p1, p2, p3, p4);
    return footer;
  };
  const crSection = function (imgName, h2Text, pText) {
    const sec = document.createElement("section");

    const d1 = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", imgName);

    const d2 = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.textContent = h2Text;
    const p = document.createElement("p");
    p.textContent = pText;

    d1.appendChild(img);
    d2.append(h2, p);
    sec.append(d1, d2);

    return sec;
  };
  return { crAboutCards, crFooter, crSection };
})();

function closeMobileMenu() {
  document.querySelector(".overlay").classList.remove("overlay-open");
}

const eventL = (() => {
  document.querySelectorAll(".js-home").forEach((btn) => {
    btn.addEventListener("click", ()=> {
      dom.homeP();
    })
  });
  document.querySelectorAll(".js-menu").forEach((btn) => {
    btn.addEventListener("click", ()=> {
      dom.menuP();
    })
  });
  document.querySelectorAll(".js-about").forEach((btn) => {
    btn.addEventListener("click", ()=> {
      dom.aboutP();
    })
  });
})()

svgMenu.addEventListener("click", () => {
  document.querySelector(".overlay").classList.toggle("overlay-open");
});

dom.homeP();
