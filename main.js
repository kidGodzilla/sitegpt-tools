// Script to control SiteGPT.AI chat Interface elements
// Usage:
// _sitegpt.open()
// _sitegpt.hide()
// _sitegpt.show()
window._sitegpt = {
  is_open: function() { return !document.querySelector('#sitegpt-chat-icon img').src.includes('logo') },
  open: function() { if (!_sitegpt.is_open()) { _sitegpt.toggle() } },
  close: function() { if (_sitegpt.is_open()) { _sitegpt.toggle() } },
  toggle: function() { document.querySelector('#sitegpt-chat-icon').click() },
  show: function() { document.querySelector('#sitegpt-chat-icon').style.display = 'flex' },
  hide: function() { document.querySelector('#sitegpt-chat-icon').style.display = 'none' },
  exists: function() { return !!document.querySelector('#sitegpt-chat-icon') },
  
  on_ready: function (callback) {
    window.__hide_sitegpt_interval = setInterval(function() {
      if (_sitegpt.exists()) {
        clearInterval(window.__hide_sitegpt_interval);
        if (callback && typeof callback === 'function') callback();
      }
    }, 250);
  },
  add_to_crisp: function() {
    if (document.querySelector('.instant-answers')) return;
    var el = document.querySelector('a[data-mode="chat"]');
    var clone = el.cloneNode(true);
    clone.classList.add('instant-answers');
    clone.setAttribute('onclick', 'window._sitegpt.toggle();$crisp.push(["do", "chat:close"]);');
    el.after(clone);
    document.querySelectorAll('.instant-answers span')[1].innerText = 'Instant Answers';
  },
}
