const hamburger = document.querySelector('.hamburger'),
	  menu = document.querySelector('.menu'),
	  closeElem = document.querySelector('.menu__close'),
	  linkElem = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

linkElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
	  lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
	lines[i].style.width = item.innerHTML;
});


// const sidePanelLink = document.querySelectorAll('.sidepanel__link'),
// 	  sidePanelDivider = document.querySelector('.sidepanel__divider'),
// 	  sidePanelText = document.querySelector('.sidepanel__text'),
// 	  initialHeight = document.documentElement.scrollTop + 560,
// 	  heightToChange = document.documentElement.scrollHeight - 450,
// 	  sidePanel = document.querySelector('.sidepanel');

// sidePanel.addEventListener('scroll', function() {
// 	if (Math.abs(document.documentElement.scrollTop - initialHeight) >= heightToChange) {
// 		sidePanelLink.classList.add('sidepanel__link-black');
// 		sidePanelDivider.classList.add('sidepanel__divider-black');
// 		sidePanelText.classList.add('sidepanel__text-black');
// 	}
// });