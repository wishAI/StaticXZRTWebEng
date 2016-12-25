
$(document).ready ->
  $(".homeFlowContainer").on "mouseenter mouseleave", (evt) ->
    if(evt.type=="mouseenter")
      $(this).find(".homeFlowImage").addClass("homeFlowImageHover")
    else
      $(this).find(".homeFlowImage").removeClass("homeFlowImageHover")

