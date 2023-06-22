function createPieChart(canvasId, data) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');

  // Set the radius and center of the pie chart
  const radius = Math.min(canvas.width, canvas.height) / 2;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Calculate the total value of all data points
  const total = data.reduce((sum, point) => sum + point.value, 0);

  // Calculate the total percentage of all data points
  const totalPercentage = data.reduce((sum, point) => sum + (point.value / total) * 100, 0);

  // Start angle for drawing each data point slice
  let startAngle = 0;

  // Iterate over the data points and draw each slice
  data.forEach((point) => {
    // Calculate the percentage for the current data point
    const percentage = (point.value / total) * 100;
    // Calculate the angle for the current slice based on the percentage
    const sliceAngle = (percentage / 100) * 2 * Math.PI;

    // Set the fill color for the current slice
    context.fillStyle = point.color;

    // Draw the slice
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
    context.closePath();
    context.fill();

    // Update the start angle for the next slice
    startAngle += sliceAngle;
  });
}

const dataSets = {
  chart1: [
    { value: 50, color: '#ff0000' },
    { value: 50, color: '#c5b4e3' }
  ],
  chart2: [
    { value: 20, color: 'purple' },
    { value: 30, color: 'orange' },
    { value: 50, color: 'yellow' }
  ],
  // Add more data sets as needed for other chart IDs
};

function getDataForChart(chartId) {
  return dataSets[chartId] || [];
}

document.addEventListener('DOMContentLoaded', () => {
  const chartIds = ['chart1', 'chart2', 'chart3', 'chart4', 'chart5'];

  chartIds.forEach((chartId) => {
    const chartDiv = document.getElementById(chartId);

    if (chartDiv) {
      const canvasId = `${chartId}-canvas`;
      const canvas = document.createElement('canvas');
      canvas.id = canvasId;
      canvas.width = 250;
      canvas.height = 250;
      chartDiv.appendChild(canvas);

      const data = getDataForChart(chartId);

      createPieChart(canvasId, data);
    }
  });
});
