import React, { useState } from "react";
import CustomDropDown from "components/DropDowns/CustomDropDown";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Row,
  Col,
} from "reactstrap";
// core components

function ClassificationResult(props) {
  return (
    <Card className="bg-secondary shadow">
      <CardHeader className="bg-white border-0">
        <Row className="align-items-center">
          <Col xs="8">
            <h3 className="mb-0">Model</h3>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <Row>
          <Col lg="8">
            <h2 className="display-3">
              The tweet is <b>{props.result}</b>{" "}
            </h2>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default ClassificationResult;
