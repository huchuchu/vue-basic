function validEmail(email) {
	const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
	return regex.test(String(email).toLowerCase());
}

export { validEmail };
