# MAPO MOVIE

마포관련된첫프로젝트!

# 1. 목차

1. HOME
2. MAPO MOVIE
3. THEATER
4. LOGIN

# 1. MAPO MOVIE home page

### 홈화면

![homeimg](https://user-images.githubusercontent.com/103020096/171074582-5aeafd3f-0a7c-40c3-88ae-77bfa7605a9f.jpg)

# 1. MAPO MOVIE bars menu

### 햄버거메뉴

![barsimg](https://user-images.githubusercontent.com/103020096/171076420-c0986dfc-d2a1-4d9b-91a2-2eee0a7782b2.jpg)

# 1. MAPO MOVIE home popup

### 팝업창

![barsimg](https://user-images.githubusercontent.com/103020096/171076420-c0986dfc-d2a1-4d9b-91a2-2eee0a7782b2.jpg)

# 10. 코드블럭 추가하기

```swift
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
```
