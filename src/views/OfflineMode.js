import React, { useState, useEffect } from "react";
import { getInference, getFieldsNoFeaturesModels } from "api/InferenceAPI";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import UserHeader from "components/Headers/UserHeader.js";
import ClassifyTextWithModel from "components/ClassifyTextWithModel";
import { trackPromise } from "react-promise-tracker";
import { getInferenceText } from "api/InferenceAPI";
import ClassificationResult from "components/ClassificationResult";

function OfflineMode() {
  const [inferenceData, setInferenceData] = useState(null);
  const [fieldsModels, setFiledsModels] = useState(null);
  const offlineHeaderText =
    "Classify a text You submit using our pretrained models !";
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

      <UserHeader text={offlineHeaderText} />
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
