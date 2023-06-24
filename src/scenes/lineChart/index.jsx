import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineCh from "../../components/LineCh";

const LineChart = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle={"Simple Line Chart"} />
      <Box height="75vh">
        <LineCh />
      </Box>
    </Box>
  );
};
export default LineChart;
