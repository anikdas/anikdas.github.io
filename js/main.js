smoothScroll.init();
smoothScroll.init({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0
});
$(window).scroll(function () {
    //console.log($(window).scrollTop());
    if ($(window).scrollTop() > 100) {
      $('nav').addClass('navbar-scrolled');
      $('.nav-link').addClass('nav-link-scrolled');
      $('.nav-link-scrolled').removeClass('nav-link');
    } else {
      $('nav').removeClass('navbar-scrolled');
      $('.nav-link-scrolled').addClass('nav-link');
      $('.nav-link').removeClass('nav-link-scrolled');
    }
});
//$('.portfolio-launcher').click(function () {
//  var portfolioName = $(this).data("portfolio");
//  $("#portLabel").html(portfolioName);
//  $('#portModal').modal();
//});
$.ajax({
  url: "http://anikdas.com/blog/feed/json",
  crossDomain: true,
  contentType:"json",
  success: function (data) {
    //console.log(data);
    for (var i = 0; i < 6; i++) {
      if(i%3==0){
        jQuery('<div/>', {
            class: "clearfix",
        }).appendTo('#recentBlogs');
        jQuery('<br>', {
        }).appendTo('#recentBlogs');
      }
      scaf = jQuery('<div/>', {
          class: "col-md-4"
      });
      title_a = jQuery('<a/>', {
        class: "rec-blog-link",
        href: data[i].permalink,
        html: data[i].title
      });
      title_h4 = jQuery('<h3/>', {
      });
      title_a.appendTo(title_h4);
      title_h4.appendTo(scaf);
      post = jQuery('<div/>', {
          html: $.parseHTML(data[i].excerpt)
      });
      post.appendTo(scaf);
      jQuery('<br/>', {
      }).appendTo(scaf);
      jQuery('<a/>', {
          href : data[i].permalink,
          class: "btn btn-default",
          html: "Read more"
      }).appendTo(scaf);
      scaf.appendTo('#recentBlogs');
    };
  }
});
