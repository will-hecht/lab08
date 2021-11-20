var pictureArray = ["one.jpg","two.jpeg","three.jpg", "four.jpeg", "five.jpg"];
var pictureCount = 0;
var imgTag;

function moveBack() {
  imgTag = document.getElementById("myImg");
  if(pictureCount==0) {
    pictureCount=4;
  }
  else {
    pictureCount = pictureCount-1;
  }
  imgTag.src = pictureArray[pictureCount];
}

function moveForward() {
  imgTag = document.getElementById("myImg");
  if(pictureCount==4) {
    pictureCount=0;
  }
  else {
    pictureCount = pictureCount+1;
  }
  imgTag.src = pictureArray[pictureCount];
}
