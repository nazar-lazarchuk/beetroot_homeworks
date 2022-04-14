$(document).ready(function () {
  $(".button").click(function () {
    $("#result").text($("#result").text() + $(this).val());
  });
  $(".clear").click(function () {
    $("#result").text(" ");
  });
  $(".calc").click(function () {
    $("#result").text(eval($("#result").text()));
  });
});
