import '../css/Tile.css'

function Tile(props) {
    const {item} = props
    const colors = ['#7ed6df', 'aliceblue', 'aqua', 'turquoise', 'royalblue']
    function playAudio(item) {
        const audio = new Audio()
        audio.src = item.url
        audio.play();
    }
    const currentColor = colors[item.id]
    return (
        <div className="tile" onClick={() => playAudio(item)} style={{backgroundColor : currentColor}}>
        </div>
    )
}

export default Tile;