import { useContext } from "react";
import ConvertationBtn from "../atoms/ConvertationBtn";
import MessageBlock from "../atoms/MessageBlock";
import RefreshBtn from "../atoms/RefreshBtn";
import ConvertationBlock from "../molecules/ConvertationBlock";
import { CryptoContext } from "../../context/crypto-context";

const Converter = () => {
  const { currentValue } = useContext(CryptoContext);
  return (
    <div className="bg-[black] border-[4px] border-[grey] rounded-[30px] w-[60%] h-[60%] p-12 flex flex-col justify-between ">
      <p className="mb-[20px] text-[34px] font-medium text-[#ffffff] uppercase">
        Converter
      </p>
      <div className="flex flex-row items-center justify-between mb-4">
        <ConvertationBlock current={true} />
        <ConvertationBtn className="w-10 h-10 mx-5 cursor-pointer" />
        <ConvertationBlock current={false} />
      </div>
      <div className="flex flex-row justify-between">
        {currentValue && (
          <>
            <MessageBlock />
            <RefreshBtn />
          </>
        )}
      </div>
    </div>
  );
};

export default Converter;
