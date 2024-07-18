import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const TransactionChart = ({ data = [] }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && data.length > 0) {
      createChart(chartRef.current, data);
    }
  }, [data]);

  const createChart = (container, data) => {
    // Clear the container before creating a new chart
    d3.select(container).selectAll("*").remove();

    // Set up the dimensions of the chart
    const width = 400;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 20, left: 40 };

    // Create the SVG container
    const svg = d3
      .select(container)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create the scales
    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    // Create the color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Set the domains for the scales
    x.domain(data.map((d) => d.type));
    y.domain([0, d3.max(data, (d) => d.value)]);

    // Create the bars
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.type))
      .attr("width", x.bandwidth())
      .attr("y", (d) => y(d.value))
      .attr("height", (d) => height - y(d.value))
      .attr("fill", (d) => color(d.type));

    // Add the x Axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    // Add the y Axis
    svg.append("g").call(d3.axisLeft(y));
  };

  return <div ref={chartRef} />;
};

export default TransactionChart;
