import { Box } from "@mui/material";
import { DataGrid, GridToolbar , GridToolbarExport} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {columns} = props
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