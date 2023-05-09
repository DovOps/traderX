import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { GetPositions } from '../hooks/GetPositions';
import { GetTrades } from '../hooks/GetTrades';
import { AccountsDropdown } from '../Dropdown/AccountsDropdown';
import { Button, SelectChangeEvent } from '@mui/material';
import { CreateTradeButton } from '../CreateTradeButton/CreateTradeButton';

export const Datatable = () => {
	const [tradeRowData, setTradeRowData] = useState<any>([]);
	const [tradeColumnDefs, setTradeColumnDefs] = useState<any>([]);
	const [positionRowData, setPositionRowData] = useState<any>([]);
	const [positionColumnDefs, setPositionColumnDefs] = useState<any>([]);
	const [selectedId, setSelectedId] = useState<number>(0);
	const [currentAccount, setCurrentAccount] = useState<string>('');
	
	const positionData = GetPositions(22214);
	const tradeData = GetTrades(22214);

	const handleChange = (event:SelectChangeEvent<any>) => {
		// setSelectedId(event.target.value);
		console.log(event.target)
		setCurrentAccount(event.target.value);
		if (positionData && tradeData) {
			const positionKeys = Object.keys(positionData[0]);
			const tradeKeys = Object.keys(tradeData[0]);
			setPositionRowData(positionData);
			setTradeRowData(tradeData);
			positionKeys.forEach((key:string) => setPositionColumnDefs((current: any) => [...current, {field: key}]));
			tradeKeys.forEach((key:string) => setTradeColumnDefs((current: any) => [...current, {field: key}]));
		}
  }

return (
	<>
		<div style={{width: "100%"}}>
			<AccountsDropdown currentAccount={currentAccount} handleChange={handleChange} />
			<CreateTradeButton />
		</div>
		<div className="ag-theme-alpine" style={{height: "80vh", width: "50%", float: "left"}}>
				<AgGridReact
						rowData={tradeRowData}
						columnDefs={tradeColumnDefs}>
				</AgGridReact>
		</div>
		<div className="ag-theme-alpine" style={{height: "80vh", width: "50%", float: "right"}}>
			<AgGridReact
					rowData={positionRowData}
					columnDefs={positionColumnDefs}>
			</AgGridReact>
		</div>
	</>
);
}