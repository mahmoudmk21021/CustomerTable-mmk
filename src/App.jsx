import React, { useState } from "react";
import Home from "./Pages/Home/Home";

const App = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const handleCustomerSelect = (customerId) => {
    setSelectedCustomerId(customerId);
  };

  return (
    <div className="p-5 h-screen bg-gray-100 ">
      <h1 className="font-bold text-2xl text-center text-gray-700 mb-3">
        Transaction Management Application
      </h1>
      {/* <div className="Search rounded-md w-full">
        <input
          type="text"
          placeholder="Search....."
          // value={searchTerm}
          // onChange={handleSearch}
          className="form-control w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div> */}
      <Home />
    </div>
  );
};

export default App;
