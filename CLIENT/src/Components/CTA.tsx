import { useState } from "react";
import Popup from "./Popup";

const CTA = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <div className="bg-cover bg-center flex  justify-center items-center mb-0 mt-20 ">
        <div
          className=" p-24 pl-10 rounded-t-3xl"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "top",
            width: "100%",
          }}
        >
          <p className="text-5xl lg:text-6xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r bg-text">
            Trade Now
          </p>
          <p className="lg:text-2xl md:text-xl sm:text-lg mb-5 mt-0 text-white">
            Sync your crypto wallet to start
          </p>
          <button
            className="bg-button text-white py-2 px-4 rounded-lg"
            onClick={() => setShowPopup(true)}
          >
            Connect Wallet
          </button>
          {showPopup && (
            <Popup
              onClose={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          )}
          {showPopup && <Popup onClose={() => setShowPopup(false)} />}
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
