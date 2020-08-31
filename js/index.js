const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navElement = document.querySelector('nav')
let navAnchorFirst = navElement.querySelector('a')
let link1Nav = navAnchorFirst.nextElementSibling
let link2Nav = link1Nav.nextElementSibling
let link3Nav = link2Nav.nextElementSibling
let link4Nav = link3Nav.nextElementSibling
let link5Nav = link4Nav.nextElementSibling

navAnchorFirst.textContent = "Services"
link1Nav.textContent = "Product"
link2Nav.textContent = "Vision"
link3Nav.textContent = "Features"
link4Nav.textContent = "About"
link5Nav.textContent = "Contact"

let ctaClass = document.querySelector('.cta-text')
let ctaHead = ctaClass.querySelector('h1')
let ctaButton = ctaClass.querySelector('button')

ctaHead.textContent = "DOM Is Awesome"
ctaButton.textContent = "Get Started"

let snipImg = document.getElementById("cta-img")
snipImg.setAttribute('src', "img/header-img.png")

let topContent = document.querySelector(".top-content")
let topText = topContent.querySelector(".text-content")
let topHeader = topText.querySelector("h4")
let topHeaderChild = topHeader.nextElementSibling

let topText2 = topText.nextElementSibling
let topHeader2 = topText2.querySelector("h4")
let topHeaderChild2 = topHeader2.nextElementSibling


topHeader.textContent = "Features"
topHeaderChild.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis."

topHeader2.textContent = "About"
topHeaderChild2.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis."

let middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', "img/mid-page-accent.jpg")