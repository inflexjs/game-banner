let gif = document.querySelectorAll(".gif_game");
let block = document.querySelectorAll(".block");
let wotLogo = document.querySelectorAll(".wot_logo");
let block_btn = document.querySelectorAll(".block_btn");
let platform = document.querySelectorAll(".platform");

for (let i = 0;i < block.length; i++){

	block[i].addEventListener('mouseenter', () => {
		wotLogo[i].classList.add('wot_logo-active')
		gif[i].src = "warzone/warz.gif"
		block_btn[i].classList.add('block_btn-active')
		platform[i].classList.add('platform-active')
	});

	block[i].addEventListener('mouseleave', () => {
		wotLogo[i].classList.remove('wot_logo-active')
		gif[i].src = "warzone/warz.jpg"
		block_btn[i].classList.remove('block_btn-active')
		platform[i].classList.remove('platform-active')
	});

}
