$(function(){
  $('#main .container').hide().eq(0).show();

  var imgNum = 0;
  var pauseTime = 5000;

  function changeGallery(imgNum) {
    $('#main .container')
      .stop()
      .fadeOut(0)
      .eq(imgNum)
      .fadeIn(0);

    $('.indicator li').removeClass('active');
    $('.indicator li').eq(imgNum).addClass('active');
  }

  setInterval(function(){
    imgNum = imgNum + 1;
    if(imgNum > 1) { imgNum = 0;}
    changeGallery(imgNum); 
  }, pauseTime);

  $('.indicator li').eq(0).click(function(){
    changeGallery(0);
    $('.indicator li').removeClass('active');
    $(this).addClass('active');
    return false;
  })
  $('.indicator li').eq(1).click(function(){
    changeGallery(1);
    $('.indicator li').removeClass('active');
    $(this).addClass('active');
    return false;
  })
     

});