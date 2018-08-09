//google maps

    function initMap() {

       var mapLoc = {lat: 51.5328233, lng: 7.1588567};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: mapLoc
        });
 
        var marker = new google.maps.Marker({
          position: mapLoc,
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          title: 'My Home!'
        });

        marker.addListener('click', toggleBounce);
        }

        function toggleBounce() {
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }
        }

//load DOM

$(document).ready(function(){

  //tooltip

  $(function () {
   $('[data-toggle="tooltip"]').tooltip();
  });

  //submit message

  $('#submit-button').on('click', function() {
   var comment = $('.message-box').val();
   if(comment === "") {
        $('.message-box').css('border', '2px solid red');
    } else {
        $('#visible-comment').html('Thank you! We have received your message.');
        $('#visible-comment').css({'border': '2px solid blue', 'background-color':  '#cceeff'});
        $('.message-box').hide('slow');
        $('#submit-button').hide();
    };

    return false;

  });

 
  //message character count

  $(".message-box").on("keyup", function() {

        console.log("keyup happened"); //here we make sure we're catching the keyup

        // in here is where the rest of our code for this Exercise will go

        var charCount = $(".message-box").val().length;//here we set the length of the content of the textarea to a variable
        console.log(charCount); //here we make sure we set it to the right value
        $("#char-count").html('Message character count: ' + charCount); //here we show a running character count to the user
        if(charCount > 200) {
          $("#char-count").css('color', 'red');
          $("#char-count").html('Maximum character is 200')
          $('#submit-button').hide();
        } else {
          $('#submit-button').show();
          $("#char-count").css("color", "black"); // need it to be black
        };
  });

  //smooth scrolling

  var $root = $('html, body');
   $('.navbar-nav a').click(function() {
   var href = $.attr(this, 'href');
     if (href != undefined && href != '#') {
     $root.animate({
     scrollTop: $(href).offset().top
     }, 500, function () {
     window.location.hash = href;
     });
     }

   return false;

  });

  // work section

    for(var i = 0; i < works.length; ++i ) {
      $('#work-images').append("\
        <div class='col-md-12 col-sm-6 col-md-4'>\
          <a href='#' class='work-img'>\
            <img class='img-responsive' src='" + works[i].pic + "'>\
            <span class='info'><h4 class='proj-title'>Title:</h4>" + works[i].title +  "</span>\
          </a>\
          <div><h4><strong>Programming Languages:</strong></h4>" + works[i].language + "</div>\
          <div><h4><strong>Overview:</strong></h4>" + works[i].overview + "</div>\
          <a href='" + works[i].url + "' class='btn btn-default' role='button'>Link to Site</a>\
        </div>\
    ");
   };

    //display work title on hover

    $(".work-img").mouseenter(function(){
      $(".info", this).show();
      }).mouseleave(function(){
      $(".info", this).hide();
    });

});