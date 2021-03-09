import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const layout = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
    <Footer />
  </React.Fragment>
);

export default layout;
