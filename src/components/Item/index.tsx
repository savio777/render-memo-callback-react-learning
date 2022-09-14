import React, { memo } from "react";

type Props = {
  title: string;
  onAddWishList(item: string): void;
};

const ItemComponent: React.FC<Props> = ({ title, onAddWishList }) => {
  return (
    <li>
      {title}{" "}
      <button onClick={() => onAddWishList(title)}>add to wishlist</button>{" "}
    </li>
  );
};

const Item = memo(ItemComponent);

export default Item;
