function carousel(){
    $(".carousel-item").swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
          if (direction == 'left') $(".carousel").carousel('next');
          if (direction == 'right') $(".carousel").carousel('prev');
        },
        allowPageScroll: "vertical"
      });
}
if(window.innerWidth >= 768){
    carousel()

}
window.addEventListener('resize',()=>{
    if(window.innerWidth >= 768){
        carousel()
    
    }

})