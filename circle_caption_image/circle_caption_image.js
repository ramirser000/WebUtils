jQuery(document).ready(function() {
  squareDimensions(".circle-caption-image");


  /* circle-caption-image hover animations */

  //Interval timer animaation variables.
  var hoverBGAnimation = null;
  var hoverFontAnimation = null;
  var originalBGColor = null;
  var originalFontColor = null;

  //circle-image-1 hover animation.
  jQuery(".circle-caption-image").hover(function() {
    /* starting the initial hover animation*/
    originalBGColor = jQuery(this).children().css("background-color");
    originalFontColor = jQuery(this).children().css("color");

    /* CHANGE CIRCLE-CAPTION-IMAGE HOVER ANIMATION COLORS HERE! Argument values are in rgba format. */
    hoverBGAnimation = changeAllColors(this, "background-color", 255, 214, 0, 0.9, 0, 46, 109, 0.5, 500, true);
    hoverFontAnimation = changeAllColors(this, "color", 0, 49, 109, 1, 255, 214, 0, 1, 500, false);

  }, function() {
    /* Clearing all pending interval timers*/
    clearInterval(hoverFontAnimation);
    clearInterval(hoverBGAnimation);
    jQuery(this).children().css("background-color", originalBGColor);
    jQuery(this).children().css("color", originalFontColor);
    jQuery(this).css("border-color", originalBGColor);

  }); //end circle-caption-image hover animations.

  //Taking care of on resize events
  jQuery(window).resize(function() {
    squareDimensions(".circle-caption-image");
  });


});

//Change all colors inside the container over an animation timer(milliseconds).
//eg. changeAllColors(".caption-image", "background-color", 255, 214, 0, 0.9, 0, 0, 0, 0.5, 1000, false);
//The last arguement is whether or not the border of the container will also be affected.
function changeAllColors(container, style, startR, startG, startB, startA, endR, endG, endB, endA, timer, changeBorder) {
  var tick = 10; //milliseconds

  var curR = startR;
  var curG = startG;
  var curB = startB;
  var curA = startA;

  var animation = setInterval(function() {
    if (curR < endR) {
      curR += (endR - startR) / (timer / tick);
    } else if (curR > endR) {
      curR -= (startR - endR) / (timer / tick);
    }

    if (curG < endG) {
      curG += (endG - startG) / (timer / tick);
    } else if (curG > endG) {
      curG -= (startG - endG) / (timer / tick);
    }

    if (curB < endB) {
      curB += (endB - startB) / (timer / tick);
    } else if (curB > endB) {
      curB -= (startB - endB) / (timer / tick);
    }

    if (curA < endA) {
      curA += (endA - startA) / (timer / tick);
    } else if (curA > endA) {
      curA -= (startA - endA) / (timer / tick);
    }
    curColor = "rgba(" + Math.round(curR) + ", " + Math.round(curG) + "," + Math.round(curB) + "," + curA + ")";
    //  console.log(curColor);
    if (changeBorder) {
      jQuery(container).css("border-color", curColor);
    }
    jQuery(container).children().css(style, curColor);
  }, tick);

  setTimeout(function() {
    clearInterval(animation);
  }, timer);

  return animation;

}

//Keep an element's dimensions squared, depending on its height.
function squareDimensions(item) {
  var captionImageHeight = jQuery(item).height();
  jQuery(item).width(captionImageHeight);
}
