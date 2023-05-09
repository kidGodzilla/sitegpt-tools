# SiteGPT Tools

Provides a basic interface in Javascript to control the [SiteGPT.ai](https://sitegpt.ai/?via=james) UI interface elements.

You can open, close, show, hide, or toggle the UI using this tiny script.

You can include the following on your website to import the script:

```html
<script src="https://cdn.jsdelivr.net/gh/kidgodzilla/sitegpt-tools@latest/m.js"></script>
```

## API

### Hide or Show the [SiteGPT.ai](https://sitegpt.ai/?via=james) button

```js
window._sitegpt.hide(); // Hides the SiteGPT button
window._sitegpt.show(); // Shows the SiteGPT button
```

### Open or Close the [SiteGPT.ai](https://sitegpt.ai/?via=james) button

```js
window._sitegpt.open(); // Opens the SiteGPT chat interface
window._sitegpt.close(); // Closes the SiteGPT chat interface
window._sitegpt.toggle(); // Toggles the SiteGPT chat interface
```

### Helper functions

```js
window._sitegpt.is_open() // Returns true if the chat window is currently open, otherwise false

window._sitegpt.exists() // Determines if the chat interface is ready

window._sitegpt.on_ready(function () {
    // Executes when the chat interface is available. Can be used to hide the interface on load.
});
```

## Recipes

### Add [SiteGPT.ai](https://sitegpt.ai/?via=james) to Crisp.chat

```html
<script src="https://cdn.jsdelivr.net/gh/kidgodzilla/sitegpt-tools@latest/m.js"></script>
<script>
  if (window.$crisp && window.$crisp.push) {
    $crisp.push(["on", "session:loaded", window._sitegpt.add_to_crisp]);
    $crisp.push(["on", "chat:opened", window._sitegpt.add_to_crisp]);
    $crisp.push(["on", "chat:opened", window._sitegpt.close]);
  } else {
    window.CRISP_READY_TRIGGER = function() {
      $crisp.push(["on", "session:loaded", window._sitegpt.add_to_crisp]);
      $crisp.push(["on", "chat:opened", window._sitegpt.add_to_crisp]);
      $crisp.push(["on", "chat:opened", window._sitegpt.close]);
    }
  }

  window._sitegpt.on_ready(window._sitegpt.hide);
</script>
```
