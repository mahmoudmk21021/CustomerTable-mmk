import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";
import Table from "../../Components/Table/Table";
import TransactionChart from "../../Components/TransactionChart/TransactionChart";

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [amountFilter, setAmountFilter] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const customersResponse = await axios.get(
          "http://localhost:3000/customers"
        );
        const transactionsResponse = await axios.get(
          "http://localhost:3000/transactions"
        );

        const mergedData = customersResponse.data.map((customer) => ({
          ...customer,
          ...transactionsResponse.data.find(
            (transaction) => transaction.id === customer.id
          ),
        }));

        setData(mergedData);
        setFilteredData(mergedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) => {
      const nameMatch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const amountMatch =
        amountFilter === "" ||
        (item.amount &&
          !isNaN(parseFloat(amountFilter)) &&
          item.amount === parseFloat(amountFilter));
      return nameMatch && amountMatch;
    });
    setFilteredData(filtered);
  }, [data, searchTerm, amountFilter]);

  return (
    <>
      {data.length === 0 ? (
        <Loading />
      ) : (
        <div className=" flex  items-center justify-between   gap-5 ">
          <Table data={filteredData} />
          <TransactionChart
            data={filteredData.map((item) => ({
              type: item.name,
              value: item.amount,
            }))}
          />
        </div>
      )}
    </>
  );
}
