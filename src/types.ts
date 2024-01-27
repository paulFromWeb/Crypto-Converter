export type TCoin = {
  name: string;
  fullName: string;
  imageUrl: string;
  price: number;
};
export type TCoinContext = {
  currentCoin: TCoin;
  convertedCoin: TCoin;
  dataCoins: TCoin[];
  isOpenCurrent: boolean;
  isOpenConverted: boolean;
  currentValue: number;
  convertedValue: number;
  refresh: boolean;
};
