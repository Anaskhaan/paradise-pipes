import senitarystock from "../../assets/senitarystock.jpg";
const About = () => {
  return (
    <>
      <div className="relative flex flex-row bg-slate-800 items-center p-10 justify-center -mt-4 h-[500px] z-10">
        <div className="flex flex-col flex-1">
          <h1 className="font-bold text-white text-3xl pb-4 max-sm:text-xl">About Us</h1>
          <p className="text-white text-lg max-sm:text-sm">
            At the core of our operations is a strong commitment to producing
            high-quality PVC pipes that cater to a variety of applications,
            including electrical systems, drainage, sewage, and water supply.
            Our factory is equipped with cutting-edge machinery and employs
            advanced manufacturing techniques, which enable us to consistently
            meet and exceed industry standards.
            <br />
            We recognize the vital role our pipes play in infrastructure and
            construction projects. Therefore, we focus not only on meeting
            client expectations but also on anticipating their needs. Our
            dedication to innovation, precision, and continuous improvement has
            fostered loyalty among a diverse customer base, ranging from small
            contractors to large developers.
          </p>
        </div>
        <div className="flex flex-row flex-1 justify-center">
          <img src={senitarystock} alt="senitary stock image" className=" rounded-lg w-[90%] "/>
        </div>
      </div>
    </>
  );
};

export default About;