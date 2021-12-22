import Player from './components/Player'

function App() {
  const audios = [
    {
      id: 0,
      url: "https://res.cloudinary.com/dhlqqrm9f/video/upload/v1639799086/React%20Mp3%20Player/sounds/glimmer_ffiagv.mp3",
    },
    {
      id: 1,
      url: "https://res.cloudinary.com/dhlqqrm9f/video/upload/v1639799086/React%20Mp3%20Player/sounds/clay_dpnp5s.mp3",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dhlqqrm9f/video/upload/v1639799086/React%20Mp3%20Player/sounds/confetti_hxjpr4.mp3",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dhlqqrm9f/video/upload/v1639799086/React%20Mp3%20Player/sounds/bubbles_bgg6cq.mp3",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dhlqqrm9f/video/upload/v1639799086/React%20Mp3%20Player/sounds/moon_jwuo5r.mp3",
    },
  ];

  console.log(audios);
  return (
    <div className="App">
       <div className="container my-5">
        <h1>Beat maker</h1>
        <Player audios={audios}/>
       </div>
    </div>
  );
}

export default App;
