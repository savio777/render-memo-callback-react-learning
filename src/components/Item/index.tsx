import React, { memo } from "react";

type Props = {
  title: string;
};

const ItemComponent: React.FC<Props> = ({ title }) => {
  return <li>{title}</li>;
};

const Item = memo(ItemComponent);

export default Item;
