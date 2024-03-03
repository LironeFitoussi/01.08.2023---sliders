import styles from "./AdminStats.module.css";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";

import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../context/User";

export default function AdminStats() {
  const [roleCounts, setRoleCounts] = useState([]);
  const [ordersStats, setOrdersStats] = useState([]);
  const { userToken } = useContext(UserContext);

  const fetchRoleCounts = async () => {
    try {
      const response = await axios.get(
        `${process.env.API_URL}api/v1/admin/get-roles`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      setRoleCounts(response.data.roleCounts);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const fetchOrdersStats = async () => {
    try {
      const response = await axios.get(
        `${process.env.API_URL}api/v1/admin/get-orders`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      setOrdersStats(response.data.orderStats);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    return `${formattedDay}`;
  };

  useEffect(() => {
    fetchOrdersStats();
    fetchRoleCounts();
  }, [userToken]);

  // Prepare data for LineChart
  const lineChartData = {
    xAxis: [{ data: [] }],
    series: [{ data: [] }],
  };

  ordersStats.forEach((order) => {
    if (
      order.paymentDetails &&
      order.paymentDetails.paymentDate &&
      order.paymentDetails.amount
    ) {
      const formattedDate = formatDate(order.paymentDetails.paymentDate);
      lineChartData.xAxis[0].data.push(parseInt(formattedDate));
      lineChartData.series[0].data.push(order.paymentDetails.amount);
    }
  });

  console.log(lineChartData.xAxis[0]);

  return (
    <div className={styles.adminStats}>
      <h1>Admin Stats</h1>
      <h3>👇Here is where all Admin Stats should be displayed👇</h3>

      <PieChart
        series={[
          {
            data: roleCounts.map((role) => ({
              id: role._id,
              value: role.count,
              label: role._id,
            })),
          },
        ]}
        width={400}
        height={200}
      />
      <LineChart
        xAxis={lineChartData.xAxis}
        series={lineChartData.series}
        width={500}
        height={300}
      />
    </div>
  );
}
