//----smooth scroll----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

//----navbar change color on scroll----
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
      $(".navbar").css("background", "rgba(0,0,0,0.7)");
      $(".navbar").css("height", "13vh");
    } else {
      $(".navbar").css("height", "18vh");
      $(".navbar").css("background", "transparent");
    }
  });
});

//----navbar toggler on click----
$(document).ready(function() {
  $(".navbar-toggler").click(function() {
    $(".toggler-overlay").css("display", "block");
  });
  $(".close").click(function() {
    $(".toggler-overlay").css("display", "none");
  });
});

//----------------------------------------------------------------------------------
//---------------about.html---------------------------------------------------------

//----counter----
$(window).one("scroll", function() {
  var hT = $(".income").offset().top,
    hH = $(".income").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if ((wS = hT + hH - wH)) {
    (function($) {
      $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
          increment = (options.to - options.from) / loops;

        return $(this).each(function() {
          var _this = this,
            loopCount = 0,
            value = options.from,
            interval = setInterval(updateTimer, options.refreshInterval);

          function updateTimer() {
            value += increment;
            loopCount++;
            $(_this).html(value.toFixed(options.decimals));

            if (typeof options.onUpdate == "function") {
              options.onUpdate.call(_this, value);
            }

            if (loopCount >= loops) {
              clearInterval(interval);
              value = options.to;

              if (typeof options.onComplete == "function") {
                options.onComplete.call(_this, value);
              }
            }
          }
        });
      };
      $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 100, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        onUpdate: null, // callback method for every time the element is updated,
        onComplete: null // callback method for when the element finishes updating
      };
    })(jQuery);

    jQuery(function($) {
      $(".timer1").countTo({
        from: 0,
        to: 45,
        speed: 3000,
        refreshInterval: 50,
        onComplete: function(value) {
          console.debug(this);
        }
      });
    });
    jQuery(function($) {
      $(".timer2").countTo({
        from: 0,
        to: 15,
        speed: 3000,
        refreshInterval: 50,
        onComplete: function(value) {
          console.debug(this);
        }
      });
    });
    jQuery(function($) {
      $(".timer3").countTo({
        from: 0,
        to: 2,
        speed: 2000,
        refreshInterval: 50,
        onComplete: function(value) {
          console.debug(this);
        }
      });
    });
    jQuery(function($) {
      $(".timer4").countTo({
        from: 0,
        to: 99,
        speed: 4000,
        refreshInterval: 50,
        onComplete: function(value) {
          console.debug(this);
        }
      });
    });
    jQuery(function($) {
      $(".timer5").countTo({
        from: 0,
        to: 98,
        speed: 4000,
        refreshInterval: 50,
        onComplete: function(value) {
          console.debug(this);
        }
      });
    });
    jQuery(function($) {
      $(".timer6").countTo({
        from: 0,
        to: 96,
        speed: 4000,
        refreshInterval: 50,
        onComplete: function(value) {
          console.debug(this);
        }
      });
    });
  }
});
