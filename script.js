const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (mouseinfo) {
    cursormove(mouseinfo.pageX, mouseinfo.pageY);
})
const cursormove = function (pageX, pageY) {
    cursor.style.left = pageX + "px";
    cursor.style.top = pageY + "px";
};