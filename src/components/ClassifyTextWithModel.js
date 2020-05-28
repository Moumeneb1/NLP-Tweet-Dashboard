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

function ClassifyTextWithModel(props) {
  const [pathToFieldModel, setPathToFieldModel] = useState("");
  const [tweetInput, setTweetInput] = useState("");

  function clickHandler(FieldModel) {
    setPathToFieldModel(FieldModel);
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
            <FormGroup>
              <label className="form-control-label">Tweet Text</label>
              <Input
                className="form-control-alternative"
                id="input-tweet"
                placeholder="Tweet"
                type="text"
                onChange={(e) => setTweetInput(e.target.value)}
              />
            </FormGroup>
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
              disabled={!pathToFieldModel || !tweetInput}
              onClick={(e) => {
                props.handleSubmit(pathToFieldModel, tweetInput);
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

export default ClassifyTextWithModel;
