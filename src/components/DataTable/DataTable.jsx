import MaterialTable from "@material-table/core";

const DataTable = ({ title, columns, data, actions, paging, search}) => {
    return (
        <MaterialTable
            title={title}
            columns={columns}
            data={data}
            actions={actions}
            options={{
                actionsColumnIndex: -1,
                headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF'
                },
                padding: 'dense',
                paging: paging ? paging : false,
                search: search ? search : false
            }}
            localization={{
                header:{ actions: ''}
            }}
        />
    );
};

export default DataTable;

