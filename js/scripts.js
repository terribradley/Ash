$(document).ready(function() {
  var $win = $(window);
  $win.on('scroll', function() {
    var top = $win.scrollTop() * 2;
     $('.one').css('transform', 'translateX(' + -top + 'px)');
     $('.two').css('transform', 'translateY(' + top + 'px)');
     $('.three').css('transform', 'translateY(' + -top + 'px)');
     $('.four').css('transform', 'translateX(' + top + 'px)');
     $('.pillar-top').css('transform', 'translateY(' + - top + 'px)');
     $('.pillar-bottom').css('transform', 'translateY(' + top + 'px)');
   });
});










    // event.preventDefault();
    // var controller = new ScrollMagic.Controller();
    //
    // // var tween =TweenMax.to(".one", 5, {left:-100});
    // // var tween2 = TweenMax.to(".two", 5, {top:1000});
    // // var tween3 = TweenMax.to(".three", 5, {top:-300});
    // // var tween4 = TweenMax.to(".four", 5, {left:1000});
    // 	// build scene
    // var scene = new ScrollMagic.Scene({
    //   triggerElement: "#trigger1"
    //   })
    // 	.setClassToggle(".one", ".move")
    //   .addIndicators({
    //     name:'move terri',
    //     colorTrigger: 'black'
    //   })
    // 	.addTo(controller);
