function createPieChart(canvasId, data) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');

  // Set the radius and center of the pie chart
  const radius = Math.min(canvas.width, canvas.height) / 2;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Calculate the total value of all data points
  const total = data.reduce((sum, point) => sum + point.value, 0);

  // Start angle for drawing each data point slice
  let startAngle = 0;

  // Iterate over the data points and draw each slice
  data.forEach((point) => {
    // Calculate the angle for the current slice based on its value
    const sliceAngle = (point.value / total) * 2 * Math.PI;

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

// Array of data sets for the 10 pie charts
const dataSets = [
  // Men's Game 1
  [
    { value: 30, color: 'red' },
    { value: 50, color: 'blue' },
    { value: 20, color: 'green' }
  ],
  // Men's Game 2
  [
    { value: 10, color: 'purple' },
    { value: 40, color: 'orange' },
    { value: 50, color: 'yellow' }
  ],
  // Men's Game 3
  [
    { value: 30, color: 'red' },
    { value: 50, color: 'blue' },
    { value: 20, color: 'green' }
  ],
  // Men's Game 4
  [
    { value: 10, color: 'purple' },
    { value: 40, color: 'orange' },
    { value: 50, color: 'yellow' }
  ],
  // Men's Game 5
  [
    { value: 30, color: 'red' },
    { value: 50, color: 'blue' },
    { value: 20, color: 'green' }
  ],
  // Men's Game 6
  [
    { value: 10, color: 'purple' },
    { value: 40, color: 'orange' },
    { value: 50, color: 'yellow' }
  ],
  // Men's Game 7
  [
    { value: 30, color: 'red' },
    { value: 50, color: 'blue' },
    { value: 20, color: 'green' }
  ],
  // Men's Game 8
  [
    { value: 10, color: 'purple' },
    { value: 40, color: 'orange' },
    { value: 50, color: 'yellow' }
  ],
  // Men's Game 9
  [
    { value: 30, color: 'red' },
    { value: 50, color: 'blue' },
    { value: 20, color: 'green' }
  ],
  // Men's Game 10
  [
    { value: 10, color: 'purple' },
    { value: 40, color: 'orange' },
    { value: 50, color: 'yellow' }
  ],
];

// Create a pie chart for each data set
dataSets.forEach((data, index) => {
  const canvasId = `chart${index + 1}`;
  const canvas = document.createElement('canvas');
  canvas.id = canvasId;
  canvas.width = 400;
  canvas.height = 400;
  document.body.appendChild(canvas);

  createPieChart(canvasId, data);
});
