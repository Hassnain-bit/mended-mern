import React from "react";
import { useMemo } from "react";
import { collapse } from "@growthops/ext-ts";

const Container = ({ className = "", children }) => {
  const classes = useMemo(() => {
    root: collapse(["container", className]);
  }, [className]);

  return <div className="container bg-transparent">{children}</div>;
};

export default Container;
