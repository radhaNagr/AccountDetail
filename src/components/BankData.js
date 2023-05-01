import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

const BankData = () => {
  const [account, setAccount] = useState([]);

  function fetchData() {
    setAccount(json);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const json = [
    {
      id: 1,
      accountHolder: "abcx test 1",
      phoneNumber: "1231231231",

      transactionHistory: [
        {
          transactionType: "credit",
          amount: "800$",
        },
        {
          transactionType: "debit",
          amount: "10$",
        },
        {
          transactionType: "credit",
          amount: "100$",
        },
      ],
    },
    {
      id: 1,
      accountHolder: "abcx test 2",
      phoneNumber: "1231231231",

      transactionHistory: [
        {
          transactionType: "credit",
          amount: "100$",
        },
        {
          transactionType: "debit",
          amount: "40$",
        },
        {
          transactionType: "credit",
          amount: "10$",
        },
      ],
    },
    {
      id: 1,
      accountHolder: "abcx test 3",
      phoneNumber: "1231231231",

      transactionHistory: [
        {
          transactionType: "credit",
          amount: "500$",
        },
        {
          transactionType: "debit",
          amount: "40$",
        },
        {
          transactionType: "credit",
          amount: "50$",
        },
      ],
    },
    {
      id: 1,
      accountHolder: "abcx test 4",
      phoneNumber: "1231231231",

      transactionHistory: [
        {
          transactionType: "credit",
          amount: "500$",
        },
        {
          transactionType: "debit",
          amount: "40$",
        },
        {
          transactionType: "credit",
          amount: "50$",
        },
      ],
    },
  ];
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "#FFEFD5",
          background: "#8084",
          fontSize: "70px",
          border: "2px solid black",
          fontFamily: "fantasy",
            }}
              
      >
        Bank Details
      </h1>
    
      <Table
        striped
        bordered
        hover
        variant="dark"
        style={{ textAlign: "center" }}
      >
        <thead>
          <tr
            style={{
              fontSize: "30px",
              color: "#fec",
            }}
          >
            <th>id.</th>
            <th> accountHolder</th>
            <th>phoneNumber</th>
            <th>transactionType</th>
            <th>amount</th>
            <th>transactionType</th>
            <th>amount</th>
            <th>transactionType</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody style={{ fontSize: "25px" }}>
          {account.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.accountHolder}</td>
                  <td>{item.phoneNumber}</td>
                  {item.transactionHistory.map((value) => (
                    <>
                      <td>{value.transactionType}</td>
                      <td>{value.amount}</td>
                    </>
                  ))}
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
export default BankData;
