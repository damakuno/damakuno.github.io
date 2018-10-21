let first_load_time = null;

window.onload = () => {
    let local_data = [];
    let curDate = new Date();
    let json_data;
    let data = {
        time_axis: new Date(),
        time_elapsed: 0,
        temperature: 0,
        acceleration: 0,
        lux: 0
    }

    let emElapsed = document.querySelector('#emElapsed');
    let temp = document.querySelector('#temp');
    let acc = document.querySelector('#acc');
    let lux = document.querySelector('#lux');

    if (sessionStorage.length < 1) {
        json_data = JSON.stringify(local_data);
        sessionStorage.setItem('data', json_data);
        sessionStorage.setItem('first_load_time', null);        
    } 

    first_load_time = sessionStorage.getItem('first_load_time');

    if (first_load_time == null || first_load_time == "null") {
        first_load_time = new Date();
        sessionStorage.setItem('first_load_time', first_load_time);
    }    

    local_data = JSON.parse(sessionStorage.getItem('data'));
      
    if (local_data.length > 0 )
        data.time_elapsed = curDate - new Date(first_load_time);
    
    if (local_data.length > 10) {
        local_data.shift();
    }

    data.time_axis = curDate;
    data.temperature = parseFloat(temp.innerHTML);
    data.acceleration = parseFloat(acc.innerHTML);
    data.lux = parseInt(lux.innerHTML);

    local_data.push(data);

    json_data = JSON.stringify(local_data);

    sessionStorage.setItem('data', json_data);

    let div_item_d = document.querySelector('.item-d');
    let div_item_e = document.querySelector('.item-e');
    let div_item_f = document.querySelector('.item-f');
    drawChart(local_data, div_item_d);
    drawChart2(local_data, div_item_e);
    drawChart3(local_data, div_item_f);

}
const drawChart = (data, con_div) => {
    let svgWidth = con_div.clientWidth, svgHeight = con_div.clientHeight;
    let margin = { top: 20, right: 20, bottom: 30, left: 50 };
    let width = svgWidth - margin.left - margin.right;
    let height = svgHeight - margin.top - margin.bottom;
    let svg = d3.select('#svg-temp')
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    let g = svg.append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")"
        );

    let x = d3.scaleTime().rangeRound([0, width]);
    let y = d3.scaleLinear().rangeRound([height, 0]);

    let line = d3.line()
        .x(function (d) { return x(d.time_elapsed) })
        .y(function (d) { return y(d.temperature) })
    x.domain(d3.extent(data, function (d) { return d.time_elapsed}));
    y.domain(d3.extent(data, function (d) { return d.temperature }));

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .select(".domain")
        .remove();

    g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Degrees (°C)");

    g.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 1.5)
    .attr("d", line);
}


const drawChart2 = (data, con_div) => {
    let svgWidth = con_div.clientWidth, svgHeight = con_div.clientHeight;
    let margin = { top: 20, right: 20, bottom: 30, left: 50 };
    let width = svgWidth - margin.left - margin.right;
    let height = svgHeight - margin.top - margin.bottom;
    let svg = d3.select('#svg-acc')
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    let g = svg.append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")"
        );

    let x = d3.scaleTime().rangeRound([0, width]);
    let y = d3.scaleLinear().rangeRound([height, 0]);

    let line = d3.line()
        .x(function (d) { return x(d.time_elapsed) })
        .y(function (d) { return y(d.acceleration) })
    x.domain(d3.extent(data, function (d) { return d.time_elapsed}));
    y.domain(d3.extent(data, function (d) { return d.acceleration }));

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .select(".domain")
        .remove();

    g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Acceleration (g)");

    g.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 1.5)
    .attr("d", line);
}

const drawChart3 = (data, con_div) => {
    let svgWidth = con_div.clientWidth, svgHeight = con_div.clientHeight;
    let margin = { top: 20, right: 20, bottom: 30, left: 50 };
    let width = svgWidth - margin.left - margin.right;
    let height = svgHeight - margin.top - margin.bottom;
    let svg = d3.select('#svg-lux')
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    let g = svg.append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")"
        );

    let x = d3.scaleTime().rangeRound([0, width]);
    let y = d3.scaleLinear().rangeRound([height, 0]);

    let line = d3.line()
        .x(function (d) { return x(d.time_elapsed) })
        .y(function (d) { return y(d.lux) })
    x.domain(d3.extent(data, function (d) { return d.time_elapsed}));
    y.domain(d3.extent(data, function (d) { return d.lux }));

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .select(".domain")
        .remove();

    g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Intensity (lux)");

    g.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 1.5)
    .attr("d", line);
}