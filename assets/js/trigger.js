$(function(){
    $("#hello h1").typed({
      strings: ["I am Weih Li"],
      typeSpeed: 20,
      startDelay: 500,
      showCursor: false
    });

    $("#hello h2").typed({
      strings: ["A HANDSOME", "A TALENTED SOFTWARE ENGINEER"],
      typeSpeed: 20,
      backSpeed: 20,
      startDelay: 1200,
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
});
