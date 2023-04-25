import React from "react";
import { StyledBadge } from "./styles";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

interface BadgeProps {
  cost: string;
}

export const Badge = ({ cost }: BadgeProps) => {
  const { currency } = useCurrencyContext();
  return (
    <StyledBadge>
      {currency.value}
      {cost}
    </StyledBadge>
  );
};
