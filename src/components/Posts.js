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
          <th scope="row">
            <span className="mb-0 text-sm">{post.tweet_text}</span>
          </th>
          <td>
            <a href={post.tweet_link} className="badge-dot mr-4">
              {post.tweet_id}
            </a>
          </td>
          <td>
            <Badge color="" className="badge-dot mr-4">
              <i className="bg-warning" />
              pending
            </Badge>
          </td>

          <td>
            <div className="d-flex align-items-center">
              <span className="mr-2">60%</span>
              <div>
                <Progress max="100" value="60" barClassName="bg-danger" />
              </div>
            </div>
          </td>
          <td className="text-right">
            <UncontrolledDropdown>
              <DropdownToggle
                className="btn-icon-only text-light"
                href="#pablo"
                role="button"
                size="sm"
                color=""
                onClick={(e) => e.preventDefault()}
              >
                <i className="fas fa-ellipsis-v" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Another action
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Posts;
