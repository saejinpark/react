import PropTypes from "prop-types"

function List({category, items}) {

    const listItems = items.map(item => <li key={item.id}>
        {item.name} : &nbsp; <b>{item.calories}</b>
    </li>)

    return <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">
            {listItems}
        </ol>
        </>
}

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.name,
        calories: PropTypes.number
    }))
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List