
const TodoListItem = (props) => {


    let itemClassName ='list -group-item'
    if(props.todoItem.done) itemClassName += 'list-group-item-success'
    // [0] 기존 구조
    return (
        <li className={itemClassName}>
            <span className={props.todoItem.done?"todo-done  pointer":"pointer"}
                onClick={()=> props.toggleDone(props.todoItem.no) }
            >
                {props.todoItem.todo}
                {props.todoItem.done?' (완료)':''}
                </span>
            <span className="float-end badge bg-secondary pointer"> [ 삭제 ] </span>
        </li>
    );

   
}

export default TodoListItem;