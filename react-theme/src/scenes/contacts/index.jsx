import { Box } from "@mui/material";
import { DataGrid, GridToolbar , GridToolbarExport, GridToolbarExportContainer} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID",flex:0.5},
    { field: "registrarId", headerName: "Registrar ID" ,flex:1},
    { field: "name", headerName: "Name",cellClassName : "name-column-cell", flex:1},
    { field: "age", headerName: "Age", type: "number",headerAlign: "left", align: "left",flex:0.5},
    { field: "phone",headerName: "Phone Number", flex:1},
    { field: "email",headerName: "Email",flex:1},
    { field: "address",headerName: "Address",flex:2},
    { field: "city", headerName: "City",flex:1},
    { field: "zipCode",headerName: "Zip Code",flex:0.5},
  ];
  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
            "& .MuiDataGrid-root":{
                border : "none"
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
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.primary[100]} !important`,
              },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;