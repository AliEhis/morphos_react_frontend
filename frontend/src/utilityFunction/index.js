export const formatCurrency = (amount) => {
    return amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const verifyItemInCart = (cartItems, item) => {
    const { id, name, price } = item
    const itemExist = cartItems.find(cartItem => cartItem.id == id)
    if (itemExist) {
        itemExist.stock = itemExist.stock > 0 ? itemExist.stock + 1 : 1
    } else {
        if (cartItems.length < 5) {
            cartItems = [...cartItems, { id, name, price, stock: 1 }]
        } else {
            alert("You can only add 5 robots")
        }
    }
    return cartItems
}

export const reduceRobotStock = (robots, itemId) => {
    const robotExist = robots.find(robot => robot.id == itemId)
    if (robotExist) {
        robotExist.stock = robotExist.stock == 0 ? 0 : robotExist.stock - 1
    }
    return robots
}