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
import CustomDropDown from "../../components/DropDowns/CustomDropDown";

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

function Profile() {
  const [tags, SetTags] = useState([]);

  function tagsChangeHandler(value) {
    SetTags(value);
  }

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  function dateRangeChangeHandler(item) {
    setDateRange([item.selection]);
  }

  const [countSliderValue, setCountSliderValue] = useState(500);

  function countSliderChangeHadnler(changeEvent) {
    setCountSliderValue(changeEvent.target.value);
  }

  function submitScrapping() {
    let start_date = dateRange[0].startDate.toLocaleDateString();
    let end_date = dateRange[0].endDate.toLocaleDateString();
    console.log(tags);
  }

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--9" fluid>
        <Row className="mt-0 justify-content-center">
          <Col className="order-xl-3" xl="10">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Inputs</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h2 className="display-4 mb-4">
                    Enter Keywords Period and number <br />
                    of tweets for Scrapping
                  </h2>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-tags"
                          >
                            Tags
                          </label>
                          <KeywordInput
                            tags={tags}
                            handleChange={tagsChangeHandler}
                            className="form-control-alternative"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-period"
                          >
                            Period
                          </label>
                          <RangePicker
                            dateRange={dateRange}
                            changeHandler={dateRangeChangeHandler}
                          ></RangePicker>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Number of samples
                          </label>
                          <CountSlider
                            value={countSliderValue}
                            changeHandler={countSliderChangeHadnler}
                          ></CountSlider>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <div className="d-flex flex-row-reverse">
                    <div className="p-2">
                      <Button color="primary">Scrap Tweets</Button>{" "}
                    </div>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5 justify-content-center">
          <Col className="order-xl-3" xl="10">
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
                    <CustomDropDown fields={Fields_models}></CustomDropDown>
                  </Col>
                </Row>
                <div className="d-flex flex-row-reverse">
                  <div className="p-2">
                    <Button color="primary" onClick={submitScrapping}>
                      Classify
                    </Button>{" "}
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center">
          <Col className="order-xl-3" xl="10">
            <InferenceTable></InferenceTable>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
