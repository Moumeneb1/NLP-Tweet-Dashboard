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
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setActivePage(activePage);
  }, [activePage]);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="...">
      <Pagination
        className="pagination justify-content-end mb-0"
        listClassName="justify-content-end mb-0"
      >
        {/* <PaginationItem className="disabled">
          <PaginationLink
            href="#pablo"
            onClick={(e) => e.preventDefault()}
            tabIndex="-1"
          >
            <i className="fas fa-angle-left" />
            <span className="sr-only">Previous</span>
          </PaginationLink>
  </PaginationItem>*/}
        {pageNumbers.map((number) => (
          <PaginationItem
            className={` ${props.active_page === number ? "active" : ""}`}
          >
            <PaginationLink onClick={() => props.paginate(number)}>
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* <PaginationItem>
          <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
            <i className="fas fa-angle-right" />
            <span className="sr-only">Next</span>
          </PaginationLink>
       </PaginationItem>*/}
      </Pagination>
    </nav>
  );
}

export default Paginations;
