import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MaterialTable from "@material-table/core";
import { Button } from '@mui/material';
import IconButton from "@mui/material/IconButton";

const PaymentsTable = ({ title, columns, data, actions, paging, search}) => {
    return (
        <MaterialTable
            title="Monthly Payments"
            columns={columns}
            data={data}
            actions={[
                (rowData) => ({
                  icon: () => <Button variant='contained'>Pay</Button>,
                //   icon: AttachMoneyIcon,
                  tooltip: "Make Payment",
                  onClick: (event, rowData) => console.log(rowData),
                })
              ]}
            options={{
                actionsColumnIndex: -1,
                headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF'
                },
                padding: 'dense',
                paging: true,
                search: false
            }}
            localization={{
                header:{ actions: ''}
            }}
        />
    );
};

export default PaymentsTable;

