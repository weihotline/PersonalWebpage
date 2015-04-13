$(function() {
  function render(tmplName, tmplData) {
    if (!render.tmplCache) {
      render.tmplCache = {};
    }

    if (!render.tmplCache[tmplName]) {
      var tmplDir = 'assets/templates';
      var tmplURL = [tmplDir, '/', tmplName, '.html'].join('');

      $.ajax({
        url: tmplURL,
        async: false,
        type: 'GET',
        dataType: 'html',
        success: function(tmplResp) {
          render.tmplCache[tmplName] = _.template(tmplResp);
        }
      });
    }

    return render.tmplCache[tmplName](tmplData);
  }

  var renderedHTML = render('init', {});
  $('.modal-body').html(renderedHTML);
});
