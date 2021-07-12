
     document.getElementById('randomize').onclick = function() {
      var width = document.getElementById('wi').value;
      var height = document.getElementById('he').value;
      var image = "https://source.unsplash.com/" + width + "x" + height + "#" + Math.random();
      document.getElementById('image').innerHTML = "<br>Your random photo is: <br><br><img src='" + image + "'></img>";
    }
