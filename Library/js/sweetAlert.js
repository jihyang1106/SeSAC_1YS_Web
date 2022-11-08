$(function () {
  //   swal("Here's the Title!", "and this is Text!");
  //   swal("Checked!", "you are succeed", "success");
  //   swal({
  //     title: "you clicked",
  //     text: "you clicked the button!",
  //     icon: "success",
  //     button: "oh yes!",
  //   });
  //   swal("Title", "Text", "error", {
  //     button: "this is btn",
  //   });
  // success, info, warniing, error가 있다.

  // alert창에서 데이터를 삭제할 때 정말 삭제하시겠습니까? 나오게 하기
  //   swal({
  //     title: "정말 삭제하시겠어요?",
  //     text: "영구적으로 삭제됩니다.",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   }).then((willDelete) => {
  //     if (willDelete) {
  //       swal("성공적으로 삭제되었어요", {
  //         icon: "success",
  //       });
  //     } else {
  //       swal("파일이 삭제되지 않았어요.");
  //     }
  //   });

  //   버튼을 두개 만들기
  //   swal("are you sure?", {
  //     buttons: ["nope", "yes"],
  //   });

  // prompt 구현
  swal("아무거나 적어보세요: ", {
    content: "input",
  }).then((value) => {
    swal(`값 : ${value}`);
  });
});
