document.getElementById("menuBtn").addEventListener("click", function() {
  this.classList.toggle("rotate");
  document.getElementById("menuList").classList.toggle("menu-closed");
});