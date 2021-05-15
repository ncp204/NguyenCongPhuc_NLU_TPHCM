import React, { Component } from "react";
import MainNewsCV from "./MainNewsCV";
import "./vaccin.css";
import ExtraNewsVC from "./ExtraNewsVC";
import MoreNewsVC from "./MoreNewsVC";

class Vaccin extends Component {
  render() {
    return (
      <div>
        <section className="sectionVC">
          <MainNewsCV />
          <ExtraNewsVC />
          <MoreNewsVC />
        </section>
      </div>
    );
  }
}

export default Vaccin;
