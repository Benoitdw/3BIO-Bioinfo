(function () {
  // Build lookup indexes once data is available
  const pubIndex = {};
  const posterIndex = {};

  function buildIndexes() {
    (window.PUB_DATA || []).forEach(function (p) { pubIndex[p.key] = p; });
    (window.POSTER_DATA || []).forEach(function (p) { posterIndex[p.key] = p; });
  }

  function buildTooltipHTML(pub) {
    var doi = pub.doi
      ? 'DOI: <a href="https://doi.org/' + pub.doi + '" target="_blank">' + pub.doi + '</a>'
      : '';
    var volPages = (pub.volume ? ', ' + pub.volume : '') + (pub.pages ? ', p.' + pub.pages : '');
    return '<span class="pub-tooltip-inner">'
      + '<strong>' + pub.title + '</strong><br>'
      + pub.authors + ' (' + pub.year + ')<br>'
      + '<em>' + pub.venue + '</em>' + volPages + '<br>'
      + doi
      + '</span>';
  }

  /**
   * Process [[cite:key]] and [[poster:key]] markers inside a DOM element.
   * Used for dynamically-rendered content (e.g. team member bios).
   */
  window.processCitations = function (root) {
    root.innerHTML = root.innerHTML.replace(
      /\[\[cite:([\w-]+)\]\]/g,
      function (_, key) {
        var pub = pubIndex[key];
        if (!pub) return '[?' + key + ']';
        var first = pub.authors.split(',')[0].trim();
        return '<span class="pub-cite" data-key="' + key + '" tabindex="0">'
          + '[' + first + ' et al., ' + pub.year + ']'
          + buildTooltipHTML(pub)
          + '</span>';
      }
    );
    root.innerHTML = root.innerHTML.replace(
      /\[\[poster:([\w-]+)\]\]/g,
      function (_, key) {
        var p = posterIndex[key];
        if (!p) return '[?' + key + ']';
        return '<span class="poster-cite" data-key="' + key + '" tabindex="0">'
          + '[poster: ' + p.title + ']'
          + '</span>';
      }
    );
    initCiteEvents(root);
  };

  /**
   * Attach tooltip content and poster click events to .pub-cite / .poster-cite elements.
   */
  window.initCiteEvents = function (root) {
    root.querySelectorAll('.pub-cite').forEach(function (el) {
      var pub = pubIndex[el.dataset.key];
      if (!pub) return;
      // Populate empty tooltip placeholders from shortcodes
      var tip = el.querySelector('.pub-tooltip-inner');
      if (tip && !tip.innerHTML.trim()) {
        tip.outerHTML = buildTooltipHTML(pub);
      } else if (!tip) {
        el.insertAdjacentHTML('beforeend', buildTooltipHTML(pub));
      }
    });

    root.querySelectorAll('.poster-cite').forEach(function (el) {
      // Avoid duplicate listeners by cloning
      var clone = el.cloneNode(true);
      el.parentNode.replaceChild(clone, el);
      clone.addEventListener('click', function () {
        openPosterModal(clone.dataset.key);
      });
    });
  };

  // ── Poster modal ────────────────────────────────────────────────────────────

  function ensurePosterModal() {
    var modal = document.getElementById('posterModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'posterModal';
      modal.className = 'poster-modal-overlay';
      modal.innerHTML =
        '<div class="poster-modal">'
        + '<button class="poster-modal-close" id="posterModalClose">&times;</button>'
        + '<h3 id="posterModalTitle"></h3>'
        + '<iframe id="posterModalFrame" src="" frameborder="0"></iframe>'
        + '</div>';
      document.body.appendChild(modal);
      modal.addEventListener('click', function (e) {
        if (e.target === modal) closePosterModal();
      });
      document.getElementById('posterModalClose').addEventListener('click', closePosterModal);
    }
    return modal;
  }

  function openPosterModal(key) {
    var p = posterIndex[key];
    if (!p) return;
    var modal = ensurePosterModal();
    document.getElementById('posterModalTitle').textContent =
      p.title + ' \u2014 ' + p.event + ' (' + p.year + ')';
    var base = (window.SITE_BASE_PATH || '/').replace(/\/$/, '');
    document.getElementById('posterModalFrame').src = base + p.pdf;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closePosterModal() {
    var modal = document.getElementById('posterModal');
    if (modal) {
      document.getElementById('posterModalFrame').src = '';
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePosterModal();
  });

  // ── Init on DOMContentLoaded ─────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', function () {
    buildIndexes();
    initCiteEvents(document.body);
    // Process [[cite:]] / [[poster:]] markers in team card bio previews
    document.querySelectorAll('.team-bio-preview').forEach(function (el) {
      processCitations(el);
    });
  });
})();
