//---UTILITY FUNCTIONS:
const getsInputData = (id) => document.getElementById(id).value.trim();
const clearsInputField = (id, val) => document.getElementById(id).value = val;
const setsInnerText = (id, txt) => document.getElementById(id).innerText = txt;
const setsAttribute = (id, att, val) => document.getElementById(id).setAttribute(att, val);
const addsClass = (id, className) => document.getElementById(id).classList.add(className);
const removesClass = (id, className) => document.getElementById(id).classList.remove(className);

//---HEADER BACKGROUND ANIMATION:
function headerBackgroundAnimation() {
    let currentScrollPosition = window.scrollY;

    (currentScrollPosition > 100) ? setsAttribute('page-top', "style", "background-color: #000; transition: 0.3s linear;")
        : setsAttribute('page-top', "style", "background-color: transparent;");
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
    removesClass('web-item-1', "d-none"), removesClass('web-item-2', "d-none"), removesClass('web-item-1', "mx-3"), removesClass('web-item-2', "mx-3");
    removesClass('wordpress-item-1', "d-none"), removesClass('wordpress-item-2', "d-none"), removesClass('wordpress-item-1', "mx-3"), removesClass('wordpress-item-2', "mx-3");
    removesClass('logo-design-item-1', "d-none"), removesClass('logo-design-item-2', "d-none"), removesClass('logo-design-item-1', "mx-3"), removesClass('logo-design-item-2', "mx-3");
    removesClass('e-commerce-item-1', "d-none"), removesClass('e-commerce-item-2', "d-none"), removesClass('e-commerce-item-1', "mx-3"), removesClass('e-commerce-item-2', "mx-3");
}

function displayesWebProjects() {
    addsClass('wordpress-item-1', "d-none"), addsClass('wordpress-item-2', "d-none");
    addsClass('logo-design-item-1', "d-none"), addsClass('logo-design-item-2', "d-none");
    addsClass('e-commerce-item-1', "d-none"), addsClass('e-commerce-item-2', "d-none");

    addsClass('portfolio-wrapper', "justify-content-center");
    removesClass('web-item-1', "d-none"), removesClass('web-item-2', "d-none"), addsClass('web-item-1', "mx-3"), addsClass('web-item-2', "mx-3");
}

function displayesLogoDesignProjects() {
    addsClass('web-item-1', "d-none"), addsClass('web-item-2', "d-none");
    addsClass('wordpress-item-1', "d-none"), addsClass('wordpress-item-2', "d-none");
    addsClass('e-commerce-item-1', "d-none"), addsClass('e-commerce-item-2', "d-none");

    addsClass('portfolio-wrapper', "justify-content-center");
    removesClass('logo-design-item-1', "d-none"), removesClass('logo-design-item-2', "d-none"), addsClass('logo-design-item-1', "mx-3"), addsClass('logo-design-item-2', "mx-3");
}

function displayesWordpressProjects() {
    addsClass('web-item-1', "d-none"), addsClass('web-item-2', "d-none");
    addsClass('logo-design-item-1', "d-none"), addsClass('logo-design-item-2', "d-none");
    addsClass('e-commerce-item-1', "d-none"), addsClass('e-commerce-item-2', "d-none");

    addsClass('portfolio-wrapper', "justify-content-center");
    removesClass('wordpress-item-1', "d-none"), removesClass('wordpress-item-2', "d-none"), addsClass('wordpress-item-1', "mx-3"), addsClass('wordpress-item-2', "mx-3");
}

function displayesEcommerceProjects() {
    addsClass('web-item-1', "d-none"), addsClass('web-item-2', "d-none");
    addsClass('logo-design-item-1', "d-none"), addsClass('logo-design-item-2', "d-none");
    addsClass('wordpress-item-1', "d-none"), addsClass('wordpress-item-2', "d-none");

    addsClass('portfolio-wrapper', "justify-content-center");
    removesClass('e-commerce-item-1', "d-none"), removesClass('e-commerce-item-2', "d-none"), addsClass('e-commerce-item-1', "mx-3"), addsClass('e-commerce-item-2', "mx-3");
}

//---EVENTS:
//--Onaload:
window.addEventListener('load', () => headerBackgroundAnimation());
document.addEventListener('load', () => displayesAllProjects());

//--Scroll:
window.addEventListener('scroll', () => headerBackgroundAnimation());

//--Clicks:
document.getElementById('all-btn').addEventListener('click', (e) => {
    e.preventDefault();
    displayesAllProjects();
});
document.getElementById('web-btn').addEventListener('click', (e) => {
    e.preventDefault();
    displayesWebProjects();
});
document.getElementById('logo-btn').addEventListener('click', (e) => {
    e.preventDefault();
    displayesLogoDesignProjects();
});
document.getElementById('wp-btn').addEventListener('click', (e) => {
    e.preventDefault();
    displayesWordpressProjects();
});
document.getElementById('ecom-btn').addEventListener('click', (e) => {
    e.preventDefault();
    displayesEcommerceProjects();
});

document.getElementById('button-addon2').addEventListener('click', () => validatesSubscribeForm());
