import { useContext } from "react";
import { CryptoContext } from "../../context/crypto-context";
import Input from "../atoms/Input";
import CoinOptions from "./CoinOptions";
import caretIcon from "../../assets/caretIcon.svg";

const ConvertationBlock = ({ current }) => {
  const {
    currentCoin,
    setCurrentCoin,
    convertedCoin,
    isOpenConverted,
    setConvertedCoin,
    setOpenConverted,
    isOpenCurrent,
    setOpenCurrent,
  } = useContext(CryptoContext);

  return (
    <>
      <div className="flex flex-row  relative items-center h-[80px] border-2 rounded-[8px] border-[#5e5e5e] min-h-20  ">
        <Input
          current={current}
          className="w-[75%] focus:outline-none text-[22px] text-[white] font-medium text-right py-2 px-4 border-r-2 border-[grey] bg-black"
        />
        <div
          className="relative w-[25%] flex flex-row justify-between items-center p-4"
          onClick={(e) => {
            e.stopPropagation();
            if (current) {
              setOpenCurrent(!isOpenCurrent);
              setOpenConverted(false);
            } else {
              setOpenConverted(!isOpenConverted);
              setOpenCurrent(false);
            }
          }}
        >
          <div className="flex flex-col justify-between items-center cursor-pointer">
            <img
              src={(current ? currentCoin : convertedCoin)?.imageUrl}
              className="w-8 h-8"
              alt=""
            />
            <p className="text-[16px] text-[#ffffff] font-bold">
              {(current ? currentCoin : convertedCoin)?.name}
            </p>
          </div>
          <img className="w-7 h-7" src={caretIcon} alt="" />
          <CoinOptions
            isOpen={current ? isOpenCurrent : isOpenConverted}
            onClick={(coin) => {
              if (current) {
                setCurrentCoin(coin);
                setOpenCurrent(false);
              } else {
                setConvertedCoin(coin);
                setOpenConverted(false);
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ConvertationBlock;
