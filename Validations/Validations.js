const validateGetPostsByUserId = (userId) => {
    if (!Number.isInteger(userId)) {
        throw new Error("Please pass a userId as a integer")
    }
}

const validateLogin = () => {

}
const validatelogout = () => {

}
const validategetUserDetails = () => {

}
const validateplaceOrder = () => {

}
const validateorderMargin = () => {

}
const validateorderBook = () => {

}
const validatecancelOrder = () => {

}
const validatemodifyOrder = () => {

}
const validatesingleOrderHistory = () => {

}
const validatetradeBook = () => {

}
const validatepositionsBook = () => {

}
const validateproductConversion = () => {

}
const validateholdings = () => {

}
const validatelimits = () => {

}
const validategetQuotes = () => {

}
const validatesearchScripts = () => {

}
const validategetSecurityInfo = () => {

}
const validategetIndexList = () => {

}
const validategetOptionChain = () => {

}
const validatespanCalculator = () => {

}
const validatetimePriceSeries = () => {

}




module.exports = {
    validateGetPostsByUserId,
    validateLogin,
    validatelogout,
    validategetUserDetails,
    validateplaceOrder,
    validateorderMargin,
    validateorderBook,
    validatecancelOrder,
    validatemodifyOrder,
    validatesingleOrderHistory,
    validatetradeBook,
    validatepositionsBook,
    validateproductConversion,
    validateholdings,
    validatelimits,
    validategetQuotes,
    validatesearchScripts,
    validategetSecurityInfo,
    validategetIndexList,
    validategetOptionChain,
    validatespanCalculator,
    validatetimePriceSeries
}