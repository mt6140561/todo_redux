export function addJob(names){
	return {
		type: "ADD_JOB",
		item: {
			name: names,
			id: Date.now(),
		}
	}
}

export function remJob(ids){
	return {
		type: "REM_JOB",
		id: ids,
	}
}
