$('.first__slider').slick({
	vertical: true,
	verticalSwiping: true,
	slidesToShow: 1,
	dots: true,
	infinite: false, // чтобы сработал класс .slick-disabled
	prevArrow: '<svg class="arrow prev-arrow" width = "38" height = "63" viewBox = "0 0 38 63" fill = "none" xmlns = "http://www.w3.org/2000/svg" ><path d="M20.7678 1.23223C19.7915 0.25592 18.2085 0.25592 17.2322 1.23223L1.32233 17.1421C0.34602 18.1184 0.34602 19.7014 1.32233 20.6777C2.29864 21.654 3.88155 21.654 4.85786 20.6777L19 6.53553L33.1421 20.6777C34.1184 21.654 35.7014 21.654 36.6777 20.6777C37.654 19.7014 37.654 18.1184 36.6777 17.1421L20.7678 1.23223ZM21.5 63L21.5 3H16.5L16.5 63H21.5Z" fill="#FAA525"/></>',
	nextArrow: '<svg class="arrow next-arrow" width="38" height="63" viewBox="0 0 38 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2322 61.7678C18.2085 62.7441 19.7915 62.7441 20.7678 61.7678L36.6777 45.8579C37.654 44.8816 37.654 43.2986 36.6777 42.3223C35.7014 41.346 34.1184 41.346 33.1421 42.3223L19 56.4645L4.85786 42.3223C3.88155 41.346 2.29864 41.346 1.32233 42.3223C0.34602 43.2986 0.34602 44.8816 1.32233 45.8579L17.2322 61.7678ZM16.5 0L16.5 60H21.5L21.5 0L16.5 0Z" fill="#FAA525"/></svg>',
});

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const header = document.querySelector('.header');
const allMenuLinks = document.querySelectorAll('.menu__link');

menuBtn.addEventListener('click', function () {
	menuList.classList.toggle('menu__list--active');
	menuBtn.classList.toggle('menu__btn--active');
	document.querySelector('body').classList.toggle('no-scroll');
	// для подложки
	header.classList.toggle('header--menu-active');
});

// Как вырубить меню (и вернуть скролл) после нажатия на один из пунктов этого меню
allMenuLinks.forEach((link) => {
	link.addEventListener('click', function () {
		menuList.classList.remove('menu__list--active');
		menuBtn.classList.remove('menu__btn--active');
		document.querySelector('body').classList.remove('no-scroll');
		// для подложки
		header.classList.remove('header--menu-active');
	});
});

$('.shop-slider__slider').slick({
	slidesToShow: 1, // если указать 6 и выше, то последний слайд(ы) не будет полностью показываться
	dots: false,
	infinite: false, // чтобы сработал класс .slick-disabled
	//centerMode: true,
	variableWidth: true,
	prevArrow: '<svg class="arrow prev-arrow" width="60" height="60" viewBox="0 0 60 60" fill="#FAA525" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="28" transform="rotate(-90 30 30)" stroke="#FAA525" stroke-width="4"/><path d="M16.5858 28.5858C15.8047 29.3668 15.8047 30.6332 16.5858 31.4142L29.3137 44.1421C30.0948 44.9232 31.3611 44.9232 32.1421 44.1421C32.9232 43.3611 32.9232 42.0948 32.1421 41.3137L20.8284 30L32.1421 18.6863C32.9232 17.9052 32.9232 16.6389 32.1421 15.8579C31.3611 15.0768 30.0948 15.0768 29.3137 15.8579L16.5858 28.5858ZM43 28L18 28L18 32L43 32L43 28Z" fill="#23252C"/></svg>',
	nextArrow: '<svg class="arrow next-arrow" width="60" height="60" viewBox="0 0 60 60" fill="#FAA525" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="28" transform="rotate(90 30 30)" stroke="#FAA525" stroke-width="4"/><path d="M43.4142 31.4142C44.1953 30.6332 44.1953 29.3668 43.4142 28.5858L30.6863 15.8579C29.9052 15.0768 28.6389 15.0768 27.8579 15.8579C27.0768 16.6389 27.0768 17.9052 27.8579 18.6863L39.1716 30L27.8579 41.3137C27.0768 42.0948 27.0768 43.3611 27.8579 44.1421C28.6389 44.9232 29.9052 44.9232 30.6863 44.1421L43.4142 31.4142ZM17 32L42 32L42 28L17 28L17 32Z" fill="#23252C"/></svg>',
});

Fancybox.bind("[data-fancybox]", {
	// Your options go here
});

$('.clients__slider').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: true,
	infinite: false, // чтобы сработал класс .slick-disabled
	prevArrow: '<svg class="arrow prev-arrow" width="63" height="38" viewBox="0 0 63 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.23223 17.2322C0.25592 18.2085 0.25592 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.34602 18.1184 0.34602 17.1421 1.32233L1.23223 17.2322ZM63 16.5L3 16.5V21.5L63 21.5V16.5Z" fill="#FAA525"/></svg>',
	nextArrow: '<svg class="arrow next-arrow" width="63" height="38" viewBox="0 0 63 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M61.7678 20.7678C62.7441 19.7915 62.7441 18.2085 61.7678 17.2322L45.8579 1.32233C44.8816 0.346016 43.2986 0.346016 42.3223 1.32233C41.346 2.29864 41.346 3.88155 42.3223 4.85786L56.4645 19L42.3223 33.1421C41.346 34.1184 41.346 35.7014 42.3223 36.6777C43.2986 37.654 44.8816 37.654 45.8579 36.6777L61.7678 20.7678ZM2.18557e-07 21.5L60 21.5L60 16.5L-2.18557e-07 16.5L2.18557e-07 21.5Z" fill="#FAA525"/></svg>',
	responsive: [
		{
			breakpoint: 1025,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 1,
				arrows: false,
			}
		},
	],
});