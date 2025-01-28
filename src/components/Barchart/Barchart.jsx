
import { CirclesWithBar } from "react-loader-spinner";
import {
  BarChart as BC,
  Bar,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Barchart = () => {
  const studentMarks = [
    { id: 1, name: "John Doe", physics: 85, chemistry: 78, math: 92 },
    { id: 2, name: "Jane Smith", physics: 90, chemistry: 88, math: 95 },
    { id: 3, name: "Alice Johnson", physics: 75, chemistry: 80, math: 85 },
    { id: 4, name: "Bob Brown", physics: 70, chemistry: 68, math: 73 },
    { id: 5, name: "Charlie Davis", physics: 88, chemistry: 92, math: 90 },
    { id: 6, name: "Eve Martin", physics: 95, chemistry: 89, math: 96 },
    { id: 7, name: "Frank Wilson", physics: 60, chemistry: 65, math: 70 },
    { id: 8, name: "Grace Lee", physics: 80, chemistry: 85, math: 88 },
    { id: 9, name: "Hannah White", physics: 78, chemistry: 82, math: 80 },
    { id: 10, name: "Ian Black", physics: 85, chemistry: 87, math: 90 },
  ];

  return (
    <div className="w-full">
      <BC width={1500} height={500} data={studentMarks}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="physics" fill="#8884d8" />
        <Bar dataKey="chemistry" fill="#82ca9d" />
        <Bar dataKey="math" fill="#ff7f0e" />
      </BC>

      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Barchart;
