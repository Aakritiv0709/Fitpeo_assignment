import React from "react";
import StatisticsContainer from "../Common Components/Statistics Divs/statistics_container";
import OverviewChart from "../Common Components/Overview Chart/Overview_chart";
import CustomersChart from "../Common Components/Customers Chart/Customers_chart";
import Table from "../Common Components/Table/table";
const Dashboard = () => {
  const Data = [
    // Your data here, for example:
    {
      id: 1,
      product: "Abstract 3D",
      description: "lorem ipsum",
      stock: "32 in stock",
      price: "1300",
      sales: "20",
    },
    {
      id: 2,
      product: "Abstract 3D",
      description: "lorem ipsum",
      stock: "32 in stock",
      price: "1300",
      sales: "20",
    },

    // Add more rows as needed
  ];
  const Columns = [
    { key: "product", title: "Product" },
    { key: "description", title: "Description" },
    { key: "stock", title: "Stock" },
    { key: "price", title: "Price" },
    { key: "sales", title: "Sales" },
  ];

  const handleActionClick = (row) => {
    // Handle the action button click for the given row
    console.log("Action clicked for row:", row);
  };

  return (
    <section className="my-1">
      {/* STATISTIC DIV */}
      <section className="mb-10">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 min-[992px]:grid-cols-2  min-[1300px]:grid-cols-4 gap-5 min-[1920px]:gap-32">
          <div className="w-240">
            <StatisticsContainer
              totalCount={54}
              title="Total Booking"
              iconName="total_booking_icon"
              backgroundColor="bg-white"
              textColor="black"
              borderColor="#C7C7C7"
            />
          </div>

          <div className="w-240">
            <StatisticsContainer
              totalCount={42}
              title="Booking success"
              iconName="booking_success_icon"
              backgroundColor="bg-white"
              textColor="black"
              borderColor="#C7C7C7"
            />
          </div>

          <div className="w-240">
            <StatisticsContainer
              totalCount={12}
              title="Booking cancel"
              iconName="booking_cancel_icon"
              backgroundColor="bg-white"
              textColor="black"
              borderColor="#C7C7C7"
            />
          </div>

          <div className="w-240">
            <StatisticsContainer
              totalCount="$1249"
              title="Paid amount"
              iconName="amount_paid_icon"
              backgroundColor="bg-white"
              textColor="black"
              borderColor="#C7C7C7"
            />
          </div>
        </div>
      </section>
      {/* CHARTS */}
      <section>
        {/* <ApexCharts />*/}
        <div className="grid grid-cols-1 min-[992px]:grid-cols-3 gap-10">
          <div className="min-[992px]:col-span-2">
            <OverviewChart />
          </div>
          <div className="">
            <CustomersChart />
          </div>
        </div>
      </section>
      {/* TABLE */}
      <section className="mt-10">
        <Table
          tableType="appointments"
          data={Data}
          columns={Columns}
          onActionClick={handleActionClick}
        />
      </section>
    </section>
  );
};

export default Dashboard;
