# SiteGPT Tools

Provides a basic interface in Javascript to control the [SiteGPT.ai](https://sitegpt.ai/?via=james) UI interface elements.

You can open, close, show, hide, or toggle the UI using this tiny script.

You can include the following on your website to import the script:

```html
<script src="https://cdn.jsdelivr.net/gh/kidgodzilla/sitegpt-tools@latest/main.js"></script>
```

## Recipes

### Add [SiteGPT.ai](https://sitegpt.ai/?via=james) to Crisp.chat

```js
if (window.$crisp && window.$crisp.push) {
	$crisp.push(["on", "session:loaded", function() {
		window._sitegpt.add_to_crisp();
	}]);
} else {
  window.CRISP_READY_TRIGGER = function() {
  	$crisp.push(["on", "session:loaded", function() {
		window._sitegpt.add_to_crisp();
	}]);
  }
}

window._sitegpt.on_ready(function () {
  window._sitegpt.hide();
});
```

