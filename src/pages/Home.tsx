import { useContext } from "react";
import Header from "../components/organism/Header";
import { CryptoContext } from "../context/crypto-context";
import Wallets from "../components/organism/Wallets";
import SideBarMenu from "../components/organism/SideBarMenu";
import Converter from "../components/organism/Converter";

const Home = () => {
  const { setOpenConverted, setOpenCurrent } = useContext(CryptoContext);
  return (
    <div
      onClick={() => {
        setOpenConverted(false);
        setOpenCurrent(false);
      }}
      className="flex flex-col justify-center items-center h-[100vh]"
    >
      <div className="flex flex-col w-[1640px] h-[800px] bg-[#000000] py-10 px-[60px]  rounded-[80px]">
        <Header
          userName="CryptoUser24543526"
          avatarUrl="https://avatars.githubusercontent.com/u/97165289"
        />
        <div className="flex flex-row justify-between items-center">
          <SideBarMenu />
          <Wallets />
          <Converter />
        </div>
      </div>
    </div>
  );
};

export default Home;
