import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";

export const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);
  const [transferSuccessful, setTransferSuccessful] = useState(false);

  const handleTransfer = async () => {
    try {
      await axios.post(
        "https://sentinal-bank.onrender.com/api/v1/account/transfer",
        { to: id, amount },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      setTransferSuccessful(true);
    } catch (error) {
      console.error("Error during transfer:", error);
      // Optionally handle error, e.g., show a notification
    }
  };

  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="h-full flex flex-col justify-center">
        <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col space-y-1.5 p-5 shadow-sm">
            <h2 className="text-3xl font-bold text-center">Send Money</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-2xl text-white">{name[0]}</span>
              </div>
              <h3 className="text-2xl font-semibold">{name}</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-5">
                <label
                  className="text-sm font-medium leading-none"
                  htmlFor="amount"
                >
                  Amount (in Rs)
                </label>
                <input
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  type="number"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  id="amount"
                  placeholder="Enter amount"
                />
              </div>
              <div className="flex justify-center">
                {!transferSuccessful ? (
                  <button
                    onClick={handleTransfer}
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                  >
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Initiate Transfer
                    </span>
                  </button>
                ) : (
                  <Link
                    to="/dashboard" // Change this to your desired route
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 bg-green-600 text-white rounded-lg"
                  >
                    <span className="relative px-5 py-2.5">
                      Transfer Successful! Click to Continue
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
