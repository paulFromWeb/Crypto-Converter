import { useContext } from "react";
import { CryptoContext } from "../../context/crypto-context";
import CoinOption from "../atoms/CoinOption";

const CoinOptions = ({ isOpen, onClick }) => {
  const { dataCoins } = useContext(CryptoContext);

  return (
    <div
      className={
        "flex flex-col justify-center items-center min-w-[96px] rounded-[12px] bg-[#000000] border border-[grey] py-2 absolute left-0 top-[88px] " +
        (isOpen ? "visible" : "hidden")
      }
    >
      {dataCoins.map((coin) => {
        return (
          <CoinOption
            coin={coin}
            className="flex flex-col w-full cursor-pointer p-2 items-center mb-2"
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

export default CoinOptions;
