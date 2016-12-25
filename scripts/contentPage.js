// Generated by CoffeeScript 1.11.1
(function() {
  var Color, changeViewByScrolling, isScrolling, onScroll;

  isScrolling = false;

  Color = (function() {
    function Color(R, G, B) {
      this.R = R;
      this.G = G;
      this.B = B;
    }

    Color.prototype.toString = function() {
      return "#" + this.R.toString(16) + this.G.toString(16) + this.B.toString(16);
    };

    Color.prototype.getMixedColor = function(clr, dst) {
      if (dst > 1 || dst < 0) {
        return;
      }
      return new Color(Math.round(this.R * (1 - dst) + clr.R * dst), Math.round(this.G * (1 - dst) + clr.G * dst), Math.round(this.B * (1 - dst) + clr.B * dst));
    };

    return Color;

  })();

  onScroll = function() {
    if (!isScrolling) {
      return requestAnimationFrame(changeViewByScrolling);
    }
  };

  changeViewByScrolling = function() {
    var clrMain, clrNav, clrText, clrWhite, footerHeight, headGalleryHeight, movingSpeed, targetGalleryTrans, targetfooterTrans;
    movingSpeed = 3;
    footerHeight = 150;
    headGalleryHeight = 470;
    clrMain = new Color(82, 179, 255);
    clrNav = new Color(238, 238, 238);
    clrText = new Color(79, 79, 79);
    clrWhite = new Color(255, 255, 255);
    if ($(window).scrollTop() + $(window).height() + 200 > $(document).height() - footerHeight * movingSpeed && $(document).height() > $(window).height()) {
      targetfooterTrans = Math.floor((footerHeight * movingSpeed - ($(document).height() - ($(window).scrollTop() + $(window).height()))) / movingSpeed);
      $("footer").css("transform", "translateY(" + (-targetfooterTrans) + "px");
    } else if ($("footer").css("transform") !== "translateY(0px)") {
      $("footer").css("transform", "translateY(0px)");
    }
    if ($(window).scrollTop() < headGalleryHeight * movingSpeed + 200) {
      targetGalleryTrans = -$(window).scrollTop() / movingSpeed;
      $("#headGalleryContainer").css("transform", "translateY(" + targetGalleryTrans + "px");
    } else if ($("#headGalleryContainer").css("transform") !== "translateY(-500px)") {
      $("#headGalleryContainer").css("transform", "translateY(-500px)");
    }

    /*
    if($(window).scrollTop() > 900 && isScrolledDown == false)
      $("nav").css("background-color", clrMain.toString())
      $("nav a, nav span").css("color", clrWhite.toString())
      #$("#headGallery").css("opacity", 0)
      isScrolledDown = true
    else if($(window).scrollTop() <= 900 && isScrolledDown == true)
      $("nav").css("background-color", clrNav.toString())
      $("nav a, nav span").css("color", clrText.toString())
      #$("#headGallery").css("opacity", 1)
      isScrolledDown = false
     */
    return isScrolling = false;
  };


  /*
  if(!isGalleryMoving)
    currentGalleryTrans = currentGalleryTrans
    isGalleryMoving = true
    movingInterval = setInterval ->
      targetGalleryTrans = targetGalleryTrans
      if(targetGalleryTrans == currentGalleryTrans)
        isGalleryMoving = false
        clearInterval(movingInterval)
      else if(Math.abs(targetGalleryTrans - currentGalleryTrans) < minMovingLength)
        currentGalleryTrans = targetGalleryTrans
      else if(currentGalleryTrans > targetGalleryTrans)
        currentGalleryTrans -= minMovingLength
      else if(currentGalleryTrans < targetGalleryTrans)
        currentGalleryTrans += minMovingLength
      $("#headGalleryContainer").css("top", currentGalleryTrans)
    , 2
   */

  $(document).ready(function() {
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    return $("#btnPrint").on("click", function() {
      return window.print();
    });
  });

}).call(this);

//# sourceMappingURL=contentPage.js.map
