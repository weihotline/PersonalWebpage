$(function() {
  function render(tmplName, tmplData) {
    var renderedHTML;

    if (!render.tmplCache) {
      render.tmplCache = {};
    }

    // if the page has never been rendered yet, make an ajax request for the template
    if (!render.tmplCache[tmplName]) {
      var tmplDir = 'assets/templates';
      var tmplURL = [tmplDir, '/', tmplName, '.html'].join('');

      $.ajax({
        url: tmplURL,
        type: 'GET',
        dataType: 'html',
        success: function(tmplResp) {
          render.tmplCache[tmplName] = _.template(tmplResp);
          renderedHTML = render.tmplCache[tmplName](tmplData);
          $('.modal-body').html(renderedHTML);
        }
      });
    } else {
      renderedHTML = render.tmplCache[tmplName](tmplData);
      $('.modal-body').html(renderedHTML);
    }
  }

  // render the welcome page
  render('tmpl-0', {});

  // add event delegate to dropdown menus
  $('.dropdown').on('click', 'li', function(e) {
    e.preventDefault();
    var id = e.currentTarget.getAttribute('data-id');
    var tmplName = "tmpl-" + id;
    render(tmplName, {});
  });
});
