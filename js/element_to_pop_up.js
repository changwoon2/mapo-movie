(function ($) {
  // DOM 준비
  $(function () {
    // 클릭 이벤트 바인딩
    // jQuery v.1.7.0에서 .bind() 대신 .on()을 사용합니다.
    $(".imgone").on("click", function (e) {
      let self = $(this), //button
        content = $(".content");
      $("element_to_pop_up").bPopup({
        onOpen: function () {
          content.html(self.data("bpopup") || "");
        },
        onClose: function () {
          content.empty();
        },
      });
      // 기본 작업이 트리거되지 않도록 합니다.
      e.preventDefault();
      // 클릭 이벤트가 발생할 때 bPopup 트리거링
      $("#element_to_pop_up").bPopup();
    });
  });
})(jQuery);

(function ($) {
  // DOM Ready
  $(function () {
    // Binding a click event
    // From jQuery v.1.7.0 use .on() instead of .bind()
    $(".imgtwo").on("click", function (e) {
      let self = $(this), //button
        content = $(".content");
      $("element_to_pop_up_two").bPopup({
        onOpen: function () {
          content.html(self.data("bpopup") || "");
        },
        onClose: function () {
          content.empty();
        },
      });
      // Prevents the default action to be triggered.
      e.preventDefault();
      // Triggering bPopup when click event is fired
      $("#element_to_pop_up_two").bPopup();
    });
  });
})(jQuery);

(function ($) {
  // DOM Ready
  $(function () {
    // Binding a click event
    // From jQuery v.1.7.0 use .on() instead of .bind()
    $(".imgthree").on("click", function (e) {
      let self = $(this), //button
        content = $(".content");
      $("element_to_pop_up_three").bPopup({
        onOpen: function () {
          content.html(self.data("bpopup") || "");
        },
        onClose: function () {
          content.empty();
        },
      });
      // Prevents the default action to be triggered.
      e.preventDefault();
      // Triggering bPopup when click event is fired
      $("#element_to_pop_up_three").bPopup();
    });
  });
})(jQuery);

(function ($) {
  // DOM Ready
  $(function () {
    // Binding a click event
    // From jQuery v.1.7.0 use .on() instead of .bind()
    $(".imgfour").on("click", function (e) {
      let self = $(this), //button
        content = $(".content");
      $("element_to_pop_up_four").bPopup({
        onOpen: function () {
          content.html(self.data("bpopup") || "");
        },
        onClose: function () {
          content.empty();
        },
      });
      // Prevents the default action to be triggered.
      e.preventDefault();
      // Triggering bPopup when click event is fired
      $("#element_to_pop_up_four").bPopup();
    });
  });
})(jQuery);

(function ($) {
  // DOM Ready
  $(function () {
    // Binding a click event
    // From jQuery v.1.7.0 use .on() instead of .bind()
    $(".imgsix").on("click", function (e) {
      let self = $(this), //button
        content = $(".content");
      $("element_to_pop_up_six").bPopup({
        onOpen: function () {
          content.html(self.data("bpopup") || "");
        },
        onClose: function () {
          content.empty();
        },
      });
      // Prevents the default action to be triggered.
      e.preventDefault();
      // Triggering bPopup when click event is fired
      $("#element_to_pop_up_six").bPopup();
    });
  });
})(jQuery);

(function ($) {
  // DOM Ready
  $(function () {
    // Binding a click event
    // From jQuery v.1.7.0 use .on() instead of .bind()
    $(".imgseven").on("click", function (e) {
      let self = $(this), //button
        content = $(".content");
      $("element_to_pop_up_seven").bPopup({
        onOpen: function () {
          content.html(self.data("bpopup") || "");
        },
        onClose: function () {
          content.empty();
        },
      });
      // Prevents the default action to be triggered.
      e.preventDefault();
      // Triggering bPopup when click event is fired
      $("#element_to_pop_up_seven").bPopup();
    });
  });
})(jQuery);

(function ($) {
  // DOM Ready
  $(function () {
    // Binding a click event
    // From jQuery v.1.7.0 use .on() instead of .bind()
    $(".imgeight").on("click", function (e) {
      let self = $(this), //button
        content = $(".content");
      $("element_to_pop_up_eight").bPopup({
        onOpen: function () {
          content.html(self.data("bpopup") || "");
        },
        onClose: function () {
          content.empty();
        },
      });
      // Prevents the default action to be triggered.
      e.preventDefault();
      // Triggering bPopup when click event is fired
      $("#element_to_pop_up_eight").bPopup();
    });
  });
})(jQuery);

(function ($) {
  // DOM Ready
  $(function () {
    // Binding a click event
    // From jQuery v.1.7.0 use .on() instead of .bind()
    $(".container").on("click", function (e) {
      let self = $(this), //button
        content = $(".content");
      $("element_to_pop_up_container").bPopup({
        onOpen: function () {
          content.html(self.data("bpopup") || "");
        },
        onClose: function () {
          content.empty();
        },
      });
      // Prevents the default action to be triggered.
      e.preventDefault();
      // Triggering bPopup when click event is fired
      $("#element_to_pop_up_container").bPopup();
    });
  });
})(jQuery);
