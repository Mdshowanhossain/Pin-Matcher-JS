document.getElementById("generatePinBtn").addEventListener("click", function () {
    function getPin() {
        let pin = Math.random() * 10000
        let pinSplit = (pin + '').split('.')[0]
        if (pinSplit.length === 4) {
            console.log(pinSplit)
            return pinSplit;
        }
        else {
            console.log('pinSplit', pinSplit)
            return getPin();
        }
    }
    // getPin()

    const pinInput = document.getElementById("generatePinInput");
    pinInput.value = getPin();
})

const handleBtns = document.getElementById("numberBtns");
handleBtns.addEventListener("click", function (e) {
    const digit = e.target.innerText;
    if (isNaN(digit)) {
    }
    else {
        let inputDigit = digit;
        let input = document.getElementById("btnInput");
        input.value = input.value + inputDigit;
    }
})

document.getElementById("submitBtn").addEventListener("click", function () {
    let generetePinInpt = document.getElementById("generatePinInput").value;
    let btnInput = document.getElementById("btnInput").value;
    if (generetePinInpt === btnInput) {
        document.getElementById("notify").innerText = "✅ Pin Matched... Secret door is opening for you";
    } else {
        document.getElementById("notify1").innerText = "❌ Pin Didn't Match, Please try again"
    }
})
