import React from "react";
import { useSelector } from 'react-redux';
import { FaCreditCard, FaPaypal, FaUserCircle } from "react-icons/fa";

const RecentTransactions = () => {
  const transactions = useSelector((state) => state.transactions);

  return (
    <div className="2xl:w-[28%] xl:w-[32%] w-full">
      <h2 className="text-lg font-semibold text-gray-900 my-4">Recent Transaction</h2>
      <div className="shadow-lg rounded-2xl p-6 w-full border-[1px] border-gray-200">
        <div className="xl:space-y-3 2xl:space-y-8">
          {transactions.map((tx, index) => (
            <div key={tx.id} className="flex items-center space-x-4">
              <div className="bg-gray-100 p-2 rounded-full">{tx.icon=="credit_card" ? <FaCreditCard className="text-orange-500" /> : tx.icon=="paypal" ? <FaPaypal className="text-indigo-600" /> : <FaUserCircle className="text-green-500" />}</div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium text-lg">{tx.title}</p>
                <p className="text-gray-400 text-sm">{tx.date}</p>
              </div>
              <p className={`font-semibold text-lg ${tx.amountClass}`}>{tx.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
