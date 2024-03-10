

let canvas = document.getElementById("canvasChart");

let ctx = canvas.getContext("2d");

//Json data
var chartData = {
  "Company": "Apple Inc",
  "Year": 2022,
  "sales_data":{
    "January": 100000,
    "February": 80000,
    "March": 150000,
    "April": 140000,
    "May": 160000,
    "June": 200000,
    "July": 250000,
    "August": 150000,
    "September": 100000,
    "October": 119000,
    "November": 10000,
    "December": 170000

  }
}



//create a function to draw a bar chart
function draw_chart(data) {
  
  ctx.clearRect(0,0,canvas.width, canvas.height);

  //dimensions
  let chartWidth = canvas.width - 200;
  let chartHeight = canvas.height -200;

  let barWidth = 30;
  let barSpacing = 20;
  let startX = 100;
  let startY = 100;


  //x-axis
  ctx.beginPath();
  ctx.moveTo(startX, startY + chartHeight);
  ctx.lineTo(startX + chartWidth, startY + chartHeight);
  ctx.stroke();

  //y-axis
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX, startY + chartHeight);
  ctx.stroke();

  //draw labels and bars
  let months = Object.keys(data.sales_data);
  let values = Object.values(data.sales_data);
  ctx.fillStyle = "#393c85";

  //use this forEach function to design a barchart 
  months.forEach(function(month, i) {
    let x = startX + i * (barWidth + barSpacing);
    let y = startY + chartHeight - (values[i] / 1000) * chartHeight;
    ctx.fillRect(x, y, barWidth, (values[i] / 1000) * chartHeight);
    ctx.fillText(month.slice(0, 3), x, startY + chartHeight + 20);
    ctx.fillText(values[i], x, y - 10);
});


  //draw y-axis label
  ctx.save();
  ctx.translate(20, startY + chartHeight / 2);
  ctx.rotate(-Math.PI/2);
  ctx.textAlign = "center";
  ctx.fillText("Apple Inc. Sales (in thousands)", 0,0);
  ctx.restore();

  //add title
  ctx.textAlign = "centre";
  ctx.fillText("Sales data for "+ data.Company + " in " + data.Year, canvas.width / 2, 50);

}

draw_chart(chartData);