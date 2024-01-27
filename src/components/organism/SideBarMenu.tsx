import chainIcon from "../../assets/chainIcon.svg";
import folderIcon from "../../assets/folderIcon.svg";
import pyramidIcon from "../../assets/pyramidIcon.svg";
import refreshIcon from "../../assets/refreshIcon.svg";
import securityIcon from "../../assets/securityIcon.svg";

const SideBarMenu = () => {
  const imgArr = [refreshIcon, folderIcon, chainIcon, securityIcon];
  return (
    <div className="min-h-[600px] rounded-[40px] w-20  bg-[#0a0915f1] flex flex-col justify-between items-center px-2 py-10">
      <img src={pyramidIcon} alt="" className="w-[40px] h-[40px]" />
      <div className="h-[250px] flex flex-col justify-between">
        {imgArr.map((imgUrl) => {
          return <img src={imgUrl} alt="" className="w-[40px] h-[40px]" />;
        })}
      </div>
    </div>
  );
};

export default SideBarMenu;
