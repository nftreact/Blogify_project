self.addEventListener("install", function (event) {
    console.log("serviceWorker is installed");
})
self.addEventListener("activate", function (event) {
    console.log("activate is insstalled");
})