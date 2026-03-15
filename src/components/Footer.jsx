const Footer = () => {
  return (
    <div className="text-[#968981] bg-[#5E4F48] text-lg h-52 flex gap-20 p-6 pl-24 pt-12 leading-8">
      <div className="self-center">
        <img src="../public/00_pi_dame.svg" className="h-16" />
      </div>
      <div className="flex-col">
        <p className="font-bold text-xl">Contact us</p>
        <p>styret@realfagskjelleren.no</p>
        <a href="https://www.facebook.com/Realfagskjelleren/?locale=nb_NO">
          Facebook
        </a>
        <a href="https://www.instagram.com/realfagskjelleren/">Instagram</a>
      </div>
      <div>
        <p className="font-black text-xl">Lokasjon</p>
        <p>Herman Krags veg 12</p>
      </div>
    </div>
  );
};
export default Footer;
