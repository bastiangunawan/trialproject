const test = document.querySelector('.chatsection__button');
const testWindow = document.querySelector('.chatsection__window');
const clsbtn = document.querySelector('.cls-btn')

test.addEventListener('click', () => {
    testWindow.classList.add('chatsection__window--active');
});

clsbtn.addEventListener('click', () => {
    testWindow.classList.remove('chatsection__window--active');
});