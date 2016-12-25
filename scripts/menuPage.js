// Generated by CoffeeScript 1.11.1
(function() {
  var setupOptions;

  $(document).ready(function() {
    return setupOptions();
  });

  setupOptions = function() {
    var blankOption, i, isWhite, j, ref, toAddAmount;
    toAddAmount = 10 - $(".option").length;
    if (toAddAmount > 0) {
      for (i = j = 0, ref = toAddAmount; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        blankOption = $("#modOption").clone();
        blankOption.removeAttr("id");
        blankOption.addClass("option");
        $(".optionList").append(blankOption);
      }
    }
    isWhite = false;
    return $(".option").each(function() {
      if (isWhite) {
        $(this).addClass("optionWhite");
      }
      isWhite = !isWhite;
    });
  };

}).call(this);

//# sourceMappingURL=menuPage.js.map