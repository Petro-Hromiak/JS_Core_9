// Task 1

const downScroll = document.querySelector('.down');
const upScroll = document.querySelector('.up');
const leftScroll = document.querySelector(`.left`);
const rightScroll = document.querySelector(`.right`);
const leftLine = document.querySelector(`.line`);

function myScroll() {
    const initFontSize = 28;

    if (window.scrollY <= 500) {
        downScroll.style.fontSize = initFontSize + (window.scrollY / 10) + `px`;
    }

    if (window.scrollY > 200 && window.scrollY <= 1100) {
        leftScroll.style.marginLeft = `${window.scrollY / 10}px`
        leftLine.style.marginLeft = `${window.scrollY / 10}px`
        leftLine.style.width = `${window.scrollY / 2}px`;
        rightScroll.style.right = (window.scrollY / 5) + `px`;
    }

    let initFontSizeUP = 90;

    if (window.scrollY > 1000 && window.scrollY < 1400) {
        upScroll.style.fontSize = initFontSizeUP - (window.scrollY / 22.5) + `px`;
    }
}

downScroll.addEventListener('click', () => window.scrollTo({
    top: 700,
    behavior: 'smooth',
}));
upScroll.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
}));

window.addEventListener('scroll', myScroll)

