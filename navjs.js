function slide() {
    var e = document.getElementById("navBox")
      , n = document.getElementById("menuBox");
    "none" == e.style.display ? (e.style.display = "block",
    n.style.left = "330px") : (e.style.display = "none",
    n.style.left = "0px")
}
document.getElementById("menuBox").onclick = function() {
    slide()
}
;
