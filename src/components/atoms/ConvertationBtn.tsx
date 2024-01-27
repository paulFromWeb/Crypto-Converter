import { useContext } from "react";
import { CryptoContext } from "../../context/crypto-context";
import convertIcon from "../../assets/convertIcon.svg";

const ConvertationBtn = ({ className }) => {
  const {
    currentCoin,
    convertedCoin,
    currentValue,
    setCurrentCoin,
    setConvertedCoin,
    setConvertedValue,
  } = useContext(CryptoContext);

  return (
    <div
      className={className}
      onClick={() => {
        setConvertedValue(
          (convertedCoin?.price / (currentCoin?.price * currentValue)).toFixed(
            8
          )
        );
        setCurrentCoin(convertedCoin);
        setConvertedCoin(currentCoin);
      }}
    >
      <img src={convertIcon} alt="" />
    </div>
  );
};

export default ConvertationBtn;
