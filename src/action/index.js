import {fakeInitData} from '../fakeDB/fakeInitData';

export const addTodo = (evt) => (
    {
        type: 'ADDTODO',
        todo : evt.target.previousSibling.value
    } 
)

export const completeTodo = (evt) => (
    {
        type: 'COMPLETE_TODO',
        todo : evt.target.textContent
    }
)
export const getInitData = (dispatch) => {
    //redux-thunk 를 사용하기 때문에 함수형태로 구현하고, 함수를 반환한다.
	return (dispatch) => { 
        fakeInitData().then( (initData) => {
		  dispatch(setInitData(initData));
        });
	};
}

export const setInitData = (initData) => (
    {
    	type : 'SET_INIT_DATA',
    	initData : initData
    }
)