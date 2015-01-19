window.Slider = {
  index: 1,
  
  slider: $('#slider'),

  sliderDescription: $('.slider-content'),

  initialize: function(){
    this.watchArrowClick();
    this.interval = setInterval(Slider.startSlide, 2000);
  },


  watchArrowClick: function(){
    var self = this;

    $('.arrows').on('click', function(){
      var arrow = $(this);

      clearInterval(self.interval);

      if (arrow.hasClass('arrow-left')) {
        self.startSlide();
        self.decreaseIndex();
      } else {
        self.startSlide();
      }
    
    });



  },


  increaseIndex: function(){
    var self = Slider;
    switch(true) {
      
      case (self.index > 2):
        self.index = 1;
        break;
      default:
        self.index += 1;
        break;
    }
  },

  decreaseIndex: function(){
    var self = Slider;
    switch(true) {
      
      case (self.index < 1):
        self.index = 1; 
        break;
      default:
        self.index -= 2;
        break;
    }
  },


  startSlide: function(){

    var self = Slider;    
    
    console.log(self.index);
    self.slider.stop(true, true).animate({ opacity: 0 }, 100);
    self.slider.removeClass('slider-' + self.index);
    $('li.slider-' + self.index + '-content').hide().parents('.slider-content').stop(true,true).animate({ right: '-9999'}, 200);

    self.increaseIndex();
    console.log(self.index);

    self.slider.stop(true,true).animate({ opacity: 1 }, 700);
    self.slider.addClass('slider-' + self.index);

    $('li.slider-' + self.index + '-content').show().parents('.slider-content').stop(true, true).animate({ right: 0 }, 800);
    
  }



};

Slider.initialize();
