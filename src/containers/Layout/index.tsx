import React from "react";
import Header from "../Header";
import Breadcrumb from "../../components/Breadcrumb";

import { Container, HorizontalLine } from "./styles";

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
