import { Box, Button, Modal } from "@mui/material"
import { FormEvent, useState } from "react";
import { RJSFSchema, } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import Form, { IChangeEvent } from '@rjsf/core';
import React from "react";

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export const CreateTradeButton = ({accountId}:any) => {
	const [refData, setRefData] = useState<any>([]);
	const tradeId = Math.floor(Math.random() * 1000000)
	const schema: RJSFSchema = {
		title: 'Create/Update Account',
		type: 'object',
		required: ['security', 'quantity', 'side'],
		properties: {
			security: { type: 'string', title: 'Security', enum: refData },
			quantity: { type: 'integer', title: 'Quantity'},
			side: { type: 'string', title: 'Side', enum: ['Buy', 'Sell'] }
		},
	};
	const uiSchema = {
		"type": "VerticalLayout",
		"elements": [
			{
				"type": "Control",
				"scope": "#/properties/''",
				"options": {
					"ui:widget": "button",
					"autocomplete": true
				}
			}
		],
	}
	const log = (type:string) => console.log.bind(console, type);
	const onSubmit = async (data: IChangeEvent<any>, _event: FormEvent<any>) => {
		const tradeDetails = data.formData;
		const response = await fetch('http://127.0.0.1:18092/trade/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				id: `TRADE-${tradeId}`,
				security: tradeDetails.security,
				quantity: tradeDetails.quantity,
				accountId: accountId,
				side: tradeDetails.side,
			}),
		});
		if (response.ok) {
			setOpen(false);
			console.log('success');
		} else {
			console.log('error');
		}
	}
	const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
	const handleOpen = async () => {
		setOpen(true);
		try {
			const response = await fetch("http://127.0.0.1:18085/stocks");
			const data = await response.json();
			console.log(data);
			setRefData([])
			data.forEach((refData:any) => {
				return (
					setRefData((prevData:any) => [...prevData, refData.companyName]))
			})
		} catch (error) {
			throw error
		}
	}
	return (
		<div className="button-modal-container">
			<Button onClick={handleOpen} variant="contained">Create New Trade</Button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
				<Box sx={style}>
					<Form
						schema={schema}
						uiSchema={uiSchema}
						validator={validator}
						onChange={log('changed')}
						onSubmit={onSubmit}
						// onError={log('errors')}
					>
						{/* <Button variant="contained">Buy</Button>
						<Button variant="contained">Sell</Button> */}
					</Form>
				</Box>
				</Modal>
		</div>
	)
}