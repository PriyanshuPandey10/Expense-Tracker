const transactions = [
    {
        "Transaction ID": "TXN1000",
        "Company": "Zoom",
        "Date": "2024-09-01",
        "Price": "706,06",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Pending",
        "Mode Of Payment": "UPI"
      },
      {
        "Transaction ID": "TXN1001",
        "Company": "Uber",
        "Date": "2024-10-22",
        "Price": "773,64",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1002",
        "Company": "Zoom",
        "Date": "2024-07-14",
        "Price": "728,72",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "UPI"
      },
      {
        "Transaction ID": "TXN1003",
        "Company": "Netflix",
        "Date": "2025-02-27",
        "Price": "503,32",
        "Transaction Type": "Credit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1004",
        "Company": "Tesla",
        "Date": "2025-04-01",
        "Price": "610,73",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "UPI"
      },
      {
        "Transaction ID": "TXN1005",
        "Company": "Meta",
        "Date": "2024-05-09",
        "Price": "333,3",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Failed",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1006",
        "Company": "Adobe",
        "Date": "2024-12-12",
        "Price": "917,24",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1007",
        "Company": "Meta",
        "Date": "2024-09-20",
        "Price": "380,85",
        "Transaction Type": "Credit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1008",
        "Company": "Tesla",
        "Date": "2024-07-12",
        "Price": "593,71",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Pending",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1009",
        "Company": "Amazon",
        "Date": "2024-04-14",
        "Price": "461,64",
        "Transaction Type": "Credit",
        "Payment Status": "Payment Failed",
        "Mode Of Payment": "UPI"
      },
      {
        "Transaction ID": "TXN1010",
        "Company": "Apple",
        "Date": "2024-07-25",
        "Price": "112,86",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Pending",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1011",
        "Company": "Adobe",
        "Date": "2025-02-14",
        "Price": "188,01",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Pending",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1012",
        "Company": "Netflix",
        "Date": "2024-09-08",
        "Price": "351,98",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1013",
        "Company": "Meta",
        "Date": "2024-10-27",
        "Price": "664,88",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Failed",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1014",
        "Company": "Meta",
        "Date": "2024-06-05",
        "Price": "875,22",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Pending",
        "Mode Of Payment": "UPI"
      },
      {
        "Transaction ID": "TXN1015",
        "Company": "Adobe",
        "Date": "2025-03-06",
        "Price": "680,45",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1016",
        "Company": "Uber",
        "Date": "2024-04-16",
        "Price": "138,07",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Pending",
        "Mode Of Payment": "UPI"
      },
      {
        "Transaction ID": "TXN1017",
        "Company": "Uber",
        "Date": "2025-01-17",
        "Price": "383,24",
        "Transaction Type": "Credit",
        "Payment Status": "Payment Pending",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1018",
        "Company": "Apple",
        "Date": "2025-04-01",
        "Price": "646,84",
        "Transaction Type": "Credit",
        "Payment Status": "Payment Pending",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1019",
        "Company": "Meta",
        "Date": "2025-02-28",
        "Price": "491,9",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1020",
        "Company": "Tesla",
        "Date": "2025-02-01",
        "Price": "361,93",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "UPI"
      },
      {
        "Transaction ID": "TXN1021",
        "Company": "Uber",
        "Date": "2024-09-24",
        "Price": "403,76",
        "Transaction Type": "Credit",
        "Payment Status": "Payment Pending",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1022",
        "Company": "Google",
        "Date": "2024-09-27",
        "Price": "801,48",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1023",
        "Company": "Uber",
        "Date": "2024-06-29",
        "Price": "234,47",
        "Transaction Type": "Credit",
        "Payment Status": "Payment Failed",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1024",
        "Company": "Tesla",
        "Date": "2025-01-12",
        "Price": "216,68",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Failed",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1025",
        "Company": "Netflix",
        "Date": "2024-05-01",
        "Price": "377,09",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Failed",
        "Mode Of Payment": "UPI"
      },
      {
        "Transaction ID": "TXN1026",
        "Company": "Tesla",
        "Date": "2024-09-22",
        "Price": "369,3",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1027",
        "Company": "Adobe",
        "Date": "2024-12-09",
        "Price": "526,6",
        "Transaction Type": "Credit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1028",
        "Company": "Meta",
        "Date": "2024-06-05",
        "Price": "729,64",
        "Transaction Type": "Credit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1029",
        "Company": "Uber",
        "Date": "2024-09-25",
        "Price": "761,28",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1030",
        "Company": "Zoom",
        "Date": "2024-10-16",
        "Price": "825,51",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "UPI"
      },
      {
        "Transaction ID": "TXN1031",
        "Company": "Google",
        "Date": "2024-07-17",
        "Price": "774,88",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Failed",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1032",
        "Company": "Apple",
        "Date": "2024-05-27",
        "Price": "454,43",
        "Transaction Type": "Credit",
        "Payment Status": "Payment Failed",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1033",
        "Company": "Meta",
        "Date": "2025-01-31",
        "Price": "742,97",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Failed",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1034",
        "Company": "Google",
        "Date": "2024-10-12",
        "Price": "298,12",
        "Transaction Type": "Credit",
        "Payment Status": "Payment Pending",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1035",
        "Company": "Amazon",
        "Date": "2024-11-13",
        "Price": "272,75",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "UPI"
      },
      {
        "Transaction ID": "TXN1036",
        "Company": "Apple",
        "Date": "2025-01-01",
        "Price": "506,45",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1037",
        "Company": "Meta",
        "Date": "2024-10-27",
        "Price": "330,83",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1038",
        "Company": "Zoom",
        "Date": "2024-06-20",
        "Price": "194,17",
        "Transaction Type": "Credit",
        "Payment Status": "Payment Failed",
        "Mode Of Payment": "UPI"
      },
      {
        "Transaction ID": "TXN1039",
        "Company": "Microsoft",
        "Date": "2025-01-11",
        "Price": "844,29",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Pending",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1040",
        "Company": "Meta",
        "Date": "2024-06-21",
        "Price": "607,51",
        "Transaction Type": "Credit",
        "Payment Status": "Payment Pending",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1041",
        "Company": "Meta",
        "Date": "2025-03-20",
        "Price": "925,34",
        "Transaction Type": "Credit",
        "Payment Status": "Payment Failed",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1042",
        "Company": "Meta",
        "Date": "2025-02-26",
        "Price": "703,06",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Pending",
        "Mode Of Payment": "UPI"
      },
      {
        "Transaction ID": "TXN1043",
        "Company": "Zoom",
        "Date": "2024-07-28",
        "Price": "108,73",
        "Transaction Type": "Credit",
        "Payment Status": "Payment Failed",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1044",
        "Company": "Apple",
        "Date": "2024-12-31",
        "Price": "233,53",
        "Transaction Type": "Credit",
        "Payment Status": "Payment Pending",
        "Mode Of Payment": "UPI"
      },
      {
        "Transaction ID": "TXN1045",
        "Company": "Amazon",
        "Date": "2024-10-18",
        "Price": "624,65",
        "Transaction Type": "Credit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1046",
        "Company": "Google",
        "Date": "2024-12-27",
        "Price": "882,01",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1047",
        "Company": "Netflix",
        "Date": "2024-06-12",
        "Price": "136,57",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Failed",
        "Mode Of Payment": "UPI"
      },
      {
        "Transaction ID": "TXN1048",
        "Company": "Microsoft",
        "Date": "2024-06-28",
        "Price": "820,58",
        "Transaction Type": "Credit",
        "Payment Status": "Payment Failed",
        "Mode Of Payment": "Cash"
      },
      {
        "Transaction ID": "TXN1049",
        "Company": "Adobe",
        "Date": "2024-10-19",
        "Price": "910,98",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Pending",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1050",
        "Company": "Adobe",
        "Date": "2024-10-19",
        "Price": "910,98",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Pending",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1051",
        "Company": "Google",
        "Date": "2024-03-10",
        "Price": "910,98",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1052",
        "Company": "Zomato",
        "Date": "2024-02-10",
        "Price": "5031,98",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Failed",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1053",
        "Company": "Zepto",
        "Date": "2024-01-10",
        "Price": "960,98",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "Card"
      },
      {
        "Transaction ID": "TXN1054",
        "Company": "Zepto",
        "Date": "2024-11-10",
        "Price": "960,98",
        "Transaction Type": "Debit",
        "Payment Status": "Payment Successful",
        "Mode Of Payment": "Card"
      }
  ];
  
  export default transactions;
  