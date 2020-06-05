import React, { useState, useEffect } from "react";
import { getInference, getFieldsModels } from "api/InferenceAPI";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import UserHeader from "components/Headers/UserHeader.js";
import InferenceTable from "components/InferenceTable";
import ScrappingCard from "components/ScrappingCard";
import ChooseModelCard from "components/ChooseModelCard";
import ChooseFieldCard from "components/ChooseFieldCard";
import { trackPromise } from "react-promise-tracker";
import { getTweets } from "api/scrapAPI";

import SummaryPie from "components/Common/SummaryPie";

function OnlineMode() {
  const [scrappingID, setScrappingID] = useState(null);
  const [inferenceData, setInferenceData] = useState(null);
  const [fields, setFields] = useState(null);
  const [fieldsAndModels, setFieldsAndModels] = useState(null);
  const [currentField, setCurrentField] = useState(null);
  const [classifTasks, setClassifTasks] = useState(null);
  const [summarydata, setSummaryData] = useState(null);
  const onlineHeaderText =
    " Search for tweets using certain words and tags for scrapping and \nclassification using our pretrained models";

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

  function chooseField(field) {
    setCurrentField(field);
    console.log(field);
    setClassifTasks(fieldsAndModels[field]);
  }

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
        console.log(
          Object.values(response.data[Object.keys(response.data)[0]])
        );
        console.log(response.data[Object.keys(response.data)[0]]);
        setFields(Object.keys(response.data));
        setCurrentField(Object.keys(response.data)[0]);
        setClassifTasks(
          Object.values(response.data[Object.keys(response.data)[0]])
        );
        setFieldsAndModels(response.data);
      })
      .then((error) => {
        console.log(error);
      });
    // code to run on component mount
  }, []);

  return (
    <>
      <ToastContainer />

      <UserHeader text={onlineHeaderText} />
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
              <ChooseFieldCard
                fields={fields}
                handleSubmit={chooseField}
              ></ChooseFieldCard>
            </Col>
          </Row>
        )}

        {scrappingID && classifTasks && (
          <Row className="mt-5 justify-content-center">
            <Col className="order-xl-3" xl="10">
              <ChooseModelCard
                Fields_models={classifTasks}
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
