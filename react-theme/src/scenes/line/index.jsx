import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import  {Box} from "@mui/material"


const Line = () =>{
    return <Box m="20px">
        <Header title="LINE CHART" subtitle="Simple Line Chart"/>
        <Box height="72vh">
            <LineChart />
        </Box>
    </Box>
}
export default Line