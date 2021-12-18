function Tile(props) {
    const {item} = props
    return (
        <div className="tile" key={item.id}>
         <p>{item.id}</p>
         <p>{item.url}</p>
        </div>
    )
}

export default Tile;