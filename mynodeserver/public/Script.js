// This function will change the class which have different properties , when we click on the icon when the screen size is small

function navigationOpen() {
  var navigateFrom = document.getElementById("myNavigation");
  if (navigateFrom.className === "navbar") {
    navigateFrom.className += " responsive";
  } else {
    navigateFrom.className = "navbar";
  }
}