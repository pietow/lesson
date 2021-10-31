// closest header element to an h1s
let heading = document.querySelector("h1");
let header = heading.closest("header");
header.style.borderBottom = "5px solid grey";

// matches classes
let labels = document.querySelectorAll(`.info label`);
labels.forEach(label => {
    if (label.matches(".mild")) {
        label.style.borderBottom = "2px solid yellow";
    } else if (label.matches(".intense")) {
        label.style.borderBottom = "2px solid orange";
    } else {
        label.style.borderBottom = "2px solid red";
    }
})

//selecting previous element sibling of paragraph element if its parent exists
const infoSection = document.querySelector(".info");
const packages = document.querySelector(".info-package");
const packageTitles = document.querySelectorAll(".package-title");

if (infoSection.contains(packages)) {
    packageTitles.forEach(title => {
        title.previousElementSibling.style.border = "2px solid #072F5F";
    })
}

// get links of nav and place them in footer
const navList = document.querySelector(".nav-list");
const siteMap = document.querySelector(".site-map");
const listItems = navList.children;

for (let i = 0; i < listItems.length; i++) {
    const item = document.createElement("li");
    item.innerText = listItems[i].innerText;
    siteMap.appendChild(item);
}
