function search() {
  var input, filter, x, a;
  var num = 0;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  x = document.getElementsByClassName("filterDiv");
  for (i = 0; i < x.length; i++) {
    a = x[i].getElementsByTagName("h4")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      x[i].style.display = "";
      num++;
    } else {
      x[i].style.display = "none";
    }
  }
  document.getElementById("results").innerHTML = num + " tool" + (num != 1 ? "s" : "");
}
