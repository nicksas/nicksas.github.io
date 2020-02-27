/* ---------------------------------------------Rubber Animation----------------------------- */
$(function () {
  $(".rubber").mouseenter(function (event) {
    $(this).addClass("animated rubberBand");
  });

  setTimeout(function () {
    $(".rubber").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function (event) {
      $(this).removeClass("animated rubberBand");
    });
  }, 1000)
});

/* ========================== */


window.onload = function () {
  try {
    TagCanvas.Start('myCanvas', 'tags');

  } catch (e) {
    // something went wrong, hide the canvas container
    document.getElementById('myCanvasContainer').style.display = 'none';
  }
};
$(document).ready(function () {
  if (!$('#myCanvas').tagcanvas({
      textColour: '#ffffff',
      outlineThickness: 0.5,
      outlineColour: '#ffffff',
      maxSpeed: 0.06,
      freezeActive: true,
      shuffleTags: true,
      shape: 'sphere',
      zoom: 0.9,
      noSelect: true,
      textFont: null,
      pinchZoom: true,
      freezeDecel: true,
      fadeIn: 3000,
      initial: [0.3, -0.1],
      depth: 1.4
    })) {
    // TagCanvas failed to load
    $('#myCanvasContainer').hide();
  }
  // your other jQuery stuff here...
});

/* -------------------------------------------SVG------------------------------------------ */
var $svgSymbol = $('#svgSymbol').drawsvg({
  duration: 5500,
  easing: 'linear'
});
setTimeout(() => {
  $svgSymbol.drawsvg('animate');
}, 1600);
/* -------------------------------------------LetterOpacity------------------------------------------ */
var letterN = document.querySelector('#imgLetterMain')

function letterInterval() {
  letterN.classList.remove('imgLetterMain');
  letterN.classList.add('imgLetterMainOpacity');
};
setTimeout(() => {
  letterInterval();
}, 4500);
/* -------------------------------------------------preloader----------------------------------*/
window.setTimeout(function () {
  document.body.classList.add('loaded');
  document.body.classList.add('loaded_hiding');
  document.body.classList.remove('loaded_hiding');
}, 1500);

$('#progressbar1').LineProgressbar({
  duration: 1500,
  ShowProgressCount: false,
  backgroundColor: '#198ada80',
  fillBackgroundColor: '#198ada',
  radius: '5px',
  height: '3px',
  width: '35%'

});
var cont = document.querySelector('.container');
var linkList = document.querySelectorAll('.nav-link');
for (var i = 0; i < linkList.length; i++) {

  linkList[i].addEventListener('click', function () {
    cont.classList.add('containerAnimation');

    setTimeout(() => {
      window.ready = function () {
      }
    }, 500);

  });
}

$(".colorbox").colorbox({
  maxWidth: "70%",
  maxHeight: "250%",
  transition: 'fade',
  scrolling: true,
  onOpen: function () {
      $(".magicwall").magicWall("stop");
  },
  onClosed: function () {
      $(".magicwall").magicWall("start");
  }
});


