function changeStyle () {
  var redBorderTag = document.getElementById("redBorder");
  var greenBorderTag = document.getElementById("greenBorder");
  var blueBorderTag = document.getElementById("blueBorder");
  var redBackgroundTag = document.getElementById("redBackground");
  var greenBackgroundTag = document.getElementById("greenBackground");
  var blueBackgroundTag = document.getElementById("blueBackground");
  var borderWidthTag = document.getElementById("borderWidth");
  var paragraphTag = document.getElementById("p1");
  paragraphTag.style.backgroundColor = "#" + redBackgroundTag.value + greenBackgroundTag.value + blueBackgroundTag.value;
  paragraphTag.style.borderColor = "#" + redBorderTag.value + greenBorderTag.value + blueBorderTag.value;
  paragraphTag.style.borderWidth = borderWidthTag.value + "px";
}
