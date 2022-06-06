'use strict';
const axios = require('axios');
const Validations = require('../Validations/Validations')
const Commonfunctions = require('../shared/Commonfunctions')
const API_LINK = require("../shared/Constant")



let axiosInterceptor = axios.create({
    baseURL: API_LINK,
});

const AFirstock = require("./AFirstock");

class Firstock extends AFirstock {

    constructor() {
        super();
        this.token = "";
        this.userId = "";
    }

    login({ userId, password, DOBnPAN, vendorCode, appkey }, callBack) {
        Validations.validateLogin({
            userId, password, DOBnPAN, vendorCode, appkey
        })
        axiosInterceptor.post(`login`, {
            userId,
            password,
            DOBnPAN,
            vendorCode,
            appkey
        }).then((response) => {
            const { data } = response
            this.token = data.susertoken
            this.userId = data.actid;
            const finished = (error) => {
                if (error) {
                    callBack(error, null)
                    return
                }
                else {
                    callBack(null, data)
                }
            }
            Commonfunctions.saveData({ token: data.susertoken, userId: data.actid }, "config.json", finished)

        }).catch((error) => {
            callBack(error.message, null)
        })
    }
    logout(callBack) {

        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId;
                const jKey = data.token || this.token;
                axiosInterceptor.post(`logout`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response
                    const finished = (error) => {
                        if (error) {
                            callBack(error, null)
                            return
                        }
                        else {
                            callBack(null, data)
                        }
                    }
                    this.userId = ""
                    this.token = ""
                    Commonfunctions.saveData({ token: "", userId: "" }, "config.json", finished)

                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })

    }
    getUserDetails(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId
                const jKey = data.token || this.token;
                axiosInterceptor.post(`userDetails`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })
    }
    placeOrder({
        exchange,
        tradingSymbol,
        quantity,
        price,
        product,
        transactionType,
        priceType,
        retention,
        remarks,
        triggerPrice
    }, callBack) {
        Validations.validateplaceOrder()
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId
                const jKey = data.token || this.token;
                axiosInterceptor.post(`placeOrder`, {
                    userId,
                    actid: userId,
                    jKey,
                    exchange,
                    tradingSymbol,
                    quantity,
                    price,
                    product,
                    transactionType,
                    priceType,
                    retention,
                    remarks,
                    triggerPrice

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })
    }
    orderMargin({ exchange,
        tradingSymbol,
        quantity,
        price,
        product,
        transactionType,
        priceType, }, callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId
                const jKey = data.token || this.token;
                axiosInterceptor.post(`orderMargin`, {
                    userId,
                    actid: userId,
                    jKey,
                    exchange,
                    tradingSymbol,
                    quantity,
                    price,
                    product,
                    transactionType,
                    priceType,

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })
    }
    orderBook(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId
                const jKey = data.token || this.token;
                axiosInterceptor.post(`orderBook`, {
                    userId,
                    jKey

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })
    }
    cancelOrder({ norenordno }, callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId
                const jKey = data.token || this.token;
                axiosInterceptor.post(`cancelOrder`, {
                    userId,
                    jKey,
                    norenordno

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })
    }
    modifyOrder({
        norenordno,
        price,
        quantity,
        triggerPrice,
        tradingSymbol,
        exchange,
        priceType
    }, callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId
                const jKey = data.token || this.token;
                axiosInterceptor.post(`modifyOrder`, {
                    userId,
                    jKey,
                    quantity,
                    price,
                    triggerPrice,
                    norenordno,
                    exchange,
                    tradingSymbol,
                    priceType
                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })
    }
    singleOrderHistory({ norenordno }, callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId
                const jKey = data.token || this.token;
                axiosInterceptor.post(`singleOrderHistory`, {
                    userId,
                    jKey,
                    norenordno

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })
    }
    tradeBook(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId
                const jKey = data.token || this.token;
                axiosInterceptor.post(`tradeBook`, {
                    userId,
                    jKey,
                    actid: userId

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })
    }
    positionsBook(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId
                const jKey = data.token || this.token;
                axiosInterceptor.post(`positionBook`, {
                    userId,
                    jKey,
                    actid: userId

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })
    }
    productConversion({
        exchange,
        tradingSymbol,
        quantity,
        product,
        transactionType,
        positionType,
        previousProduct,
    }, callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId
                const jKey = data.token || this.token;
                axiosInterceptor.post(`productConversion`, {
                    userId,
                    jKey,
                    actid: userId,
                    exchange,
                    tradingSymbol,
                    quantity,
                    product,
                    transactionType,
                    positionType,
                    previousProduct,

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })
    }
    holdings({ product }, callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId
                const jKey = data.token || this.token;
                axiosInterceptor.post(`holding`, {
                    userId,
                    jKey,
                    actid: userId,
                    product

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })
    }
    limits(callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId
                const jKey = data.token || this.token;
                axiosInterceptor.post(`limit`, {
                    userId,
                    jKey,
                    actid: userId

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })
    }
    getQuotes({
        exchange,
        token
    }, callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId
                const jKey = data.token || this.token;
                axiosInterceptor.post(`getQuotes`, {
                    userId,
                    jKey,
                    exchange,
                    token

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })
    }
    searchScripts({ stext }, callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId
                const jKey = data.token || this.token;
                axiosInterceptor.post(`searchScrips`, {
                    userId,
                    jKey,
                    stext

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })
    }
    getSecurityInfo({
        exchange,
        token
    }, callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId
                const jKey = data.token || this.token;
                axiosInterceptor.post(`securityInfo`, {
                    userId,
                    jKey,
                    exchange,
                    token

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })
    }
    getIndexList({
        exchange
    }, callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId
                const jKey = data.token || this.token;
                axiosInterceptor.post(`indexList`, {
                    userId,
                    jKey,
                    exchange

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })
    }
    getOptionChain({
        exchange,
        tradingSymbol,
        strikePrice,
        count,
    }, callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId
                const jKey = data.token || this.token;
                axiosInterceptor.post(`optionChain`, {
                    userId,
                    jKey,
                    exchange,
                    tradingSymbol,
                    strikePrice,
                    count,

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })
    }
    spanCalculator({
        exchange,
        instname,
        symbolName,
        expd,
        optt,
        strikePrice,
        netQuantity,
        buyQuantity,
        sellQuantity,
        product,
    }, callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId
                const jKey = data.token || this.token;
                axiosInterceptor.post(`spanCalculators`, {
                    userId,
                    jKey,
                    actid: userId,
                    exchange,
                    instname,
                    symbolName,
                    expd,
                    optt,
                    strikePrice,
                    netQuantity,
                    buyQuantity,
                    sellQuantity,
                    product

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })
    }
    timePriceSeries({
        exchange,
        token,
        endtime,
        starttime,
    }, callBack) {
        Commonfunctions.readData((err, data) => {
            if (err) {
                callBack(err, null)
            }
            else {
                const userId = data.userId || this.userId
                const jKey = data.token || this.token;
                axiosInterceptor.post(`timePriceSeries`, {
                    userId,
                    jKey,
                    exchange,
                    token,
                    endtime,
                    starttime,

                }).then((response) => {
                    const { data } = response

                    callBack(null, data)


                }).catch((error) => {
                    callBack(error.message, null)
                })
            }
        })
    }
}

module.exports = Firstock;