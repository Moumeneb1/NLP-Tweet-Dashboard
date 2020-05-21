import React, { useEffect, useState } from "react";
import Posts from "components/Posts";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  Col,
  Button,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import InferenceData from "assets/Data/InfereceData";
import { CSVLink, CSVDownload } from "react-csv";

import Paginations from "./Paginations";

function InferenceTable(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);

  useEffect(() => {
    setPosts(InferenceData);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  console.log(InferenceData);

  return (
    <Card className="shadow">
      <CardHeader className="border-0">
        <Row className="align-items-center">
          <Col xs="8">
            <h3 className="mb-0">My account</h3>
          </Col>
          <Col className="text-right" xs="4">
            <CSVLink data={InferenceData}>Export Data</CSVLink>
          </Col>
        </Row>
      </CardHeader>
      <Table className="align-items-center table-flush" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">Tweet Text</th>
            <th scope="col">Tweet ID</th>
            <th scope="col">Class</th>
            <th scope="col">Users</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          <Posts posts={currentPosts}></Posts>
        </tbody>
      </Table>
      <CardFooter className="py-4">
        <Paginations
          active_page={currentPage}
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        ></Paginations>
      </CardFooter>
    </Card>
  );
}

export default InferenceTable;
