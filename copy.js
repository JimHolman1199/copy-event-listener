
(function() {
  document.addEventListener("copy", function() {
    var copiedText = window
        .getSelection()
        .toString()
        .substring(0, 100),
      emailRegex = /[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+/gi,
      phoneRegex = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/gi,
      result;

    var copiedTextArr = copiedText.split(" ");

    for (var i = 0; i < copiedTextArr.length; i++) {
      if (copiedTextArr[i].match(emailRegex)) {
        copiedTextArr[i] = "@Email Here@";
      }
      if (copiedTextArr[i].match(phoneRegex)) {
        copiedTextArr[i] = "@Phone number here@";
      }
    }
    result = copiedTextArr.join(" ");

    dataLayer.push({
      event: "GAevent",
      eventCategory: "Copy text",
      eventAction: result,
      "non-Interaction-hit": false
    });
  });
})();
