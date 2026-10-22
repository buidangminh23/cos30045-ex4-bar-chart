// GenAI: steps follow the Exercise 4.7 brief; drafted with Claude Opus 5.5 and reviewed by me
const svg = d3.select(".responsive-svg-container")
  .append("svg")
    .attr("viewBox", "0 0 600 700");

d3.csv("data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count
  };
}).then(data => {
  data.sort((a, b) => b.count - a.count);

  console.log(data);
  console.log(data.length);
  console.log(d3.max(data, d => d.count));
  console.log(d3.min(data, d => d.count));
  console.log(d3.extent(data, d => d.count));

  drawBarChart(data);
});

const xScale = d3.scaleLinear()
  .domain([0, 1200])
  .range([0, 400]);

const drawBarChart = data => {
  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, 700])
    .padding(0.2);

  const barAndLabel = svg
    .selectAll("g")
    .data(data)
    .join("g")
      .attr("transform", d => `translate(0, ${yScale(d.brand)})`);

  barAndLabel
    .append("rect")
      .attr("class", d => `bar bar-${d.count}`)
      .attr("width", d => xScale(d.count))
      .attr("height", yScale.bandwidth())
      .attr("x", 120)
      .attr("y", 0)
      .attr("fill", "#eeaa46");

  barAndLabel
    .append("text")
      .text(d => d.brand)
      .attr("x", 112)
      .attr("y", yScale.bandwidth() / 2 + 5)
      .attr("text-anchor", "end")
      .style("font-size", "13px");

  barAndLabel
    .append("text")
      .text(d => d.count)
      .attr("x", d => 120 + xScale(d.count) + 5)
      .attr("y", yScale.bandwidth() / 2 + 5)
      .style("font-size", "13px");
};
