$(function() {
  var renderedHTML = render('init', {});

  function render(tmplName, tmplData) {
    if (!render.tmplCache) {
      render.tmplCache = {};
    }

    if (!render.tmplCache[tmplName]) {
      var tmplDir = 'assets/templates';
      var tmplURL = [tmplDir, '/', tmplName, '.html'].join('');

      var tmplResp;
      $.ajax({
        url: tmplURL,
        type: 'GET',
        dataType: 'html',
        success: function(data) {
          tmplResp = data;
        }
      });

      render.tmplCache[tmplName] = _.template(tmplResp);
    }

    return render.tmplCache[tmplName](tmplData);
  }

  $('.modal-body').html(renderedHTML);
});
