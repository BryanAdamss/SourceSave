require.config({
    baseUrl: "js",
    paths: {
        lib: "lib",
        vendor: "vendor",
        jquery: "lib/jquery-1.12.4.min",
        domReady: "lib/domReady",
        template: "vendor/00_template"
    }
});
require(["template"], function(template) {
    console.log(template);
});