import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { columns, rows } from '../invoices/data';
import Header from '../../components/Header';

export default function Contacts() {
  return (
    <Box sx={{ height: 600, width: '98%', mx: 'auto' }}>
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}
