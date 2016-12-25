changeViewOfFooterByWinSize = ->
# change footer to relative first to avoid document + footer > window
  $("footer").removeClass("footerFix")
  if($(window).height() == $(document).height())
    $("footer").addClass("footerFix")
  else
    $("footer").removeClass("footerFix")

$(document).ready ->
  changeViewOfFooterByWinSize()
  $(window).resize ->
    changeViewOfFooterByWinSize()