let gif = document.querySelector(".gif_game");
let block = document.querySelector(".block");
let wotLogo = document.querySelector(".wot_logo");
let block_btn = document.querySelector(".block_btn");
let platform = document.querySelector(".platform");

block.addEventListener('mouseenter', () => {
	wotLogo.classList.add('wot_logo-active')
	gif.src = "warzone/warz.gif"
	block_btn.classList.add('block_btn-active')
	platform.classList.add('platform-active')
});

block.addEventListener('mouseleave', () => {
	wotLogo.classList.remove('wot_logo-active')
	gif.src = "warzone/warz.jpg"
	block_btn.classList.remove('block_btn-active')
	platform.classList.remove('platform-active')
});
