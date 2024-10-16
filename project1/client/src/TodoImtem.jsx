export default function TodoItem(props){
    return(
        <div className="TodoItem">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )
}

