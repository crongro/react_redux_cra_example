const initialState = {
  todos : [],
  completeList : []
};

const todoReducer = (state = initialState, action) => {
   const removeCompletedTodo = (arr, todo) => {
     const idx= arr.indexOf(todo);
     const first = arr.slice(0,idx);
     const last = arr.slice(idx+1,arr.length);
     return [...first, ...last];
  }
   
  switch(action.type) {
    case 'ADDTODO':
      console.log(...state.todos);
      return {...state, todos : [...state.todos, action.todo]};
     case 'COMPLETE_TODO':
      return {...state, 
        todos : removeCompletedTodo(state.todos, action.todo),
        completeList : [...state.completeList, action.todo]
      };
    default: 
      return state;
  }
}

export default todoReducer;
