---
title: Search
url: /search/
---

<link href="/pagefind/pagefind-ui.css" rel="stylesheet">
<script src="/pagefind/pagefind-ui.js"></script>

<p>Search more than a decade of Top 100 posts.</p>
<div id="search"></div>

<script>
window.addEventListener('DOMContentLoaded', function () {
  var searchUI = new PagefindUI({
    element: '#search',
    showSubResults: true,
    processTerm: function (term) {
      var url = new URL(window.location.href);
      if (term) {
        url.searchParams.set('q', term);
      } else {
        url.searchParams.delete('q');
      }
      window.history.replaceState({}, '', url);
      return term;
    }
  });

  var query = new URLSearchParams(window.location.search).get('q');
  if (query) searchUI.triggerSearch(query);
});
</script>
