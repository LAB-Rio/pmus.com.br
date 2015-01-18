window.Slider = {
  index: 1,
  
  slider: $('#slider'),

  sliderDescription: $('.slider-content'),

  initialize: function(){
    setInterval(Slider.startSlide, 8000);
  },

  startSlide: function(){

    var self = Slider;    
    
    self.slider.animate({ opacity: 0 }, 100);
    self.slider.removeClass('slider-' + self.index);

    $('li.slider-' + self.index + '-content').hide().parents('.slider-content').animate({ right: '-9999'}, 200);

    self.index += 1;         
    
    if ( self.index > 5 ) { self.index = 1; }
    
    self.slider.animate({ opacity: 1 }, 700);
    self.slider.addClass('slider-' + self.index);

    $('li.slider-' + self.index + '-content').show().parents('.slider-content').animate({ right: 0 }, 800);
    
  }



};

Slider.initialize();
