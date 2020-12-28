const URL = document.querySelector('.full-screen-preview__frame');
const button = document.createElement('a');
button.innerText = 'X';
button.className = 'header-close-now e-btn--3d -color-default';
button.href = URL.attributes.src.value;

document.querySelector('.preview__action--buy').appendChild(button);
