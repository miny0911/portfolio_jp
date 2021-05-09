$(function(){
    setInterval(slide, 4000);
    var idx = 0;
    
   function slide(){
         idx<2 ? idx++ : idx=0
       
 $('.bg ul').animate({'left':'-1920px'},500,function(){
     var fst = $('.bg ul li').eq(0);
     
     $('.bg ul').append(fst);
     $('.bg ul').css('left','-40px');
   
     
     
 })
   }
})