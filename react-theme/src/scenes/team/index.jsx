import {Box, Typography, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens  } from '../../theme';
import { mockDataTeam } from "../../data/mockData"
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        { field: "id", headerName : "ID"},
        { field: "name", headerName : "Name" , flex : 1, cellClassName : "name-column-cell"},
        { field: "age", headerName : "Age" , type : "number", headerAlign:"left", align:"left"},
        { field: "phone", headerName : "Phone Number" ,flex : 1,},
        { field: "email", headerName : "Email" ,flex : 1,},
        { field: "access", headerName : "Access" ,flex : 1, 
            renderCell:({ row : {access}}) =>{
                return (
                    <Box 
                      width="60%"
                      m = "0 auto"
                      p = "5px"
                      display="flex"
                      justifyContent="center"
                      backgroundColor = {
                        access === "admin" 
                        ? colors.greenAccent[600]
                        : access === "manager"
                        ? colors.greenAccent[700]
                        : colors.greenAccent[700]
                      }
                      borderRadius="4px"
                    >
                        { access === "admin" && <AdminPanelSettingsOutlinedIcon /> }
                        { access === "manager" && <SecurityOutlinedIcon /> }
                        { access === "user" && <LockOpenOutlinedIcon /> }
                      <Typography color={colors.grey[100]} sx ={{ml : "5px"}}
                      >{access}
                      </Typography>
                    </Box>
                )
            }
         },
    ]
    return (
        <Box m="20px">
            <Header title="TEAM" subtitle="Manager the Team Menber !" />
            <Box m ="40px 0 0 0" height="75vh">
                <DataGrid 
                  rows={mockDataTeam}  
                  columns={columns}
                  components={{Toolbar: GridToolbar}}
                  sx ={{
                    "& .name-column-cell":{
                        color:colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeaders":{
                        backgroundColor:colors.blueAccent[700],
                        borderBottom : "none"
                    },
                    "& .MuiDataGrid-virtuaScroller":{
                        backgroundColor: colors.primary[500]
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                      color: `${colors.primary[100]} !important`,
                    },
                  }}
                    />
            </Box>
        </Box>
    )
}

export default Team