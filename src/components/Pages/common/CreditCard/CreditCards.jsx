import chipcard from "../../../../assets/CardImages/chipcard.png";
import money from "../../../../assets/CardImages/money.png";
const CreditCards = ({ theme = "dark" }) => {
    const isDark = theme === "dark";
    return (
      <div
        className={`w-full p-6 rounded-2xl shadow-xl transition-transform duration-300 ${
          isDark ? "bg-gradient-to-b from-gray-900 to-gray-700 text-white" : "bg-white text-gray-900 border-[1px] border-gray-200"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-gray-400">Balance</p>
            <p className="text-xl font-semibold">$5,756</p>
          </div>
          <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center">
            <img src={chipcard} alt="chip" className="" />
          </div>
        </div>
        <div className="flex justify-between text-sm mb-4">
          <div>
            <p className="text-gray-400">CARD HOLDER</p>
            <p className="font-semibold">Eddy Cusuma</p>
          </div>
          <div>
            <p className="text-gray-400">VALID THRU</p>
            <p className="font-semibold">12/22</p>
          </div>
        </div>
        <p className="text-xl font-semibold tracking-widest">3778 **** **** 1234</p>
        <div className="flex justify-end mt-4">
          <img src={money} className="size-10" alt="" />
        </div>
      </div>
    );
  };
  export default CreditCards;