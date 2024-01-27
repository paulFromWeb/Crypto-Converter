import { useContext } from "react";
import { CryptoContext } from "../../context/crypto-context";
import Wallet from "../molecules/Wallet";

const Wallets = () => {
  const { dataCoins } = useContext(CryptoContext);

  return (
    <div className="flex flex-col w-[25%]">
      <p className="h-[10%] mb-[60px] text-[34px] font-medium text-[#ffffff] uppercase">
        Wallets
      </p>
      <div className=" h-[90%] flex flex-col justify-start">
        {dataCoins?.map((coin, i) => {
          return <Wallet coin={coin} i={i} />;
        })}
      </div>
    </div>
  );
};

export default Wallets;
