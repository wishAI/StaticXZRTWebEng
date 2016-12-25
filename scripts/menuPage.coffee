$(document).ready ->
  setupOptions()

setupOptions = ->
# if the options are not enough, increase it to 10
  toAddAmount = 10 - $(".option").length
  if(toAddAmount > 0)
    for i in [0...toAddAmount]
      blankOption = $("#modOption").clone()
      blankOption.removeAttr("id")
      blankOption.addClass("option")
      $(".optionList").append(blankOption)
  # make the options dashed
  isWhite = false
  $(".option").each ->
    if(isWhite)
      $(this).addClass("optionWhite")
    isWhite = !isWhite
    return
