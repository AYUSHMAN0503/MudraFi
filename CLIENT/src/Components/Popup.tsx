import { AnimatePresence, motion } from "framer-motion";
// import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";

interface PopupProps {
  onClose: () => void; // Function to close the popup
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        setAccount(accounts[0]);
        const balance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [accounts[0], "latest"],
        });
        setBalance(balance);
        setPopupVisible(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Install MetaMask please!!");
      window.location.href = "https://metamask.io/";
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      // Check if the user is already logged in
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((accounts: string[]) => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            window.ethereum
              .request({
                method: "eth_getBalance",
                params: [accounts[0], "latest"],
              })
              .then((balance: string) => {
                setBalance(balance);
                setPopupVisible(true);
              })
              .catch((error: unknown) => {
                console.error("Error fetching balance:", error);
              });
          }
        })
        .catch((error: unknown) => {
          console.error("Error fetching accounts:", error);
        });
    }
  }, []);

  return (
    <AnimatePresence>
      {popupVisible && (
        <motion.div
          ref={popupRef}
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              ease: "easeOut",
              duration: 0.15,
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.75,
            transition: {
              ease: "easeIn",
              duration: 0.15,
            },
          }}
          className="fixed top-2 right-2 bottom-0 w-1/4 z-9999 p-4 flex flex-col h-[500%] bg-gray-800 rounded-xl"
        >
          <div className="mt-8 flex flex-col">
            {account && balance ? (
              <div>
                <h3 className="text-cyan-600">Account Address:</h3> {account}
                <h3 className="text-cyan-600">Account Balance: </h3>
                {balance}
              </div>
            ) : (
              <div>
                <button
                  className="px-8 py-2 bg-blue-500 text-white rounded mb-2 ml-10 z-10"
                  onClick={connectWallet}
                >
                  Connect MetaMask
                </button>
              </div>
            )}
            <div className="p-4 flex items-center justify-center">
              <motion.button
                onClick={onClose}
                className="px-5 py-2 bg-gray-500 text-white rounded"
              >
                Close
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
