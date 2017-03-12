import React from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import reducer from "./Reducer/reducer";
import { addJob, remJob } from "./Action/addAction"

const middleware = applyMiddleware(logger());
const store = createStore(reducer, middleware);

@connect((store)=>{
	return {
		notDone: store.notDone,
		done: store.done,
	};
})

class ToDoList extends React.Component {
	addJb(name){
		this.props.dispatch(addJob(name));
	}

	remJb(id){
		this.props.dispatch(remJob(id));
	}

	render(){
		return <div>
		<textarea id="na"/>
		<button onClick={()=>this.addJb(document.getElementById('na').value)}>{this.props.notDone.length}</button>
		
		<ul>{this.props.notDone.map((job)=> <li><button onClick={()=>this.remJb(job.id)}>{job.name}</button></li>)}</ul>
		<p>Done</p>
		<ul>{this.props.done.map((did)=><li>{did.name}</li>)}</ul>
		</div>
	}

}

const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
  <ToDoList />
</Provider>, app);