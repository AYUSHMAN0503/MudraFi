import React from "react";
import Swap from "../assets/92.png"
import Trading from "../assets/Trading-PNG.png"
import AI from "../assets/png-artificial-intelligence-science-artificial-brain-d-5bd15b5a1b5ef6.6360244115404470661121.png"
const Cards = () => {
  return (
    <section className="pt-20 pb-12 mx-10 justify-center items-center flex ">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <ServiceCard
            title="Swap Tokens"
           picture={Swap}
           desc="A place to earn and gain assets"
          />
          <ServiceCard
            title="Trade and Earn"
            picture={Trading}
            desc="Give liquidity on MudraFi and earn fees on swaps"
          />
          <ServiceCard
            title="Personalize AI"
            picture={AI}
            desc="Enable AI to become your crypto and trade adviser"
          />
        </div>
      </div>
    </section>
  );
};

export default Cards;

const ServiceCard = ({ picture, title ,desc}: { picture:any, title: any, desc:any}) => {
  
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3 h-max ">
        <div className="mb-8 rounded-[20px] bg-transparent backdrop-blur-md p-10 pt-0 shadow-lg shadow-slate-400  md:px-7 xl:px-10">
          <div
            className={` flex items-center justify-center rounded-2xl scale-90`}
          ><img src={picture} alt="" />
            
          </div>
          <h4 className="mb-3 text-3xl flex items-center justify-center font-semibold text-white">{title}</h4>
          <p className="text-white flex items-center justify-center text-sm "> {desc}</p>
        </div>
      </div>
    </>
  );
};

