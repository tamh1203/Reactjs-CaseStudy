
import { Box,useTheme,} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return <>
  <Box m = "20px">
    <Header title="CALENDAR" subtitle="Full Calendar" />
  </Box>
   
    </>
};

export default Calendar;