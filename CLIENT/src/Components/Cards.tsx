import React from "react";

interface SingleCardProps {
  CardTitle: string;
  CardContent: string;

  CardHeight?: string;
}

const SingleCard: React.FC<SingleCardProps> = ({
  CardTitle,
  CardContent,
  CardHeight,
}) => {
  const cardClassName = `card h-${CardHeight || "64"} p-2`;

  return (
    <>
      <div
        className={`overflow-hidden bg-transparent shadow-lg shadow-slate-300  mx-5 rounded-lg ${cardClassName} `}
      >
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a className="mb-4 block text-xl font-bold text-white  sm:text-[30px] md:text-xl lg:text-[30px] xl:text-xl 2xl:text-[30px]">
              {CardTitle}
            </a>
          </h3>
          <p className="text-base leading-relaxed mb-7 text-body-color text-white ">
            {" "}
            {CardContent}
          </p>
        </div>
      </div>
    </>
  );
};

const Card: React.FC = () => {
  return (
    <>
      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 h-full bg-transparent flex justify-center">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          <SingleCard
            CardTitle=" Swap Tokens"
            CardContent="A place to earn and gain assets"
          />

          <SingleCard
            CardTitle="Trade and Earn"
            CardContent="Give liquidity on MudraFi and earn fees on swaps"
          />
          <SingleCard
            CardTitle="Personalize AI"
            CardContent="Enable AI to become your crypto and trade adviser"
          />
        </div>
      </section>
    </>
  );
};

export default Card;
