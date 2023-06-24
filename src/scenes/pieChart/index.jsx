import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieCh from "../../components/PieCh";

const PieChart = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle={"Simple Bar Chart"} />
      <Box height="75vh">
        <PieCh />
      </Box>
    </Box>
  );
};
export default PieChart;
