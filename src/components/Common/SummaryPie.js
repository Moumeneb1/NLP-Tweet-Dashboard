import { Card, CardHeader, CardBody, Row } from "reactstrap";
import React from "react";
import { Pie } from "react-chartjs-2";
var randomColor = require("randomcolor");

function SummaryPie(props) {
  function PrepareData(data) {
    let data_ = {
      labels: Object.keys(data),
      datasets: [
        {
          data: Object.values(data),
        },
      ],
    };
    return Randomcolors(data_);
  }
  function Randomcolors(data) {
    let colors = randomColor({
      count: 3,
      hue: "pink",
    });
    data.datasets[0]["backgroundColor"] = colors;
    data.datasets[0]["hoverBackgroundColor"] = colors;
    return data;
  }
  return (
    <Card className="bg-gradient-default shadow">
      <CardHeader className="bg-transparent">
        <Row className="align-items-center">
          <div className="col">
            <h6 className="text-uppercase text-light ls-1 mb-1">Overview</h6>
            <h2 className="text-white mb-0">Classes Distribution</h2>
          </div>
        </Row>
      </CardHeader>
      <CardBody>
        {/* Chart */}
        <Pie data={PrepareData(props.data)} />
      </CardBody>
    </Card>
  );
}

export default SummaryPie;
