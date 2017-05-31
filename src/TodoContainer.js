import React from 'react';
import { connect } from 'react-redux';
import ListView from './component/ListView';
import CompleteListView from './component/CompleteListView';
import {fakeInitData} from './fakeDB/fakeInitData';

class Todo extends React.Component {

	componentDidMount() {
		fakeInitData().then( initData => {
			this.props.setInitData(initData);
		});
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
        dispatch({
          type: 'ADDTODO',
          todo : evt.target.previousSibling.value
        }) 
    },
    completeTodo(evt) {
        dispatch({
          type: 'COMPLETE_TODO',
          todo : evt.target.textContent
        }) 
    },
    setInitData(initData) {
    	dispatch({
    		type : 'INIT_TODO_DATA',
    		initData : initData
    	})
    }
  }
}

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

export default TodoContainer;
  
 