import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarCh from "../../components/BarCh";

const BarChart = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle={"Simple Bar Chart"} />
      <Box height="75vh">
        <BarCh />
      </Box>
    </Box>
  );
};
export default BarChart;
