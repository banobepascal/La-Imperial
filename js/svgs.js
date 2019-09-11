var more = document.querySelector(".fun");
more.addEventListener("click", runEvent);

function runEvent() {
  $(function() {
    $(".fun").hide();
    $(".fun1").show();
  });
}

var less = document.querySelector(".fun1");
less.addEventListener("click", runEvent1);

function runEvent1() {
  $(function() {
    $(".fun1").hide();
    $(".fun").show();
  });
}
