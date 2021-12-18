import Player from './components/Player'

function App() {
  const audios = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dhlqqrm9f/video/upload/v1639799086/React%20Mp3%20Player/sounds/glimmer_ffiagv.mp3",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dhlqqrm9f/video/upload/v1639799086/React%20Mp3%20Player/sounds/clay_dpnp5s.mp3",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dhlqqrm9f/video/upload/v1639799086/React%20Mp3%20Player/sounds/confetti_hxjpr4.mp3",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dhlqqrm9f/video/upload/v1639799086/React%20Mp3%20Player/sounds/bubbles_bgg6cq.mp3",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dhlqqrm9f/video/upload/v1639799086/React%20Mp3%20Player/sounds/moon_jwuo5r.mp3",
    },
  ];

  console.log(audios);
  return (
    <div className="App">
      <h1>Mp3 Player</h1>
      <Player audios={audios}/>
    </div>
  );
}

export default App;
