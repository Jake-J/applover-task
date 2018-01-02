$(document).ready(function(){
    var validationJSON;
    const slider = $('.slider');
    const validateForm = function(){
      if(typeof this[2].value === 'string'&& typeof this[1].value === 'string'&& typeof this[0].value === 'string'){
        var validationData = {};

        validationData.email = this[0].value;
        validationData.password = this[1].value;
        validationData.phone = this[2].value;

        validationJSON = JSON.stringify(validationData);
      }else{
        return false;
      }
    }     
    const move = function(goNext){
      return function(){
        goNext ? slider.slick('slickNext') : slider.slick('slickPrev');
      }
    }
    slider.slick({
      centerPadding: '60px',
      slidesToShow: 3,
      arrows: false,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            arrows: false,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    })
    $('.arr-left').on('click',move(0));
    $('.arr-right').on('click',move(1));
    $('.submit-btn').on('click',function(e){
      $('#reg-form').submit(validateForm);
    })
    console.log($('#reg-form'));
  });