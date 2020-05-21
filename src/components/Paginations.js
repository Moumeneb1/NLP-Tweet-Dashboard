import React, { useState, useEffect } from "react";

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

function Paginations(props) {
  const pageNumbers = [];
  const [pagesPerUI, setPagesPerUI] = useState(6);
  for (
    let i = props.active_page;
    i <=
    Math.min(
      Math.ceil(props.totalPosts / props.postsPerPage),
      props.active_page + pagesPerUI
    );
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="...">
      <Pagination
        className="pagination justify-content-end mb-0"
        listClassName="justify-content-end mb-0"
      >
        <PaginationItem>
          <PaginationLink
            onClick={() => props.paginate(props.active_page - 1)}
            tabIndex="-1"
          >
            <i className="fas fa-angle-left" />
            <span className="sr-only">Previous</span>
          </PaginationLink>
        </PaginationItem>
        {pageNumbers.map((number) => (
          <PaginationItem
            className={` ${props.active_page === number ? "active" : ""}`}
          >
            <PaginationLink onClick={() => props.paginate(number)}>
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationLink onClick={() => props.paginate(props.active_page + 1)}>
            <i className="fas fa-angle-right" />
            <span className="sr-only">Next</span>
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </nav>
  );
}

export default Paginations;
