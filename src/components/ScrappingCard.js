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
import React, { useState, useEffect } from "react";

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

import KeywordInput from "components/KeywordInput";
import RangePicker from "components/RangePicker";
import CountSlider from "components/CountSlider";

function ScrappingCard(props) {
  const [tags, SetTags] = useState([]);
  const [countSliderValue, setCountSliderValue] = useState(500);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [scrapButton, setScrapButton] = useState(false);

  useEffect(() => {
    setScrapButton(tags.length == 0);
  }, [tags]);

  function tagsChangeHandler(value) {
    SetTags(value);
  }

  function dateRangeChangeHandler(item) {
    setDateRange([item.selection]);
  }

  function countSliderChangeHadnler(changeEvent) {
    setCountSliderValue(changeEvent.target.value);
  }

  function submitScrapping() {
    let start_date = dateRange[0].startDate.toLocaleDateString();
    let end_date = dateRange[0].endDate.toLocaleDateString();
  }

  return (
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
                  <label className="form-control-label" htmlFor="input-tags">
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
                  <label className="form-control-label" htmlFor="input-period">
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
              <Button
                color="primary"
                disabled={scrapButton}
                onClick={() => {
                  props.OnSubmit(
                    dateRange[0].startDate.toLocaleDateString(),
                    dateRange[0].endDate.toLocaleDateString(),
                    tags,
                    countSliderValue
                  );
                }}
              >
                Scrap Tweets
              </Button>{" "}
            </div>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
}

export default ScrappingCard;
