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
import { getInference } from "api/InferenceAPI";

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
import Fields_models from "assets/Data/Fields_model";
import ScrappingCard from "components/ScrappingCard";
import ChooseModelCard from "components/ChooseModelCard";
import InferenceData from "assets/Data/InfereceData";
import { getTweets } from "api/scrapAPI";

function Profile() {
  const [scrappingID, setScrappingID] = useState(null);
  const [inferenceData, setInferenceData] = useState(null);

  function onScrappingSubmit(startDate, endDate, Tags, countSliderValue) {
    getTweets(countSliderValue, startDate, endDate, Tags)
      .then((response) => {
        console.log(response.data);
        setScrappingID(response.data.session_token);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function classifySubmit(path) {
    getInference(scrappingID, path)
      .then((response) => {
        setInferenceData(JSON.parse(response.data.dataframe));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--9" fluid>
        {/* Scrapping Card  */}
        <Row className="mt-0 justify-content-center">
          <Col className="order-xl-3" xl="10">
            <ScrappingCard OnSubmit={onScrappingSubmit}></ScrappingCard>
          </Col>
        </Row>

        {/* Choose model Card  */}

        <Row className="mt-5 justify-content-center">
          <Col className="order-xl-3" xl="10">
            <ChooseModelCard
              Fields_models={Fields_models}
              handleSubmit={classifySubmit}
            ></ChooseModelCard>
          </Col>
        </Row>

        {/* Inference Table Card */}
        <Row className="mt-5 justify-content-center">
          <Col className="order-xl-3" xl="10">
            <InferenceTable data={inferenceData}></InferenceTable>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
