/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import CustomDropDown from "components/DropDowns/CustomDropDown";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Dropdown,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import KeywordInput from "components/KeywordInput";
import RangePicker from "components/RangePicker";
import CountSlider from "components/CountSlider";
import LangDropDawn from "components/LangDropDawn";
import InferenceTable from "components/InferenceTable";
import ScrappingCard from "components/ScrappingCard";

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
