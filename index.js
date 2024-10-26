(function(win, doc) {
  'use strict';
  const form = doc.forms['skinselection'];
  const inputs = document.querySelectorAll('input[name="skin"]');
  const submit = doc.getElementById('skinsubmit');
  if (submit) {
    if (inputs) {
      inputs.forEach((input) => {
        input.addEventListener('change', function() {
          form.submit();
        });
      });
    };
  };
  const url = q2o(win.location.search);
  if (win.location.search) {
    const query = url.skin;
    if (win.localStorage) {
      win.localStorage.clear();
      win.localStorage.setItem('skin', query);
    } else {
      console.log()
    }
  } else {
    console.log()
  };
  if (win.localStorage) {
    const radio = [doc.getElementById('light-dark'), doc.getElementById('light'), doc.getElementById('dark')]
    const skin = win.localStorage.getItem('skin');
    const skins = ["light+dark", "light", "dark"];
    if (radio) {
      if (skin == skins[0]) {
        radio[0].checked = true;
      } else if (skin == skins[1]) {
        radio[1].checked = true;
      } else if (skin == skins[2]) {
        radio[2].checked = true;
      } else {
        radio[0].checked = true;
      };
    };
  } else {
    console.log()
  };
  hljs.highlightAll();
}(this, this.document));