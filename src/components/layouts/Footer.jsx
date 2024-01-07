import Facebook from '../../assets/icon/Facebook.svg';
import Twitter from '../../assets/icon/Twitter.svg';
import Instagram from '../../assets/icon/Instagram.svg';
import LinkedIn from '../../assets/icon/LinkedIn.svg';
import Youtube from '../../assets/icon/YouTube.svg';
import Logo from './Logo';

const Footer = () => {
  return (
    <div className="w-full grid grid-cols-2 grid-rows-2 my-[33px] py-[33px]">
      <div className="col-span-2 flex justify-between items-center">
        <Logo />
        <div className="w-[526px]">
          <p className="text-[18px] leading-[30px] text-neutral-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
      </div>
      <div className="flex justify-start items-end">
        Copyright © 2023 Codemasters.id | All Rights Reserved
      </div>
      <div className="flex justify-center items-center gap-x-[22px] place-self-end">
        <img
          src={Facebook}
          alt=""
          className="cursor-pointer hover:-translate-y-2 duration-300 transition"
        />
        <img
          src={Twitter}
          alt=""
          className="cursor-pointer hover:-translate-y-2 duration-300 transition"
        />
        <img
          src={Instagram}
          alt=""
          className="cursor-pointer hover:-translate-y-2 duration-300 transition"
        />
        <img
          src={LinkedIn}
          alt=""
          className="cursor-pointer hover:-translate-y-2 duration-300 transition"
        />
        <img
          src={Youtube}
          alt=""
          className="cursor-pointer hover:-translate-y-2 duration-300 transition"
        />
      </div>
    </div>
  );
};

export default Footer;
