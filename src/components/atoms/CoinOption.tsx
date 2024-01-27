import { TCoin } from "../../types";

type TOption = {
  coin: TCoin;
  onClick: ({}) => {};
  className: string;
};

const CoinOption = ({ coin, onClick, className }: TOption) => {
  return (
    <div
      className={className}
      key={coin.name}
      onClick={() => {
        onClick(coin);
      }}
    >
      <img src={coin.imageUrl} className="w-10 h-10" key={coin.name} alt="" />
      <p className="text-[18px] font-medium text-[white]">{coin.name}</p>
    </div>
  );
};

export default CoinOption;
