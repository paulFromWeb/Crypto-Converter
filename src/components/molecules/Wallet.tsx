import { COINSCASH } from "../../const";
import { TCoin } from "../../types";

type TWallet = {
  coin: TCoin;
  i: number;
};
const Wallet = ({ coin, i }: TWallet) => {
  return (
    <div
      key={coin.name}
      className="flex mb-[10px] flex-row w-full justify-between items-center"
    >
      <img src={coin.imageUrl} className="w-16 h-16" alt="" />
      <div className="w-[60%] flex flex-col">
        <p className="text-[28px] font-medium text-[#ffffff]">{coin.name}</p>
        <p className="text-[24px] font-normal text-[grey]">{coin.fullName}</p>
      </div>
      <p className="text-[24px] font-bold text-[#ffffff]">${COINSCASH[i]}</p>
    </div>
  );
};

export default Wallet;
