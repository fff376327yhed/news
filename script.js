// script.js
function showMore(id) {
    const moreText = document.getElementById(id);
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
    } else {
        moreText.style.display = "none";
    }
}
