import React from "react";

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
  UncontrolledTooltip,
} from "reactstrap";

function Posts(props) {
  return (
    <>
      {props.posts.map((post) => (
        <tr>
          <td>
            <span
              className="mb-0 text-sm"
              style={{
                textOverflow: "ellipsis",
                width: "200px",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {post.text}
            </span>
          </td>
          <td>
            <a
              href={"https://www.twiter.com/" + post.url}
              className="badge-dot mr-4"
            >
              {post.id}
            </a>
          </td>
          <td>
            <span className="mb-0 text-sm">{post.prediction}</span>
          </td>
          <td>
            <span className="mb-0 text-sm">{post.hashtags}</span>
          </td>
          <td>
            <span className="mb-0 text-sm">
              {post.retweets ? post.retweets : 0}
            </span>
          </td>
          <td>
            <span className="mb-0 text-sm">{post.likes ? post.likes : 0}</span>
          </td>
          <td>
            <span className="mb-0 text-sm">
              {post.replies ? post.replies : 0}
            </span>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Posts;
