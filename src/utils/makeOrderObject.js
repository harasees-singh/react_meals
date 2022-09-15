const makeOrderObject = (id, name, quantity, price) => {
    return {
        name: name,
        id: id,
        quantity: quantity,
        price: price,
    }
}
export default makeOrderObject;