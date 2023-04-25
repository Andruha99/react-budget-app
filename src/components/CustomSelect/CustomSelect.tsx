import React from "react";
import { CurrencyOptions, useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import Select, { SingleValue } from "react-select";

export const CustomSelect = () => {
  const { currency, currencies, setCurrency } = useCurrencyContext();

  const handleSelect = (event: SingleValue<CurrencyOptions>) => {
    if (event) {
      setCurrency(event);
    }
  };
  return (
    <Select
      options={currencies}
      onChange={handleSelect}
      isSearchable={false}
      defaultValue={currency}
    />
  );
};
