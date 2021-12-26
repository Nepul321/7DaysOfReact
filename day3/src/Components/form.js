import { useRef } from "react";

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
}

function Form() {
  const name_ref = useRef();
  const email_ref = useRef();
  const favorite_color_ref = useRef();
  const bio_ref = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const form = e.target
    const data = {
        name : name_ref.current.value,
        email : email_ref.current.value,
        favorite_color : favorite_color_ref.current.value,
        bio : bio_ref.current.value
    }

    let jsonData = JSON.stringify(data);
    const method = "POST"
    const xhr = new XMLHttpRequest();
    const url = "http://localhost:8000/api/survey/create/"
    const responseType = "json";
    xhr.responseType = responseType;
    const csrftoken = getCookie('csrftoken');
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");
    if (csrftoken) {
        xhr.setRequestHeader("X-CSRFToken", csrftoken);
      }
    xhr.onload = () => {
      alert(xhr.response.message)
    };

    xhr.onerror = (e) => {
        console.log(e);
      };
    
    xhr.send(jsonData);
    form.reset();
  }
  return (
    <div className="container">
      <form id="submit-form" onSubmit={submitHandler}>
        <div className="field">
          <p>Name : </p>
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            ref={name_ref}
          />
        </div>
        <div className="field my-3">
          <p>Email : </p>
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            ref={email_ref}
          />
        </div>
        <div className="field my-3">
          <p>Favorite Color : </p>
          <input
            type="text"
            placeholder="Favorite color"
            className="form-control"
            ref={favorite_color_ref}
          />
        </div>
        <div className="field my-3">
          <p>Bio : </p>
          <textarea
            placeholder="Bio"
            className="form-control"
            ref={bio_ref}
          ></textarea>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Form;
