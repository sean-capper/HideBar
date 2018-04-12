chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({"hideDefault": true}, function() {
        console.log("Reddit sidebar will be hidden by default.");
    });

});