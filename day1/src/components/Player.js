import Tile from "./Tile";

function Player(props) {
 const {audios} = props
 return (
     <div className="player">
         {audios.map((item) => {
           return (
            <Tile item={item}/>
           )
          })}
     </div>
 )
}

export default Player;