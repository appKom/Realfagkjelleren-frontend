import Logo from "./Logo.jsx";

const Footer = () => {
  return (
    <div className="text-[#968981] bg-[#5E4F48] text-xs sm:text-lg flex flex-col sm:flex-row gap-3 sm:gap-12 lg:gap-20 p-4 sm:px-12 lg:px-24 sm:py-10 lg:py-12 leading-5 sm:leading-8">
      <div>
        <Logo className="h-10 sm:h-16" />
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-sm sm:text-xl">Contact us</p>
        <p className="break-all sm:break-normal">styret@realfagskjelleren.no</p>
        <a href="https://www.facebook.com/Realfagskjelleren/?locale=nb_NO">
          Facebook
        </a>
        <a href="https://www.instagram.com/realfagskjelleren/">Instagram</a>
      </div>
      <div>
        <p className="font-black text-sm sm:text-xl">Lokasjon</p>
        <p>Herman Krags veg 12</p>
      </div>
    </div>
  );
};
export default Footer;
