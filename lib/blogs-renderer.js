$(function() {
  function render(tmplName, tmplData) {
    if (!render.tmplCache) {
      render.tmplCache = {};
    }

    // if the page has never been rendered yet, make an ajax request for the template
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

  // render the welcome page
  var renderedHTML = render('tmpl-0', {});
  $('.modal-body').html(renderedHTML);

  // add event delegate to dropdown menus
  $('.dropdown').on('click', 'li', function(e) {
    e.preventDefault();
    var id = e.currentTarget.getAttribute('data-id');
    var tmplName = "tmpl-" + id;
    renderedHTML = render(tmplName, {});
    $('.modal-body').html(renderedHTML);
  });
});
