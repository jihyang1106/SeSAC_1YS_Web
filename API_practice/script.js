document.addEventListener("DOMContentLoaded", () => {
  new TypeIt("#title_h1")
    .pause(1000) // 1초
    .go();
});

$("#search").click(function () {
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: $("#bookSearch").val() },
    headers: {
      Authorization: "KakaoAK XXXXXXXXXXX",
    },
  }).done(function (res) {
    $("#bookImg").append("<img src='" + res.documents[0].thumbnail + "'/>");
    $(".card-title").append(res.documents[0].title);
  });
});
