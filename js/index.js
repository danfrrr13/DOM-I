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

// Task 1 & 2

let navItems = document.querySelectorAll('a');
navItems.forEach((item, index) => item.textContent = siteContent['nav'][`nav-item-${index + 1}`]);

let ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

let ctaImage = document.querySelector('.cta img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);



let contentH4 = document.querySelectorAll('.text-content h4');
contentH4[0].textContent = siteContent['main-content']['features-h4'];
contentH4[1].textContent = siteContent['main-content']['about-h4'];
contentH4[2].textContent = siteContent['main-content']['services-h4'];
contentH4[3].textContent = siteContent['main-content']['product-h4'];
contentH4[4].textContent = siteContent['main-content']['vision-h4'];

let contentP = document.querySelectorAll('.text-content p');
contentP[0].textContent = siteContent['main-content']['features-content'];
contentP[1].textContent = siteContent['main-content']['about-content'];
contentP[2].textContent = siteContent['main-content']['services-content'];
contentP[3].textContent = siteContent['main-content']['product-content'];
contentP[4].textContent = siteContent['main-content']['vision-content'];

let middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

let contactPs = document.querySelectorAll('.contact p');
contactPs[0].textContent = siteContent.contact.address;
contactPs[1].textContent = siteContent.contact.phone;
contactPs[2].textContent = siteContent.contact.email;

let footerP = document.querySelector('footer p');
footerP.textContent = siteContent.footer.copyright;

// Task 3

navItems.forEach(item => item.style.color = 'green');


let nav = document.querySelector('nav');

let link1 = document.createElement('a');
let link2 = document.createElement('a');
link1.textContent = 'Link1';
link2.textContent = 'Link2';

nav.prepend(link1);
nav.append(link2);

link1.setAttribute('href', '#');
link2.setAttribute('href', '#');
link1.style.color = 'green';
link2.style.color = 'green';

// Stretch

let navItemsAll = document.querySelectorAll('a');

navItemsAll.forEach(item => item.style.textDecoration = 'line-through')