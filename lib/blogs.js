$(function() {
  function render(tmplName, tmplData) {
    if (!render.tmplCache) {
      render.tmplCache = {};
    }

    if (!render.tmplCache[tmplName]) {
      var tmplDir = 'assets/templates';
      var tmplURL = [tmplDir, '/', tmplName, '.html'].join('');

      console.log(tmplData);
      var tmplResp;
      $.ajax({
        url: tmplURL,
        type: 'GET',
        dataType: 'html',
        success: function(data) {
          console.log(data);
          tmplResp = data;
        }
      });
      console.log(tmplResp);

      render.tmplCache[tmplName] = _.template(tmplResp);
    }

    return render.tmplCache[tmplName](tmplData);
  }

  var renderedHTML = render('init', {});
  $('.modal-body').html(renderedHTML);
});
