// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// const TransactionGraph = ({ selectedCustomerId }) => {
//   const [transactionData, setTransactionData] = useState([]);

//   useEffect(() => {
//     // استرداد بيانات المعاملات للعميل المحدد من الخادم
//     const fetchData = async () => {
//       const response = await axios.get(
//         `/api/transactions?customer_id=${selectedCustomerId}`
//       );
//       const data = response.data.reduce((acc, transaction) => {
//         const existingEntry = acc.find(
//           (item) => item.date === transaction.date
//         );
//         if (existingEntry) {
//           existingEntry.totalAmount += transaction.amount;
//           console.log(data);
//         } else {
//           acc.push({ date: transaction.date, totalAmount: transaction.amount });
//         }
//         return acc;
//       }, []);
//       setTransactionData(data);
//     };
//     fetchData();
//   }, [selectedCustomerId]);

//   return <></>;
// };

// export default TransactionGraph;
