import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/core';

export const FormData = () => {
	const tradeId = Math.floor(Math.random() * 1000000)
	const schema: RJSFSchema = {
		title: 'Create/Update Account',
		type: 'object',
		required: ['accountId', 'id', 'accountDisplayName', 'security', 'quantity', 'side'],
		properties: {
			id: { 'type': 'integer', title: 'Trade ID', default: `TRADE-${tradeId}` },
			accountId: { type: 'integer', title: 'Account ID', default: 'to be done' },
			accountDisplayName: { type: 'string', title: 'Account Display Name' },
			security: { type: 'string', title: 'Security'},
			quantity: { type: 'integer', title: 'Quantity'},
			side: { type: 'string', title: 'Side' }
		},
	};
	const log = (type:string) => console.log.bind(console, type);
	// const onSubmit = (type:string) => {
	// 	console.log(type);
	// } 

	return (
		<Form
			schema={schema}
			validator={validator}
			onChange={log('changed')}
			onSubmit={log('submitted')}
			onError={log('errors')}
  	/>
	)
}