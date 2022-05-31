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

# Explanation

##### 로고기능

- 로고에는 애니메이션 효과를 줌

##### 헤더영역 목록

- 헤더목록 노토산스 폰트 로그인에는 회색부여 간격조절
- 목록 클릭시 각페이지로 이동 호버시 색상변경

##### 햄버거 메뉴 설명

- 햄버거 메뉴 클릭시 서브페이지 목록 출현

##### 페이지 이동 버튼

- SNS 아이콘 영역
- 페이스북 인스타 트위터 클릭시 마포구청 SNS이동
- 배경색과 테두리를 설정 애니메이션효과 부여

##### 텍스트 애니메이션 효과

- 왼쪽에서 오른쪽 반복 하는 애니메이션

##### 영화 포스터 클릭시

- 해당 영화에 대한 예고편 팝업 출력
- 영화 설명문과 그림자효과

##### 카피라이트 클릭시

- 나의 깃허브로 이동

# 1. MAPO MOVIE bars menu

### 햄버거메뉴

![barsimg](https://user-images.githubusercontent.com/103020096/171076420-c0986dfc-d2a1-4d9b-91a2-2eee0a7782b2.jpg)

# 1. MAPO MOVIE home popup

### 팝업창

![barsimg](https://user-images.githubusercontent.com/103020096/171076420-c0986dfc-d2a1-4d9b-91a2-2eee0a7782b2.jpg)

# 1. 팝업창코드

```swift
(function ($) {
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
    })(jQuery);
```

# 2. MAPO MOVIE page

### 마포무비

![mapomovie](https://user-images.githubusercontent.com/103020096/171077661-2ed6bc34-3670-462f-8865-9f5e4eda773a.jpg)
