import React, { useState } from "react";
import CustomDropDown from "components/DropDowns/CustomDropDown";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import {
  RadioGroup,
  RadioButton,
  ReversedRadioButton,
} from "react-radio-buttons";
// core components

function ChooseFieldCard(props) {
  const [pathToFieldModel, setPathToFieldModel] = useState("");

  function clickHandler(FieldModel) {
    setPathToFieldModel(FieldModel);
    console.log(FieldModel);
  }

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
          <Col lg="6">
            <h1> We Trained our models on a a variaty of fileds </h1>
          </Col>
          <Col lg="6">
            {props.fields && (
              <RadioGroup
                onChange={(e) => {
                  props.handleSubmit(e);
                }}
              >
                {props.fields.map((field) => (
                  <RadioButton pointColor="#5e72e4" value={field}>
                    {field}
                  </RadioButton>
                ))}
              </RadioGroup>
            )}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default ChooseFieldCard;
