import { useContext } from "react";
import { CryptoContext } from "../../context/crypto-context";
import "../../App.css";

type TInput = {
  current: boolean;
  className: string;
};
const Input = ({ current, className }: TInput) => {
  const {
    currentCoin,
    convertedCoin,
    currentValue,
    convertedValue,
    setCurrentValue,
    setConvertedValue,
  } = useContext(CryptoContext);

  return (
    <input
      autoFocus={current}
      onChange={(e) => {
        setCurrentValue(
          current
            ? Number(e.target.value)
            : (
                (convertedCoin?.price * Number(e.target.value)) /
                currentCoin?.price
              ).toFixed(8)
        );
        setConvertedValue(
          current
            ? (
                (currentCoin?.price * Number(e.target.value)) /
                convertedCoin?.price
              ).toFixed(8)
            : Number(e.target.value)
        );
      }}
      value={current ? currentValue : convertedValue}
      type="number"
      className={className}
    />
  );
};

export default Input;
