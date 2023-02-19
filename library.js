function phoneShop() {
    return new Promise((resolve, reject) => {
        const phoneType = ["Samsung", "Xiaomi", "Htc", "Apple", "Lg", "Nokia"];
        setTimeout(() => {
            const typeRandom = Math.floor(Math.random() * phoneType.length);
            const displayPhone = phoneType[typeRandom];
            const price = Math.floor(Math.random() * 5000);
            console.log(`today ${displayPhone} will be discount`)
            resolve(displayPhone)

        }, 3000)
    }

    )
}

module.exports = phoneShop();