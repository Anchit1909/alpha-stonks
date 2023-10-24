export const ChartFilter = (filter, initialData) => {
  const today = new Date();
  let newData = [...initialData];

  switch (filter) {
    case "24hr":
      // Filter data for the last 24 hours
      const twentyFourHoursAgo = new Date(today);
      twentyFourHoursAgo.setDate(today.getDate() - 1);

      newData = newData.filter((item) => {
        const itemDate = new Date(item[0]);
        return itemDate >= twentyFourHoursAgo && itemDate <= today;
      });
      break;

    case "7days":
      // Filter data for the last 7 days
      const sevenDaysAgo = new Date(today);
      sevenDaysAgo.setDate(today.getDate() - 7);

      newData = newData.filter((item) => {
        const itemDate = new Date(item[0]);
        return itemDate >= sevenDaysAgo && itemDate <= today;
      });
      break;

    case "1month":
      // Filter data for the last 1 month
      const oneMonthAgo = new Date(today);
      oneMonthAgo.setMonth(today.getMonth() - 1);

      newData = newData.filter((item) => {
        const itemDate = new Date(item[0]);
        return itemDate >= oneMonthAgo && itemDate <= today;
      });
      break;

    case "1year":
      // Filter data for the last 1 year
      const oneYearAgo = new Date(today);
      oneYearAgo.setFullYear(today.getFullYear() - 1);

      newData = newData.filter((item) => {
        const itemDate = new Date(item[0]);
        return itemDate >= oneYearAgo && itemDate <= today;
      });
      break;

    case "10years":
      // Filter data for the last 10 years
      const tenYearsAgo = new Date(today);
      tenYearsAgo.setFullYear(today.getFullYear() - 10);

      newData = newData.filter((item) => {
        const itemDate = new Date(item[0]);
        return itemDate >= tenYearsAgo && itemDate <= today;
      });
      break;

    case "20years":
      // Filter data for the last 20 years
      const twentyYearsAgo = new Date(today);
      twentyYearsAgo.setFullYear(today.getFullYear() - 20);

      newData = newData.filter((item) => {
        const itemDate = new Date(item[0]);
        return itemDate >= twentyYearsAgo && itemDate <= today;
      });
      break;

    default:
      // Use the full data if no filter matches
      newData = initialData;
      break;
  }

  newData.unshift(["Date", "Open", "High", "Low", "Close"]);
  return newData;
};
