import React from "react";
import { Table } from "antd";

const MyClaimsTable = () => {
  const claims = [
    {
      id: 1,
      claimNumber: "CLM001",
      date: "2024-01-15",
      description: "Car accident",
    },
    {
      id: 2,
      claimNumber: "CLM002",
      date: "2024-01-20",
      description: "Property damage",
    },
    { id: 3, claimNumber: "CLM003", date: "2024-02-01", description: "Theft" },
    {
      id: 4,
      claimNumber: "CLM004",
      date: "2024-02-10",
      description: "Vandalism",
    },
    // Add more dummy claims as needed
  ];

  const columns = [
    {
      title: "Claim Number",
      dataIndex: "claimNumber",
      key: "claimNumber",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ];

  return (
    <Table
      dataSource={claims}
      columns={columns}
      bordered
      pagination={false}
      rowKey="id"
    />
  );
};

export default MyClaimsTable;
