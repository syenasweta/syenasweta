var submitskin = document.getElementById('submitskin');
var light_dark = document.getElementById('light-dark');
var light = document.getElementById('light');
var dark = document.getElementById('dark');
var url = q2o(window.location.search);
if (window.location.search) {
    var skin = url.skin;
    if (skin == "light dark") {
      light_dark.checked = true;
    } else if (skin == "light") {
      light.checked = true;
    } else if (skin == "dark") {
      dark.checked = true;
    } else {
      light_dark.checked = true;
    }
}