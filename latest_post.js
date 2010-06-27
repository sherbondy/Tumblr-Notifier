var ol = document.getElementById("posts");
if (ol) {
    var lis = ol.getElementsByTagName("li");
    var latest_post = lis[1].id.substr(4);

    safari.self.tab.dispatchMessage("setLatest", latest_post);
}