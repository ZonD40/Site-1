const sideMenu = document.querySelector('.side-menu'),
	  hamburger = document.querySelector('.promo__icons-hamburger'),
	  sideMenuClose = document.querySelector('.side-menu__close'),
	  overlay = document.querySelector('.side-menu__overlay'),
	  sideMenuNavElement = document.querySelectorAll('.side-menu__element');

hamburger.addEventListener('click', () => toggleClass(sideMenu, 'side-menu_active'));
sideMenuClose.addEventListener('click', () => toggleClass(sideMenu, 'side-menu_active'));
overlay.addEventListener('click', () => toggleClass(sideMenu, 'side-menu_active'));
sideMenuNavElement.forEach((e) => {
	e.addEventListener('click', () => toggleClass(sideMenu, 'side-menu_active'));
});

function toggleClass(element, toggledClass) {
	element.classList.toggle(toggledClass);
}



const swiper = new Swiper('.swiper', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'custom',
		renderCustom: function(swiper, current, total) {
			return current < 10 ? `0${current}` : current;
		},
	},
});