import {Box, Typography, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens  } from '../../theme';
import { mockDataInvoices} from "../../data/mockData"
import Header from "../../components/Header";

const Invoices = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        { field: "id", headerName : "ID" ,},
        { field: "name", headerName : "Name" , flex : 1, cellClassName : "name-column-cell"},
        { field: "phone", headerName : "Phone Number" ,flex : 1,},
        { field: "cost", headerName : "Cost" ,flex : 1,
         renderCell: (params)=>{
            <Typography>${params.row.cost}</Typography>
         } 
        },
        { field: "date", headerName : "Date" ,flex : 1},
   
    ]
    return (
        <Box m="20px">
            <Header title="CONTACTS" subtitle="List of Contacts !" />
            <Box m ="40px 0 0 0" height="75vh" 
                 rows={mockDataInvoices}  
                 columns={columns}
                 sx ={{
                    "& .MuiDataGrid-root":{
                        border : "none"
                    },
                    "& .MuiDataGrid-cell":{
                        borderBottom : "none"
                    },
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
                    "& .MuiDataGrid-footerContainer":{
                        backgroundColor: colors.blueAccent[700],
                        borderTop :"none"
                    },
                  }}>
             <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
            </Box>
        </Box>
    )
}

export default Invoices