import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const salesData = [
  {
    name: "Jan",
    revenue: 4000,
    profit: 2400,
  },
  {
    name: "Feb",
    revenue: 3000,
    profit: 1398,
  },
  {
    name: "Mar",
    revenue: 9800,
    profit: 2000,
  },
  {
    name: "Apr",
    revenue: 3908,
    profit: 2780,
  },
  {
    name: "May",
    revenue: 4800,
    profit: 1890,
  },
  {
    name: "Jun",
    revenue: 3800,
    profit: 2390,
  },
];
const BarChartComponent = () => {
  // return <h1>Area chart</h1>;
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={500}
          height={500}
          data={salesData}
          margin={{ right: 30 }}
        >
          <CartesianGrid strokeDasharray="5 5" stroke="#ccc" />{" "}
          {/* cant get cartisean grid to work */}
          <YAxis />
          <XAxis dataKey="name" />
          <Tooltip content={customTooltip} />
          <Legend />
          <Bar dataKey="revenue" stroke="#2563eb" fill="#3382f6" />
          <Bar dataKey="profit" stroke="#7c3aed" fill="#7c3aed" />
        </BarChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart width={500} height={500} data={salesData}>
          <Bar
            dataKey="revenue"
            type="monotone"
            stroke="#2563eb"
            fill="#3382f6"
            stackId="1"
          />
          <Bar
            dataKey="profit"
            type="monotone"
            stroke="#7c3aed"
            fill="#7c3aed"
            stackId="1"
          />
        </BarChart>
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

export default BarChartComponent;
