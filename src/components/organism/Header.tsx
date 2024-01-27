type TUserInfo = {
  userName: string;
  avatarUrl: string;
};
const Header = ({ userName, avatarUrl }: TUserInfo) => {
  return (
    <div className="flex flex-row justify-end items-center ">
      <p className="mr-10 text-[20px] font-bold text-[#ffffff]">{userName}</p>
      <img className="w-20 h-20 rounded-[50%]" src={avatarUrl} alt="" />
    </div>
  );
};

export default Header;
