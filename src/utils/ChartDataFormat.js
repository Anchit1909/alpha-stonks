export const ChartDataFormat = (chartData, objectKey) => {
  // Extract the "Weekly Adjusted Time Series" data
  const googleChartData = [];
  if (chartData && chartData[objectKey]) {
    const weeklyData = chartData["Weekly Adjusted Time Series"];

    // Create an array to store the converted data
    googleChartData.push(["Date", "Open", "High", "Low", "Close"]);

    // Iterate through the data and convert it

    for (const date in weeklyData) {
      const dataPoint = weeklyData[date];
      const day = date; // Assuming the date is in the desired format

      // Extract values and convert them to numbers
      const a = parseFloat(dataPoint["1. open"]);
      const b = parseFloat(dataPoint["2. high"]);
      const c = parseFloat(dataPoint["3. low"]);
      const d = parseFloat(dataPoint["4. close"]);

      // Add the data to the result array
      googleChartData.push([day, a, b, c, d]);
    }
  }

  return googleChartData;
};
