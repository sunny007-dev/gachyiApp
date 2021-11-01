var mybutton = document.getElementById("myBtn");
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}