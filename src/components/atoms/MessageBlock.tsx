import { useContext } from "react";
import { FORMATTER } from "../../const";
import { CryptoContext } from "../../context/crypto-context";

const MessageBlock = () => {
  const { currentCoin, convertedCoin, currentValue, convertedValue } =
    useContext(CryptoContext);
  const date = Date.now();
  return (
    <div>
      <p className="text-[22px] font-semibold text-[#ffffff]">{`${currentValue} ${currentCoin?.fullName} = ${convertedValue} ${convertedCoin?.fullName}`}</p>
      <p className="text-[18px] font-normal text-[grey]">
        Данные носят ознакомительный характер на {FORMATTER.format(date)} МСК
      </p>
    </div>
  );
};

export default MessageBlock;
