import React from "react";

import { CardWrapper } from "./CardStyles";

export interface CardProps {
  label: string;
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  return <CardWrapper>{props.children}</CardWrapper>;
};

export default Card;
