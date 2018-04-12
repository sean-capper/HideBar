function save_options() {
    var hideDefault = document.getElementById("hide-default").checked;
    
    chrome.storage.sync.set({
        "hideDefault": hideDefault,
    }, function() {
        var status = document.getElementById("status");
        status.textContent = "Options saved.";
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        hideDefault: false
    }, function(items) {
        document.getElementById("hide-default").checked = items.hideDefault;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById("save").addEventListener('click', save_options);