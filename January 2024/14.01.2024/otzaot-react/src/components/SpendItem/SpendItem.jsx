export default function SpendItem (props) {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.category}</td>
            <td>{props.amount}</td>
            <td>{props.type}</td>
        </tr>
    )
}