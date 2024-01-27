import { useContext } from "react";
import { CryptoContext } from "../../context/crypto-context";

const RefreshBtn = () => {
  const { refresh, setRefresh } = useContext(CryptoContext);

  return (
    <button
      className="bg-[#ffffff] py-2 px-5 text-[black] text-[18px] font-medium rounded"
      onClick={() => {
        setRefresh(!refresh);
      }}
    >
      REFRESH NOW
    </button>
  );
};

export default RefreshBtn;
