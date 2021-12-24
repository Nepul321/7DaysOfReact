import Current from "./current";
import { useState, useEffect } from "react";

function Home() {
  const [Items, setItems] = useState([]);
  const [currentItem, setCurrent] = useState({});

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    const method = "GET";
    const url = "http://localhost:8000/api/coffee/";
    const responseType = "json";
    xhr.responseType = responseType;
    xhr.open(method, url);
    xhr.onload = () => {
      const serverResponse = xhr.response;
      var listedItems = serverResponse;
      if (xhr.status === 200) {
        setItems(listedItems);
        setCurrent(listedItems[0]);
      } else {
        alert("An error occured");
      }
    };

    xhr.send();
  }, []);

  function HandleImageClick(id) {
    const filtered = Items.filter((item) => {
      return item.id === id;
    });

    const obj = filtered[0];

    setCurrent(obj);
  }
  return (
    <div className="home">
      <Current item={currentItem} />
      <div className="coffeelist my-3">
        {Items.map((item) => {
          return (
            <div
              key={item.id}
              className="image mb-3"
              onClick={() => HandleImageClick(item.id)}
            >
              <img
                src={item.image}
                alt=""
                style={{ objectFit: "cover", width: "260px", cursor : "pointer"}}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
