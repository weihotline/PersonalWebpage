$(function(){
  $("#hello h1").typed({
    strings: ["I am Weih Li"],
    typeSpeed: 40,
    startDelay: 800,
    showCursor: false
  });

  $("#hello h2").typed({
    strings: ["^2000A MOTIVATED SOFTWARE ENGINEER"],
    typeSpeed: 40,
    backSpeed: 30,
    showCursor: false
  });

  // ruby on rails chart
  var doughnutData = [
    {
      value: 70,
      color:"#74cfae"
    },
    {
      value : 30,
      color : "#3c3c3c"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("rubyonrails").getContext("2d")).Doughnut(doughnutData);

  // javascript chart
  doughnutData = [
      {
        value: 90,
        color:"#74cfae"
      },
      {
        value : 10,
        color : "#3c3c3c"
      }
    ];
  myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

  // swift chart
  doughnutData = [
      {
        value: 65,
        color:"#74cfae"
      },
      {
        value : 35,
        color : "#3c3c3c"
      }
    ];
  myDoughnut = new Chart(document.getElementById("swift").getContext("2d")).Doughnut(doughnutData);

  // backbone.js chart
  doughnutData = [
      {
        value: 50,
        color:"#74cfae"
      },
      {
        value : 50,
        color : "#3c3c3c"
      }
    ];
  myDoughnut = new Chart(document.getElementById("photoshop").getContext("2d")).Doughnut(doughnutData);

  // Dropdown setup
  var dd = new DropDown( $('#dd') );

  $(document).click(function() {
    $('.wrapper-dropdown').removeClass('active');
  });

  // Scrolling Effect By CSS-TRICKS
  $('a[href^=#]:not([href=#])').not('a[href=#blogsModal]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
        location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
