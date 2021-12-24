function Current(props) {
    const {item} = props
    const ingredients = item.ingredients
    return (
        <div className="currentCoffee my-3">
            <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                <img src={item.image} class="img-fluid rounded-start" alt="" />
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.description}</p>
                    <p class="card-text">
                         {
                         ingredients.map((ingredient) => {
                           return (
                               <p>{ingredient}</p>
                           )
                         })

                         }
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Current;