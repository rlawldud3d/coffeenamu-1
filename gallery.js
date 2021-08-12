$(function(){
  $('.gallery img').hide().eq(0).show();
  var imgNum = 0;
  var pauseTime = 5000;

  function changeGallery(imgNum) {
    $('.gallery img')
      .stop()
      .fadeOut(300)
      .eq(imgNum)
      .fadeIn(300);
  }

  setInterval(function(){
    imgNum = imgNum + 1;
    if(imgNum > 2) { imgNum = 0;}
    changeGallery(imgNum); 
  }, pauseTime);

});