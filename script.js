if (!localStorage.getItem("visited")) {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    localStorage.setItem("visited", "true");
  }, 4500);
} else {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}
