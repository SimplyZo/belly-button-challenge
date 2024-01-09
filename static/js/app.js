// Belly Button Biodiversity - Plotly.js
//samples.json> got data for names, metadata, samples
  
// Fetch the JSON data 
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(data => {

  // Populate dropdown menu with sample IDs
  let dropdown = d3.select("#selDataset");
  data.names.forEach(id => {
    dropdown.append("option").text(id).property("value"); 
  });

  // Set initial plots
  initPlots(data.samples[0]); 
  metaData(data.metadata[0]);

  // Update plots when dropdown selection changes
  dropdown.on("change", () => {
    let sample = data.samples.filter(s => s.id === dropdown.property("value"))[0];
    initPlots(sample);
    metaData(data.metadata.filter(m => m.id == sample.id)[0]);
  });

});

function initPlots(sample) {

  // Bar chart
  let top10 = sample.sample_values.slice(0, 10).reverse();
  let top10otu = sample.otu_ids.slice(0, 10).reverse().map(id => `OTU ${id}`); 
  let trace1 = {
    x: top10,
    y: top10otu,
    type: "bar",
    orientation: "h",
    text: sample.otu_labels
  };

  let layout1 = {
    height: 750, 
    width: 600
  };
  
  Plotly.newPlot("bar", [trace1], layout1); 

  // Bubble chart 
  let trace2 = {
    x: sample.otu_ids,
    y: sample.sample_values,
    mode: 'markers',
    marker: {
      size: sample.sample_values,
      color: sample.otu_ids
    },
    text: sample.otu_labels
  };

  let layout2 = {
    height: 500,
    width: 1000
  };
  
  Plotly.newPlot('bubble', [trace2], layout2);
  
}

function metaData(metadata) {

  // Display metadata
  d3.select("#sample-metadata").html("");
  Object.entries(metadata).forEach(([key, value]) => {  
    d3.select("#sample-metadata").append("p").text(`${key}: ${value}`);
  });

}