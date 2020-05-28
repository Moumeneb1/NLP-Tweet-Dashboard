import React, { useState, useEffect } from "react";
import CustomDropDown from "components/DropDowns/CustomDropDown";
import { getInference, getFieldsNoFeaturesModels } from "api/InferenceAPI";
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
import ClassifyTextWithModel from "components/ClassifyTextWithModel";
import InferenceData from "assets/Data/InfereceData";
import { trackPromise } from "react-promise-tracker";
import { getTweets } from "api/scrapAPI";
import { getInferenceText } from "api/InferenceAPI";
import ClassificationResult from "components/ClassificationResult";

function OfflineMode() {
  const [inferenceData, setInferenceData] = useState(null);
  const [fieldsModels, setFiledsModels] = useState(null);

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

  function classifySubmit(path, text) {
    console.log(inferenceData);

    trackPromise(
      getInferenceText(text, path)
        .then((response) => {
          setInferenceData(response.data.prediction);
          toast("Great ! We have your data prediction !!");
          console.log(inferenceData);
        })
        .catch((error) => {
          console.log(error);
        }),
      "download_area"
    );
  }

  useEffect(() => {
    getFieldsNoFeaturesModels()
      .then((response) => {
        setFiledsModels(response.data);
        console.log(fieldsModels);
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
        {/* Choose model Card  */}(
        {fieldsModels && (
          <Row className="mt-5 justify-content-center">
            <Col className="order-xl-3" xl="10">
              <ClassifyTextWithModel
                Fields_models={fieldsModels}
                handleSubmit={classifySubmit}
              ></ClassifyTextWithModel>
            </Col>
          </Row>
        )}
        <LoadingIndicator area="download_area" />
        {/* Inference Table Card */}
        {inferenceData && (
          <Row className="mt-5 justify-content-center">
            <Col className="order-xl-3" xl="10">
              <ClassificationResult
                result={inferenceData}
              ></ClassificationResult>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default OfflineMode;
