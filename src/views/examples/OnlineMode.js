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
import CustomDropDown from "components/DropDowns/CustomDropDown";
import { getInference, getFieldsModels } from "api/InferenceAPI";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";

import { Line, Bar } from "react-chartjs-2";

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
import { trackPromise } from "react-promise-tracker";
import { getTweets } from "api/scrapAPI";
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";
import SummaryPie from "components/Common/SummaryPie";

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
    },
  ],
};

function OnlineMode() {
  const [scrappingID, setScrappingID] = useState(null);
  const [inferenceData, setInferenceData] = useState(null);
  const [fieldsModels, setFiledsModels] = useState(null);
  const [summarydata, setSummaryData] = useState(null);

  const LoadingIndicator = (props) => {
    const { promiseInProgress } = usePromiseTracker({
      area: props.area,
      delay: 0,
    });

    return (
      promiseInProgress && (
        <div
          style={{
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader type="ThreeDots" color="#6477e5" height="100" width="100" />
        </div>
      )
    );
  };

  function onScrappingSubmit(startDate, endDate, Tags, countSliderValue) {
    trackPromise(
      getTweets(countSliderValue, startDate, endDate, Tags)
        .then((response) => {
          console.log(response.data);
          setScrappingID(response.data.session_token);
          toast(
            "Great ! we scrapped " +
              response.data.dataframe_length +
              " Tweets. Let's use them for inference"
          );
        })
        .catch((error) => {
          console.log(error);
          toast("Backend error");
        }),
      "scrap_area"
    );
  }

  function classifySubmit(path) {
    trackPromise(
      getInference(scrappingID, path)
        .then((response) => {
          setInferenceData(JSON.parse(response.data.dataframe));
          toast("Great ! We have your data predictions !!");
          setSummaryData(JSON.parse(response.data.summary));
          console.log(response.data.summary);
        })
        .catch((error) => {
          console.log(error);
        }),
      "download_area"
    );
  }

  useEffect(() => {
    getFieldsModels()
      .then((response) => {
        setFiledsModels(response.data);
      })
      .then((error) => {
        console.log(error);
      });
    // code to run on component mount
  }, []);

  return (
    <>
      <ToastContainer />

      <UserHeader />
      {/* Page content */}
      <Container className="mt--9" fluid>
        {/* Scrapping Card  */}
        <Row className="mt-0 justify-content-center">
          <Col className="order-xl-3" xl="10">
            <ScrappingCard OnSubmit={onScrappingSubmit}></ScrappingCard>
          </Col>
        </Row>
        <LoadingIndicator area="scrap_area" />

        {/* Choose model Card  */}

        {scrappingID && (
          <Row className="mt-5 justify-content-center">
            <Col className="order-xl-3" xl="10">
              <ChooseModelCard
                Fields_models={fieldsModels}
                handleSubmit={classifySubmit}
              ></ChooseModelCard>
            </Col>
          </Row>
        )}

        <LoadingIndicator area="download_area" />

        {/* Inference Table Card */}
        {inferenceData && (
          <Row className="mt-5 justify-content-center">
            <Col className="order-xl-3" xl="10">
              <InferenceTable data={inferenceData}></InferenceTable>
            </Col>
          </Row>
        )}

        <Row className="mt-5  justify-content-center">
          <Col className=" order-xl-3" xl="5">
            {summarydata && <SummaryPie data={summarydata}></SummaryPie>}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default OnlineMode;