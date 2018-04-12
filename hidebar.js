var side = document.getElementsByClassName("side")[0];
side.id = "side";
document.getElementById("side").style.transition = "0.3s ease-in-out";

var btn = document.createElement("button");
var span = document.createTextNode(String.fromCharCode(0xbb));
btn.classList.add("hidebar-btn");
btn.appendChild(span);

side.insertBefore(btn, side.childNodes[0]);

load_options();

btn.addEventListener("click", function () {
    if (btn.getAttribute("collapse-state") == "open") {
        hide();
    }
    else {
        show();
    }
}, false);


function load_options() {
    chrome.storage.sync.get('hideDefault', function (result) {
        if (result['hideDefault']) {
            hide();
        }
        else {
            show();
        }
    });
}

function hide() {
    btn.firstChild.textContent = String.fromCharCode(0xab);
    btn.setAttribute("collapse-state", "close");
    document.getElementById("side").style.width = "30px";

    var side = document.getElementById("side");
    for (var i = 1; i < side.childNodes.length; i++) {
        side.childNodes[i].classList.add("hidden");
        side.childNodes[i].classList.remove("visible");
    }
}

function show() {
    btn.firstChild.textContent = String.fromCharCode(0xbb);
    btn.setAttribute("collapse-state", "open");
    document.getElementById("side").style.width = "300px";

    var side = document.getElementById("side");
    for (var i = 1; i < side.childNodes.length; i++) {
        side.childNodes[i].classList.remove("hidden");
        side.childNodes[i].classList.add("visible");
    }
}