
// toggle funktion för hide show surfbrädor
$('.content-button__toggle').click(function() {
	var text = $(this).text();

	$(this).toggleClass('open');

	if($(this).hasClass('open')) {
		$(this).text('Hide all');
	} else {
		$(this).text('Show all');
	}


	var x = document.getElementsByClassName("c-product__toggle");
	console.log(x);
	for (let index = 0; index < x.length; index++) {
		const element = x[index];
		if (x[index].style.display === "flex") {
			x[index].style.display = "none";
		}else{
			x[index].style.display = "flex";
		}
	}
});


// slide produkt fält
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function showSlides(n){
var i;
var slides = document.getElementsByClassName("c-product__slide");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";  
}

// header slider 

jQuery(document).ready(function ($) {
var slideCount = $('.c-rotate__slider ul li').length;
var slideWidth = $('.c-rotate__slider ul li').width();
var slideHeight = $('.c-rotate__slider ul li').height();
var sliderUlWidth = slideCount * slideWidth;

$('.c-rotate__slider').css({ width: slideWidth, height: slideHeight });

$('.c-rotate__slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

$('.c-rotate__slider ul li:last-child').prependTo('.c-rotate__slider ul');

function moveLeft() {
		$('.c-rotate__slider ul').animate({
				left: + slideWidth,
		}, 200, function () {
				$('.c-rotate__slider ul li:last-child').prependTo('.c-rotate__slider ul');
				$('.c-rotate__slider ul').css('left', '');
		});
};

function moveRight() {
		$('.c-rotate__slider ul').animate({
				left: - slideWidth,
				next: '.control_next',
		}, 200, function () {
				$('.c-rotate__slider ul li:first-child').appendTo('.c-rotate__slider ul');
				$('.c-rotate__slider ul').css('left', '');
		});
};

$('a.control_prev').click(function () {
		moveLeft();
		indexCount(false);
});

$('a.control_next').click(function () {
		moveRight();
		indexCount();
});

function indexCount(next) {
	var currentIndex = $('.numberText span');
	var parsedIndex = parseInt(currentIndex.html());
	if(next == false) {
		parsedIndex--;
	} else {
		parsedIndex++;
	}
	if(next != false && parsedIndex > slideCount){
		parsedIndex = 1;
	}
	if(next == false && parsedIndex < 1) {
		parsedIndex = slideCount;
	}
	currentIndex.html(parsedIndex);
}

var slide = '<p><span>' + 1 + '</span> / ' + slideCount + '</p>';
$('.numberText').html(slide);

});    