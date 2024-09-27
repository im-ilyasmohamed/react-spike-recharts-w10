// import useClient from "cli"    // should

import {
  AreaChart, // wrap area and pass data
  Area, // area chart
  ResponsiveContainer, // to fit div above
  XAxis,
  YAxis,
  CartesianGrid, // for the box look
  Tooltip,
  Legend,
} from "recharts";
const productSales = [
  {
    name: "Jan",
    product1: 4000,
    product2: 2400,
  },
  {
    name: "Feb",
    product1: 3000,
    product2: 2210,
  },
  {
    name: "Mar",
    product1: 2000,
    product2: 2290,
  },
  {
    name: "Apr",
    product1: 2780,
    product2: 2000,
  },
  {
    name: "May",
    product1: 1890,
    product2: 2181,
  },
  {
    name: "Jun",
    product1: 2390,
    product2: 2500,
  },
];
const AreaChartComponent = () => {
  // return <h1>Area chart</h1>;
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={500}
          height={500}
          data={productSales}
          margin={{ right: 30 }}
        >
          <CartesianGrid strokeDasharray="5 5" stroke="#ccc" />{" "}
          {/* cant get cartisean grid to work */}
          <YAxis />
          <XAxis dataKey="name" />
          <Tooltip content={customTooltip} />
          <Legend />
          <Area dataKey="product1" stroke="#2563eb" fill="#3382f6" />
          <Area dataKey="product2" stroke="#7c3aed" fill="#7c3aed" />
        </AreaChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={400}>
        <AreaChart width={500} height={500} data={productSales}>
          <Area
            dataKey="product1"
            type="monotone"
            stroke="#2563eb"
            fill="#3382f6"
            stackId="1"
          />
          <Area
            dataKey="product2"
            type="monotone"
            stroke="#7c3aed"
            fill="#7c3aed"
            stackId="1"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

const customTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#0f172a",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        <p>{label}</p>
        <p
          style={{ color: payload[0].color }}
        >{`${payload[0].name}: ${payload[0].value}`}</p>
        <p
          style={{ color: payload[1].color }}
        >{`${payload[1].name}: ${payload[1].value}`}</p>
      </div>
    );
  }
};

export default AreaChartComponent;
