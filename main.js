const phoneShop = require("./library.js");

function getPhone() {
    console.log(`welcome to our store`)
    phoneShop.then((value) => {
        console.log(`vay ${value} co gia la: `)
    })
};
getPhone();