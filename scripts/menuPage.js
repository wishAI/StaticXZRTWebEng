// Generated by CoffeeScript 1.11.1
(function() {
  var setProperFlowNum, setupOptions;

  $(document).ready(function() {
    $(window).resize(function() {
      return setProperFlowNum();
    });
    setupOptions();
    return setProperFlowNum();
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

  setProperFlowNum = function() {
    var clientWidth, i, j, num, ref, results;
    clientWidth = $(document).width();
    if (clientWidth > 1100) {
      num = 3;
    } else if (clientWidth > 700) {
      num = 2;
    } else {
      num = 1;
    }
    $(".optionFlow").css("display", "none");
    results = [];
    for (i = j = 0, ref = num; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      results.push($(".optionFlow").eq(i).css("display", "block"));
    }
    return results;
  };

}).call(this);

//# sourceMappingURL=menuPage.js.map
