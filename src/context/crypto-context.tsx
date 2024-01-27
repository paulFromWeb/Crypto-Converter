import { createContext, useState, useEffect } from "react";
import { TCoin } from "../types";
import axios from "axios";
import { SELECTEDCOINS } from "../const";

export const CryptoContext = createContext({
  currentCoin: { name: "", fullName: "", imageUrl: "", price: null },
  convertedCoin: { name: "", fullName: "", imageUrl: "", price: null },
  dataCoins: [{ name: "", fullName: "", imageUrl: "", price: null }],
  currentValue: null,
  isOpenCurrent: false,
  isOpenConverted: false,
  convertedValue: null,
  refresh: false,
  setOpenCurrent: (boolean) => {},
  setOpenConverted: (boolean) => {},
  setCurrentValue: (number) => {},
  setConvertedValue: (number) => {},
  setRefresh: (boolean) => {},
  setCurrentCoin: ({}) => {},
  setConvertedCoin: ({}) => {},
});

export const CryptoContextProvider = ({ children }) => {
  const [dataCoins, setDataCoins] = useState<TCoin[] | []>([]);
  const [isOpenCurrent, setOpenCurrent] = useState(false);
  const [isOpenConverted, setOpenConverted] = useState(false);

  const [currentCoin, setCurrentCoin] = useState<TCoin | null>(null);
  const [currentValue, setCurrentValue] = useState<number>(null);

  const [convertedCoin, setConvertedCoin] = useState<TCoin | null>(null);
  const [convertedValue, setConvertedValue] = useState<number>(null);
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    setConvertedValue(
      +((currentCoin?.price * currentValue) / convertedCoin?.price).toFixed(
        8
      ) || null
    );
  }, [convertedCoin]);
  // useEffect(() => {
  //   setCurrentValue(
  //     (convertedCoin?.price * convertedValue) / currentCoin?.price || 0
  //   );
  // }, [currentCoin]);
  useEffect(() => {
    console.log("render");
    axios
      .get(
        "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"
      )
      .then((resp) => {
        const coins = resp.data.Data;

        const data = coins
          .filter((coin) => {
            return SELECTEDCOINS.includes(coin.CoinInfo.Name);
          })
          .map((coin) => {
            return {
              name: coin.CoinInfo.Name,
              fullName: coin.CoinInfo.FullName,
              imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
              price: coin.RAW.USD.PRICE,
            };
          });

        setDataCoins(data);
        console.log(data.find((elem) => elem.name === currentCoin?.name));
        setCurrentCoin(
          currentCoin
            ? data.find((elem) => elem.name === currentCoin.name)
            : data[0]
        );
        setConvertedCoin(
          convertedCoin
            ? data.find((elem) => elem.name === convertedCoin?.name)
            : data[1]
        );
      });
  }, [refresh]);
  return (
    <CryptoContext.Provider
      value={{
        currentCoin,
        convertedCoin,
        dataCoins,
        isOpenCurrent,
        isOpenConverted,
        currentValue,
        convertedValue,
        refresh,
        setOpenCurrent,
        setOpenConverted,
        setCurrentValue,
        setConvertedValue,
        setRefresh,
        setCurrentCoin,
        setConvertedCoin,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
