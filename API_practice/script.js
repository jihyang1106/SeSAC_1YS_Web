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
      Authorization: "KakaoAK XXXXXXXXX",
    },
  }).done(function (res) {
    for(var i=0;i<res.documents.length;i++){
        $(".row").append("<div class='col-12'>" + res.documents[i].title + "</div>");
        $(".col-12").append("<img src='" + res.documents[i].thumbnail + "'/><br/>");
    }
    console.log(res.documents);
  });
});

