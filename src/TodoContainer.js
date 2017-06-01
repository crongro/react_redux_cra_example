import React from 'react';
import { connect } from 'react-redux';
import ListView from './component/ListView';
import CompleteListView from './component/CompleteListView';

import * as actions from './action/index'

class Todo extends React.Component {

	// componentDidMount() {
	// 	fakeInitData().then( initData => {
	// 		this.props.setInitData(initData);
	// 	});
	// }

	componentDidMount() {
		this.props.getInitData();
	}
  
  render() {
    let {todos, completeList, addTodo, completeTodo} = this.props;
    
    return (
      <div>
        <div>
         <input type="text" placeholder="할일입력" />
         <button onClick={addTodo}> 추가 </button>
        </div>
        <div>
          <ListView data={todos} onClick={completeTodo} />
          <CompleteListView completeList={completeList} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo(evt) {
      dispatch(actions.addTodo(evt))
    },
    completeTodo(evt) {
      dispatch(actions.completeTodo(evt)) 
    },
    getInitData() {
    	dispatch(actions.getInitData(dispatch))
    }
  }
}

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
export default TodoContainer;
  
 