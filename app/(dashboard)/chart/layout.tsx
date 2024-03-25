import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Chart Page | Classis",
  description: "This is Chart Page for Classis",
  // other metadata
};
type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return <div>{props.children}</div>;
};
export default layout;
