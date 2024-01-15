export default function SpendItem (props) {
    const handleClick = () => {
        props.onDelete(props.id)
    }
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.category}</td>
            <td>{props.amount}</td>
            <td>{props.type}</td>
            <td><button onClick={handleClick}>Delete</button></td>
        </tr>
    )
}