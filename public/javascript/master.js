$(document).ready(function(){

  var toggleEnquiries = function(){
    $(".enquiries").toggleClass("open");
    $(".nav-right").toggleClass("enquiries-open");
  }

  var showSuccessMessage = function(){
    toggleSuccessMessage();
    window.setTimeout(toggleSuccessMessage, 3000);
  }
  var btns = $(".enquire-btn");

  var toggleSuccessMessage = function(){
    $('.enquiry-sent-wrapper').toggleClass('showing')
  }

  btns.click(toggleEnquiries)

  $(".down-arrow").click(function(){
    var offset = $(".section-two").offset();
    $("html, body").animate({
      scrollTop: offset.top
    }, 700, "swing");
  });

  $('.enquiries-form').on('submit', function (e){
    e.preventDefault()
    var that = $(this);
    var ajaxData = {};

    that.find('[name]').each(function(i, field){
      let name = $(field).attr('name'),
          value = $(field).val();
      ajaxData[name] = value
    });

    $.ajax({
      url: "enquiry.php",
      type: "post",
      data: ajaxData,
      // dataType: 'json',
      // cache: false,
      // contentType: 'application/json',
      // processData: false,
      success: function(data) {
        console.log('success');
        console.log(data);
        showSuccessMessage();
        if($('.enquiries').hasClass('open')){
          toggleEnquiries();
        }
      },
      error: function(xhr, textStatus, errorThrown) {
        console.log(xhr);
        console.log(textStatus);
        console.log(errorThrown);
      }
    });
  })
});
