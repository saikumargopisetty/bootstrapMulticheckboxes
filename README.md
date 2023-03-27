function captureNetworkRequest(e) {
    var capture_network_request = [];
    var capture_resource = performance.getEntriesByType("resource");
    for (var i = capture_resource.length- 1; i < capture_resource.length; i++) {
        if (capture_resource[i].initiatorType == "xmlhttprequest") {
            if (capture_resource[i].name.indexOf('https://wa-ccc-ui-dev.azurewebsites.net/') > -1) {
                capture_network_request.push(capture_resource[i].name)
            }
        }
    }
    return capture_network_request;
}
captureNetworkRequest();
