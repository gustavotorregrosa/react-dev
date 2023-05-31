import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function MarketData({rows}) {

    const columns = [
        { field: 'account_name', headerName: 'Account Name', width: 170 },
        { field: 'amount', headerName: 'Amount', width: 80 },
        { field: 'currency_name', headerName: 'Currency Name', width: 130 },
        { field: 'transaction_type', headerName: 'Transaction Type', width: 130 },
        { field: 'transaction_description', headerName: 'Transaction Description', width: 210 },
        { field: 'credit_card_number', headerName: 'Credit Card Number', width: 180 },
        { field: 'credit_card_issuer', headerName: 'Credit Card Issuer', width: 150 },
        { field: 'credit_card_cvv', headerName: 'Credit Card CVV', width: 120 },
    ];
  
    return <>
        <div style={{ height: 400, width: '100%'}}>
            <DataGrid
                className='clear-text'
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                style={{
                    color: 'white'
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>
    </>
}

export default MarketData;