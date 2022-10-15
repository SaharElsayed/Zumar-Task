import React from "react";
import Header from "../Header";
import styled from "styled-components";

import Breadcrumb from "../../components/Breadcrumb";

const Container = styled.main`
  width: 90vw;
  margin: 0 auto;
`;

const HorizontalLine = styled.hr`
  border: 1px solid ${(props) => props.theme.lightGrey};
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const breadcrumbItems = [
    {
      id: 1,
      text: "Home"
    },
    {
      id: 2,
      text: "All Industries"
    },
    {
      id: 3,
      text: "Consumer Electronics"
    },
    {
      id: 4,
      text: "Mobile Phone & Accessories"
    },
    {
      id: 5,
      text: "Mobile Phones"
    }
  ];

  return (
    <>
      <Container>
        <Header />
      </Container>
      <HorizontalLine />
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <div>{children}</div>
      </Container>
    </>
  );
};

export default Layout;
