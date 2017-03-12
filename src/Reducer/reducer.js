export default function reducer(state={
	notDone: [],
	done: [],
	junk: 0
}, action){
	const newState = {...state, junk: 1};
	if (action.type==="ADD_JOB"){

		return {...state, notDone: state.notDone.concat(action.item)};
	} else if (action.type==="REM_JOB"){
		var newDone;
		var newNDone = [];
		for (var i = 0; i < state.notDone.length; i++) {
			if (state.notDone[i].id==action.id){
				newDone = state.done.concat(state.notDone[i]);
			} else {
				newNDone.push(state.notDone[i]);
			}
		};
		return {...state, notDone: newNDone, done: newDone};
	}
	return newState;
}