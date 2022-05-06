function autoPlayYouTubeModal() {
    var triggerOpen = $("body").find('[data-tagVideo]');
    triggerOpen.click(function() {
      var theModal = $(this).data("bs-target"),
        videoSRC = $(this).attr("data-tagVideo"),
        videoSRCauto = videoSRC + "?autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.btn-close').click(function() {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
    });
  }
