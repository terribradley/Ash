var container = document.getElementById('header');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = windowHeight;
var one = document.getElementsByClassName('one');
var two = document.getElementsByClassName('two');

// update position of square 1 and square 2 when scroll event fires.
window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 0;

  one.style.left = scrollPercent*window.innerWidth + 'px';
  two.style.left = 800 - scrollPercent*window.innerWidth*0.6 + 'px';
});
