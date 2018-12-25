//The basic of this pen is from Codewoofy's Eyes Follow mouse. It is changed to suit the oval shape of the eyes. https://codepen.io/Codewoofy/pen/VeBJEP

$(document).ready(function() {
    
    var post =  $(".post")
            
    $(window).resize(function(){
        var height2 = document.documentElement.clientHeight - post.offset().top/2;
        post.css({
            "height": height2
        });
    }).resize();
    
        
    
//moving the eyes
$("body").mousemove(function(event) {
  var eye = $(".eye");
  var pupil = $(".pupil");
  // var foot = $(".leg");
  
  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;
  
  var rotYScaled = rot;
  if (rot > 180) {
    rotYScaled = 360-rot;
  }
  var scaledY = (rotYScaled/180) * 100 - 50;
  
  var rotXScaled = rot;
  if (rotXScaled >= 270) {
    rotXScaled = rot - 270;
  } else {
    rotXScaled = rot + 90;
  }
  if (rotXScaled > 180) {
    rotXScaled = 360-rotXScaled;
  }
  var scaledX = (rotXScaled/180) * 100 - 50;
  
  pupil.css({
    'transform': 'translate(' + scaledX + '%,' + scaledY + '%)'
  });
});
    

//animating the button
var button = $(".button.main");

$(".collapse").on("show.bs.collapse", function() {
  button.css({
    "background-color": "#3f4242",
    "box-shadow": "1em #666",
    transform: "translateY(0.3em)"
  });
});

$(".collapse").on("hide.bs.collapse", function() {
  button.css({
    "background-color": "#51595b",
    "box-shadow": "0em #666",
    transform: "translateY(-0.3em)"
  });
});
    
});