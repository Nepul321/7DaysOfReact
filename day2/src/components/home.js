import Current from "./current";
import {useState, useEffect} from 'react'


function Home() {
    const [Items, setItems] = useState([]);
    const [currentItem, setCurrent] = useState({});

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        const method = "GET";
        const url = 'http://localhost:8000/api/coffee/'
        const responseType = "json"
        xhr.responseType = responseType
        xhr.open(method, url)
        xhr.onload = () => {
           const serverResponse = xhr.response;
           var listedItems = serverResponse;
           if (xhr.status === 200) {
               setItems(listedItems);
           } else {
               alert("An error occured")
           }
        }
       
        xhr.send();
    }, [])
    console.log(Items)
    return (
        <div className="home">
            <Current />
            <div className="coffeelist my-3">
                {Items.map((item) => {
                    return (
                        <div className="image mb-3">
                            <img src={item.image} alt="" style={{width : "260px"}}/>
                        </div>
                        
                        )
                })}
            </div>
        </div>
    )
}

export default Home;