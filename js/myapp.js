var MY_APP = (function(module) {
    module.doIt = function() {
        $("#output-container").append(Date() + "</br>");
    };
    module.clear = function() {
        $("#output-container").empty();
    }
    return module;
}(MY_APP || {}));
