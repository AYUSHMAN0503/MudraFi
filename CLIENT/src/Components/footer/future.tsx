const Future = () => {
  return (
    <div className="bg-app-bg">
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text w-full flex justify-center">
        <h1 className="mt-5 text-center text-bold text-2xl lg:text-5xl md:3xl xl:text-6xl">
          Future of MudraFi
        </h1>
      </div>

      <div
        style={{ listStyleType: "disc" }}
        className="text-white px-8 py-4 text-md md:lg lg:text-xl xl:text-2xl"
      ></div>

      <div className="w-full flex justify-center mb-14">
        <ul
          style={{ listStyleType: "disc" }}
          className="text-white px-8 py-4 text-md md:lg lg:text-xl xl:text-2xl"
        >
          <li className="mb-11 text-cyan-400 ">
            In the next update of MudraFi, Web3 completion will be done by
            connecting it to frontend i.e our smart contracts are deployed on
            Tron IDE and just needed to connect it to the UI.
          </li>
          <li className="mb-11 text-cyan-400 ">
            With future enhancements of TRC-20 token, MudraFi empowered with the
            less expensive, more secure and high speed transactions on the
            platform. And also facilitates the scalability and usability of the
            platform.
          </li>
          <li className="mb-11 text-cyan-400 ">
            In order to empower users to buy, sell and hold tokens on the
            MudraFi on different Blockchain more wallets options will be
            provided along with TronLink and MetaMask in the future .
          </li>
          <li className="mb-11 text-cyan-400 ">
            We will come up with a massive upgrade in {""}
            <b>AI Analytics</b> which will work on personalized advisory
            recommendations based on user preferences and behaviour. Suggest and
            advise about trading and swapping on tron like potential risk of
            loss or not a good time to buy or remind about the user's based
            tokens interest
          </li>
          <li className="mb-11 text-cyan-400 ">
            With TronGrid and the TronWeb, our platform will develop seamless
            Tron Network on which transactions of swapping tokens and liquidity
            pools will get to a whole new level . With this Tron Network enabled
            in MudraFi more tokens options and choices will be added for the
            users.
          </li>
          <li className="mb-11 text-cyan-400 ">
            For Future competence, Mudrafi will be using BTTC that enables
            interoperability with the public chains of Ethereum, TRON, and BSC,
            with more chains to be supported in the future.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Future;
