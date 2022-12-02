const addToDb = id =>{


    let activityCart = {};
  

    const storedCart = localStorage.getItem('activity-cart');
    if(storedCart){
        activityCart = JSON.parse(storedCart);

    }
    else{

        activityCart = {}
    }

    const quantity = activityCart[id];
    if(quantity){
        const newQuantity = parseInt(quantity)  + 1;
        activityCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    }
    else{
        activityCart[id] = 1;

        // localStorage.setItem(id, 1)
    }
    localStorage.setItem('activity-cart', JSON.stringify(activityCart));
  
}

const getStoredCart = () =>{
    let activityCart = {};


    const storedCart = localStorage.getItem('activity-cart');
    if (storedCart) {
        activityCart = JSON.parse(storedCart);

    }
    return activityCart;
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('activity-cart');
    if(storedCart){
        const activityCart = JSON.parse(storedCart);
        if(id in activityCart){
            delete activityCart[id];
            localStorage.setItem('activity-cart', JSON.stringify(activityCart));
        }
    }

}
export {addToDb, removeFromDb, getStoredCart}