import { createContext, useState, useContext, ReactNode } from "react";

enum Currencies {
  USD = "$",
  EUR = "€",
  GBR = "£",
}

export interface CurrencyOptions {
  value: Currencies;
  label: keyof typeof Currencies;
}

interface CurrencyContextState {
  currency: CurrencyOptions;
  currencies: CurrencyOptions[];
  setCurrency: (currency: CurrencyOptions) => void;
}

interface CurrencyContextProviderProps {
  children: ReactNode;
}

const currencies: CurrencyOptions[] = [
  { value: Currencies.USD, label: "USD" },
  { value: Currencies.EUR, label: "EUR" },
  { value: Currencies.GBR, label: "GBR" },
];

const CurrencyContext = createContext<CurrencyContextState>({} as CurrencyContextState);

const useCurrencyContextValue = () => {
  const [currencyValue, setCurrencyValue] = useState<CurrencyContextState>(() => {
    return {
      currency: currencies[0],
      currencies: currencies,
      setCurrency: (currency: CurrencyOptions) => {
        setCurrencyValue((context) => ({
          ...context,
          currency: currency,
        }));
      },
    };
  });
  return currencyValue;
};

export const useCurrencyContext = () => useContext(CurrencyContext);

export const CurrencyContextProvider = ({ children }: CurrencyContextProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
