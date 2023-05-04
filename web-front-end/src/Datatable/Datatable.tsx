import React, { MouseEvent, useCallback, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { GetPositions } from '../hooks/GetPositions';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { GetTrades } from '../hooks/GetTrades';
import { SelectionChangeHandler } from '.';

export const Datatable = () => {
	const [rowData, setRowData] = useState<any>([]);
	const [columnDefs, setColumnDefs] = useState<any>([]);
	const positionsData = GetPositions();
	const tradesData = GetTrades();
	const handleSelectionChange: SelectionChangeHandler = useCallback((event) => {
		const selectedButton = event.target.ariaLabel;
		let keys: any;
		if (selectedButton === "positions") {
			setRowData(positionsData);
			keys = Object.keys(positionsData[0]);
		} else if (selectedButton === "trades") {
			setRowData(tradesData);
			keys = Object.keys(tradesData[0]);
		}
		setColumnDefs([]);
		keys.forEach((key:string) => setColumnDefs((current: any) => [...current, {field: key}]));
	}, [positionsData, tradesData]);

return (
	<>
		<ButtonGroup onClick={handleSelectionChange} className="mb-2">
        <Button aria-label='trades' variant="secondary">Trades</Button>
        <Button aria-label='positions' variant="secondary">Positions</Button>
    </ButtonGroup>
		<div className="ag-theme-alpine" style={{height: "80vh", width: "100%"}}>
				<AgGridReact
						rowData={rowData}
						columnDefs={columnDefs}>
				</AgGridReact>
		</div>
	</>
);
}