import React, { useState } from "react";
import { faqData } from "../common/Helper";
import FaqListItem from "./FaqListItem";

const FaqQuestions = (props) => {
  const [view, setView] = useState(null);
  const activeHandler = (value) => {
    if (value === view) {
      setView(null);
    } else {
      setView(value);
    }
  };
  const faQData = props.feqData === undefined || props.feqData === null ? [] : props.feqData
  return (
    <>
      {faQData.map((item, index) => (
        <FaqListItem
          item={item}
          key={index}
          activeHandler={activeHandler}
          id={index}
          view={view}
        />
      ))}
    </>
  );
};

export default FaqQuestions;
