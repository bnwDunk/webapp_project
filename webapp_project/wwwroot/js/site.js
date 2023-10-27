// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function loginpopup() {
    var popup = document.getElementById("popup-login");
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
}

function reply_popup() {
    var popup = document.getElementById("view-content");
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
}

function post_popup() {
    var popup = document.getElementById("popup-post");
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
}

function btn_status(itemName) {
    var popup = document.getElementById("popup-order");
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
}

function close_popup() {
    var popup = document.getElementById("popup-order");
    popup.style.display = "none";
}

function confirm_order() {
    var popup = document.getElementById("popup-order");
    popup.style.display = "none";

    var btn_s = document.getElementById("s");
    btn_s.style.display = "block";

    var btn_w = document.getElementById("w");
    btn_w.style.display = "none";
}

function show_menu() {
    var show_menu = document.getElementById("show-menu");
    show_menu.style.display = "block";

    var close_btn = document.getElementById("btn-close-menu");
    close_btn.style.display = "block";

    var show_btn = document.getElementById("btn-show-menu");
    show_btn.style.display = "none";

}

function close_menu() {
    var show_menu = document.getElementById("show-menu");
    show_menu.style.display = "none";

    var close_btn = document.getElementById("btn-close-menu");
    close_btn.style.display = "none";

    var show_btn = document.getElementById("btn-show-menu");
    show_btn.style.display = "block";
}