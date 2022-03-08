//---UTILITY FUNCTIONS:
const getsInputData = (id) => document.getElementById(id).value.trim();
const clearsInputField = (id, val) => document.getElementById(id).value = val;
const setsInnerText = (id, txt) => document.getElementById(id).innerText = txt;
const setsAttribute = (id, att, val) => document.getElementById(id).setAttribute(att, val);
const addsClass = (id, className) => document.getElementById(id).classList.add(className);
const removesClass = (id, className) => document.getElementById(id).classList.remove(className);

const addsClassDisplayNone = (...id) => {
    for (x of id) document.getElementById(`${x}`).classList.add("d-none");
}

const removesClasDisplayNone = (...id) => {
    for (x of id) document.getElementById(`${x}`).classList.remove("d-none");
}

const addsClassMx_3 = (...id) => {
    for (x of id) document.getElementById(`${x}`).classList.add("mx-3");
}

const removesClassMx_3 = (...id) => {
    for (x of id) document.getElementById(`${x}`).classList.remove("mx-3");
}

const removesClassActive = (...id) => {
    for (x of id) document.getElementById(`${x}`).classList.remove("active");
}

//---HEADER BACKGROUND ANIMATION:
function headerBackgroundAnimation() {
    let currentScrollPosition = window.scrollY;

    (currentScrollPosition > 100) ? setsAttribute('page-top', "style", "background-color: #000; transition: 0.3s linear;") : setsAttribute('page-top', "style", "background-color: transparent;");
};

//---SUBSCRIBE FORM VALIDATOR:
function validatesSubscribeForm() {
    let inputData = getsInputData('sub-mail-input');
    let errorMessage = '';

    errorMessage += (inputData.length === 0) ? 'Email addres is required \n' : '';
    errorMessage += (inputData.length < 5 || inputData.indexOf('@', 2) < 0) ? 'Please insert a valid email addres' : '';

    if (errorMessage.length > 0) return setsInnerText('mail-error', errorMessage),
        setsAttribute('mail-error', "style", "margin-top: 8px; padding: 8px; background-color: #ccc; text-align: center; border-width: 2px; border-style: solid; border-color: red;");

    setsAttribute('mail-error', "style", "margin: 0; padding: 0; background-color: none; border-width: 0; border-style: none; border-color: none;");
    setsInnerText('mail-error', '');

    if (errorMessage.length === 0) clearsInputField('sub-mail-input', '');
};

//---PRTFOLIO NAVIGATION:
function displayesAllProjects() {
    addsClass('all-btn', "active");
    removesClass('portfolio-wrapper', "justify-content-center");

    removesClassActive('web-btn', 'logo-btn', 'wp-btn', 'ecom-btn')
    removesClasDisplayNone('web-item-1', 'web-item-2', 'logo-item-1', 'logo-item-2', 'wp-item-1', 'wp-item-2', 'ecom-item-1', 'ecom-item-2');
    removesClassMx_3('web-item-1', 'web-item-2', 'logo-item-1', 'logo-item-2', 'wp-item-1', 'wp-item-2', 'ecom-item-1', 'ecom-item-2');
}

function displayesWebProjects() {
    addsClass('web-btn', "active");
    addsClass('portfolio-wrapper', "justify-content-center");

    addsClassDisplayNone('logo-item-1', 'logo-item-2', 'wp-item-1', 'wp-item-2', 'ecom-item-1', 'ecom-item-2');
    addsClassMx_3('web-item-1', 'web-item-2');

    removesClassActive('all-btn', 'logo-btn', 'wp-btn', 'ecom-btn');
    removesClasDisplayNone('web-item-1', 'web-item-2');
}

function displayesLogoDesignProjects() {
    addsClass('logo-btn', "active");
    addsClass('portfolio-wrapper', "justify-content-center");

    addsClassDisplayNone('web-item-1', 'web-item-2', 'wp-item-1', 'wp-item-2', 'ecom-item-1', 'ecom-item-2');
    addsClassMx_3('logo-item-1', 'logo-item-2');
    removesClassActive('all-btn', 'web-btn', 'wp-btn', 'ecom-btn');
    removesClasDisplayNone('logo-item-1', 'logo-item-2');
}

function displayesWordpressProjects() {
    addsClass('wp-btn', "active");
    addsClass('portfolio-wrapper', "justify-content-center");

    addsClassDisplayNone('web-item-1', 'web-item-2', 'logo-item-1', 'logo-item-2', 'ecom-item-1', 'ecom-item-2');
    addsClassMx_3('wp-item-1', 'wp-item-2');

    removesClassActive('all-btn', 'web-btn', 'logo-btn', 'ecom-btn');
    removesClasDisplayNone('wp-item-1', 'wp-item-2');
}

function displayesEcommerceProjects() {
    addsClass('ecom-btn', "active");
    addsClass('portfolio-wrapper', "justify-content-center");

    addsClassDisplayNone('web-item-1', 'web-item-2', 'logo-item-1', 'logo-item-2', 'wp-item-1', 'wp-item-2');
    addsClassMx_3('ecom-item-1', 'ecom-item-2');

    removesClassActive('all-btn', 'web-btn', 'logo-btn', 'wp-btn');
    removesClasDisplayNone('ecom-item-1', 'ecom-item-2');
}

//---ABOUT SECTION ANIMATION:
const addsPositionClasses = () => {
    addsClass('about-img', "positionCenterFromLeft");
    addsClass('about-txt', "positionCenterFromRight");
}

const removesPositionClasses = () => {
    removesClass('about-img', "positionCenterFromLeft");
    removesClass('about-txt', "positionCenterFromRight");
}

function animatesAboutSection() {
    let screenSize = screen.width;
    let currentScrollPosition = window.scrollY;

    if (screenSize < 768) return;

    addsPositionClasses();
    if (currentScrollPosition > 900) {
        addsClass('about-img', "slideOutLeft");
        addsClass('about-txt', "slideOutRight");
    }
}


//---ONLOAD EVENTS:
document.addEventListener('load', () => displayesAllProjects());
window.addEventListener('load', () => headerBackgroundAnimation());
window.addEventListener('load', () => animatesAboutSection());
//window.addEventListener('resize', () => animatesAboutSection());


//---SCROLL EVENTS:
window.addEventListener('scroll', () => headerBackgroundAnimation());
window.addEventListener('scroll', () => animatesAboutSection());


//---CLICK EVENTS:
document.getElementById('all-btn').addEventListener('click', (e) => {
    e.preventDefault(), displayesAllProjects();
});
document.getElementById('web-btn').addEventListener('click', (e) => {
    e.preventDefault(), displayesWebProjects();
});
document.getElementById('logo-btn').addEventListener('click', (e) => {
    e.preventDefault(), displayesLogoDesignProjects();
});
document.getElementById('wp-btn').addEventListener('click', (e) => {
    e.preventDefault(), displayesWordpressProjects();
});
document.getElementById('ecom-btn').addEventListener('click', (e) => {
    e.preventDefault(), displayesEcommerceProjects();
});

document.getElementById('button-addon2').addEventListener('click', () => validatesSubscribeForm());