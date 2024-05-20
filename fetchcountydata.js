
// Replace 'your-github-username' and 'your-repo' with yourGitHub username and repository name
const csvUrl = 'https://raw.githubusercontent.com/DarrellOwensRCD/census2022/master/data/county_stats_acs2022.csv';

// Function to fetch and process the CSV file
async function fetchcountydata() {
  try {
    const response = await fetch(csvUrl);
    const csvData = await response.text();
    // Split the CSV data into rows
    const rows = csvData.split('\n');
    // Remove headers
    rows.shift();
    // Array to store list items
    const dataDictionary = {};

    // Iterate through rows and create dictionary pairs
    rows.forEach(row => {
      const columns = row.split(','); // Split row by comma (CSV delimiter)
      const key = columns[0].trim(); // First column as key
      const values = columns.slice(1).map(value => value.trim()); // Remaining columns as values
      dataDictionary[key] = values; // Store key-value pair
    });
    return dataDictionary;
  } catch (error) {
    console.error('Error fetching or processing CSV:', error);
    return NULL;
  }
}
