# belly-button-challenge

## Belly Button Biodiversity Dashboard - js
This JavaScript code visualizes bacterial data from belly button swab samples. It allows users to select a test subject ID from a dropdown menu and updates two interactive Plotly.js charts as well as a metadata panel with information about that sample.

The dashboard displays data from a samples.json file. When the page first loads, it populates the dropdown menu with sample IDs from the JSON and initializes the plots and metadata with the first sample. An onchange event handler updates everything when the user selects a new ID.

The initPlots() function creates a horizontal bar chart showing the top 10 bacterial operaional taxonomic units (OTUs) in the selected sample, with sample value determining bar size. A bubble chart visualizes all OTUs, with bubble color indicating OTU ID and size indicating sample value.

The metaData() function displays various metadata fields for the selected sample by looping through the keys and values and inserting paragraph elements.

In summary, this code allows for dynamic and interactive exploration of bacterial data through customizable data visualizations and metadata display. The dashboard provides insights into both the diversity and relative quantity of microbes found in study participants.

Here is a half page README for the HTML page in the attachment:

## Belly Button Biodiversity Dashboard - html

This HTML page provides the layout and structure for an interactive dashboard visualizing bacterial data from belly button samples. Key elements:

### Header
- Title, subtitles, and intro text explaining the dashboard purpose
- Styled with Bootstrap's jumbotron and custom colors

### Left sidebar
- Dropdown menu to select test subject ID 
- Metadata panel dynamically populated from JSON data
- Styled with Bootstrap's well, panel components

### Main section 
- Placeholders for three Plotly chart divs (bar, gauge, bubble) to visualize sample data
- Powered by app.js data parsing and chart generation

### Resources
- Bootstrap for responsive grid layout and styled components
- Plotly.js and D3.js libraries for data visualization 
- app.js handles data loading, parsing, interactivity

In summary, this HTML and CSS provides the visual framework into which the app.js JavaScript dynamically loads metadata and visualizations for an interactive dashboard exploring the diversity of bacterial species in the sampled data.