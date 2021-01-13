/* istanbul ignore file */
const initNaturalLanguageForm = (formObj) => {
  // show and hide styled inputs, update natural language statement
  $(".input-container").click(function () {
    var target = $(this);
    var targetInput = $(this).find("input");
    var targetSelect = $(this).find("select");
    var styledSelect = $(this).find(".newSelect");
    target.addClass("active");
    targetInput.focus();
    targetInput.change(function () {
      var inputValue = $(this).val();
      var placeholder = target.find(".placeholder");
      target.removeClass("active");
      placeholder.html(inputValue);
    });
    targetSelect.change(function () {
      var inputValue = $(this).val();
      var placeholder = target.find(".placeholder");
      target.removeClass("active");
      placeholder.html(inputValue);
    });
    styledSelect.click(function () {
      var target = $(this);
      setTimeout(function () {
        target.parent().parent().removeClass("active");
      }, 10);
    });
  });

  // style selects

  // Create the new select
  var select = $(".fancy-select");
  select.wrap('<div class="newSelect"></div>');
  $(".newSelect").prepend('<div class="newOptions"></div>');

  //populate the new select
  select.each(function () {
    var selectOption = $(this).find("option");
    var target = $(this).parent().find(".newOptions");
    selectOption.each(function () {
      var optionContents = $(this).html();
      var optionValue = $(this).attr("value");
      target.append(
        '<div class="newOption" data-value="' +
          optionValue +
          '">' +
          optionContents +
          "</div>"
      );
    });
  });
  // new select functionality
  var newSelect = $(".newSelect");
  var newOption = $(".newOption");
  // update based on selection
  newOption.on("mouseup", function () {
    var OptionInUse = $(this);
    var siblingOptions = $(this).parent().find(".newOption");
    var newValue = $(this).attr("data-value");
    var selectOption = $(this).parent().parent().find("select option");
    var category = $(this).parent().parent().parent().parent()[0].id;
    // style selected option
    siblingOptions.removeClass("selected");
    OptionInUse.addClass("selected");
    // update form object
    let prevInd;
    if (category === 'soundtrack') prevInd = formObj.tracks.indexOf(formObj.soundtrack);

    eval(`formObj.${category} = '${newValue}'`);

    // Special case for when the soundtrack is changed, THIS SHOULD BE AN API
    if (category === 'soundtrack') {
      var playPreviousTrackButton = $("#play-previous");
      var playNextTrackButton = $("#play-next");
      var playPauseButton = $("#play-pause-button");
      const newInd = formObj.tracks.indexOf(newValue);
      let diff = newInd - prevInd;

      if (diff > 0) {
        while (diff !== 0) {
          playNextTrackButton.click();
          diff--;
        }
      } else if (diff < 0) {
        while (diff !== 0) {
          playPreviousTrackButton.click();
          diff++;
        }
      } else {
        playPauseButton.click();
      }
    }
    // update the actual input
    selectOption.each(function () {
      var optionValue = $(this).attr("value");
      if (newValue == optionValue) {
        $(this).prop("selected", true);
      } else {
        $(this).prop("selected", false);
      }
    });
  });
  newSelect.click(function () {
    var target = $(this);
    target.parent().find("select").change();
  });
};

export { initNaturalLanguageForm }
