// Generated by CoffeeScript 1.11.1
(function() {
  $(document).ready(function() {
    return $(".homeFlowContainer").on("mouseenter mouseleave", function(evt) {
      if (evt.type === "mouseenter") {
        return $(this).find(".homeFlowImage").addClass("homeFlowImageHover");
      } else {
        return $(this).find(".homeFlowImage").removeClass("homeFlowImageHover");
      }
    });
  });

}).call(this);

//# sourceMappingURL=homePage.js.map
