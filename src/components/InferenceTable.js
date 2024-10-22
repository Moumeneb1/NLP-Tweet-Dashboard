import React, { useEffect, useState } from "react";
import Posts from "components/Posts";

// reactstrap components
import { Card, CardHeader, CardFooter, Table, Row, Col } from "reactstrap";
// core components
import { CSVLink } from "react-csv";

import Paginations from "./Paginations";

function InferenceTable(props) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);

  useEffect(() => {
    if (props.data) {
      console.log(props.data[0]);
      setPosts(props.data);
    }
  }, [props.data]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <Card className="shadow">
      <CardHeader className="border-0">
        <Row className="align-items-center">
          <Col xs="8">
            <h3 className="mb-0">My account</h3>
          </Col>
          <Col className="text-right" xs="4">
            <CSVLink data={posts}>Export Data</CSVLink>
          </Col>
        </Row>
      </CardHeader>
      <Table className="align-items-center table-flush" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">Text</th>
            <th scope="col">ID</th>
            <th scope="col">Class</th>
            <th scope="col">Hashtags</th>
            <th scope="col">Retweets</th>
            <th scope="col">Likes</th>
            <th scope="col">Replies</th>

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
