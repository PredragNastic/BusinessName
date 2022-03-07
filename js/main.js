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
    removesClasDisplayNone('web-item-1', 'web-item-2', 'logo-design-item-1', 'logo-design-item-2', 'wordpress-item-1', 'wordpress-item-2', 'e-commerce-item-1', 'e-commerce-item-2');
    removesClassMx_3('web-item-1', 'web-item-2', 'logo-design-item-1', 'logo-design-item-2', 'wordpress-item-1', 'wordpress-item-2', 'e-commerce-item-1', 'e-commerce-item-2');
    removesClass('portfolio-wrapper', "justify-content-center");
}

function displayesWebProjects() {
    addsClassDisplayNone('logo-design-item-1', 'logo-design-item-2', 'wordpress-item-1', 'wordpress-item-2', 'e-commerce-item-1', 'e-commerce-item-2');
    addsClass('portfolio-wrapper', "justify-content-center");
    addsClassMx_3('web-item-1', 'web-item-2');
    removesClasDisplayNone('web-item-1', 'web-item-2');
}

function displayesLogoDesignProjects() {
    addsClassDisplayNone('web-item-1', 'web-item-2', 'wordpress-item-1', 'wordpress-item-2', 'e-commerce-item-1', 'e-commerce-item-2');
    addsClass('portfolio-wrapper', "justify-content-center");
    addsClassMx_3('logo-design-item-1', 'logo-design-item-2');
    removesClasDisplayNone('logo-design-item-1', 'logo-design-item-2');
}

function displayesWordpressProjects() {
    addsClassDisplayNone('web-item-1', 'web-item-2', 'logo-design-item-1', 'logo-design-item-2', 'e-commerce-item-1', 'e-commerce-item-2');
    addsClass('portfolio-wrapper', "justify-content-center");
    addsClassMx_3('wordpress-item-1', 'wordpress-item-2');
    removesClasDisplayNone('wordpress-item-1', 'wordpress-item-2');
}

function displayesEcommerceProjects() {
    addsClassDisplayNone('web-item-1', 'web-item-2', 'logo-design-item-1', 'logo-design-item-2', 'wordpress-item-1', 'wordpress-item-2');
    addsClass('portfolio-wrapper', "justify-content-center");
    addsClassMx_3('e-commerce-item-1', 'e-commerce-item-2');
    removesClasDisplayNone('e-commerce-item-1', 'e-commerce-item-2');
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
