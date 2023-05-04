import { Box, Button, Modal, Typography } from "@mui/material"
import { FormEvent, useState } from "react";
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import Form, { IChangeEvent } from '@rjsf/core';

export const CreateTradeButton = () => {
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
	const tradeId = Math.floor(Math.random() * 1000000)
	const schema: RJSFSchema = {
		title: 'Create/Update Account',
		type: 'object',
		required: ['accountId', 'id', 'accountDisplayName', 'security', 'quantity', 'side'],
		properties: {
			security: { type: 'string', title: 'Security', enum: ["MMM", "IBM", "Tesla", "UBS"] },
			id: { type: 'integer', title: 'Trade ID', default: `TRADE-${tradeId}` },
			accountId: { type: 'integer', title: 'Account ID', default: 'to be done' },
			accountDisplayName: { type: 'string', title: 'Account Display Name' },
			// '': { type: "string" ,"enum": ["MMM", "IBM", "Tesla", "UBS"]}
			quantity: { type: 'integer', title: 'Quantity'},
			side: { type: 'string', title: 'Side' }
		},
	};
	const uiSchema = {
		"type": "VerticalLayout",
		"elements": [
			{
				"type": "Control",
				"scope": "#/properties/''",
				"options": {
					"autocomplete": true
				}
			}
		]
	}
	const log = (type:string) => console.log.bind(console, type);
	// const onSubmit = (type:string) => {
	// 	console.log(type);
	// } 
	const onSubmit = async (data: IChangeEvent<any>, event: FormEvent<any>) => {
		console.log(data.formData);
		const response = await fetch('https://finos-traderx.ngrok.app/trade/trade', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data.formData),
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
	const handleClick = () => {
		setOpen(true);
	}
	return (
		<div className="button-container">
			<Button onClick={handleClick} variant="contained">Create New Trade</Button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
				<Box sx={style}>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						<Form
							schema={schema}
							uiSchema={uiSchema}
							validator={validator}
							onChange={log('changed')}
							onSubmit={onSubmit}
							onError={log('errors')}
						/>
					</Typography>
				</Box>
				</Modal>
		</div>
	)
}