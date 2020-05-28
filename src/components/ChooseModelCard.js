import React, { useState } from "react";
import CustomDropDown from "components/DropDowns/CustomDropDown";

// reactstrap components
import { Button, Card, CardHeader, CardBody, Row, Col } from "reactstrap";
// core components

function ChooseModelCard(props) {
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
            <h1>
              {" "}
              Choose between a variety of finetuned models for inference{" "}
            </h1>
          </Col>
          <Col lg="6">
            <CustomDropDown
              fields={props.Fields_models}
              clickHandler={clickHandler}
            ></CustomDropDown>
          </Col>
        </Row>
        <div className="d-flex flex-row-reverse">
          <div className="p-2">
            <Button
              color="primary"
              disabled={!pathToFieldModel}
              onClick={(e) => {
                props.handleSubmit(pathToFieldModel);
              }}
            >
              Classify
            </Button>{" "}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default ChooseModelCard;
