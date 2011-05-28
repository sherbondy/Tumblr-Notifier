var content = document.getElementById('content');
var the_script = content.getElementsByTagName('script')[0];
var re = new RegExp('(http://.+.js)');
var the_src = re.exec(the_script.innerHTML);
if (the_src) {
    safari.self.tab.dispatchMessage('setScriptSrc', the_src[1]);
}
