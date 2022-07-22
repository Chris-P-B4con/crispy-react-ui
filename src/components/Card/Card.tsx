import React from "react";

export interface CardProps {
  label: string;
}

const Button = (props: CardProps) => {
  return <button>{props.label}</button>;
};

export default Card;
