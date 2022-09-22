export const filterFields = (fields: any[], props: any) => {
	const normalized = props;
	return normalized.length > 0
		? fields.filter((field: any) => field.prop && normalized.includes(field.prop))
		: fields;
};
