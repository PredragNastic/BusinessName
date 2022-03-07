//---UTILITY FUNCTIONS:
const getsInputData = (id) => document.getElementById(id).value.trim();
const setsAttribute = (id, att, val) => document.getElementById(id).setAttribute(att, val);
const setsInnerText = (id, txt) => document.getElementById(id).innerText = txt;
const clearsInputField = (id, val) => document.getElementById(id).value = val;

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

//---HEADER BACKGROUND ANIMATION:
function headerBackgroundAnimation() {
    let currentScrollPosition = window.scrollY;

    (currentScrollPosition > 100) ? setsAttribute('page-top', "style", "background-color: #000; transition: 0.3s linear;")
        : setsAttribute('page-top', "style", "background-color: transparent;");
};

//---EVENTS:
window.addEventListener('scroll', () => headerBackgroundAnimation());
window.addEventListener('load', () => headerBackgroundAnimation());
document.getElementById('button-addon2').addEventListener('click', () => validatesSubscribeForm());