const walletButton = document.querySelectorAll(".connect-wallet-btn")
const addressOnCard = document.getElementById("walletAddress")

const updateUI = async () => {
    if (window.ethereum !== "undefined") {
        const userWalletAddress = await window.ethereum.request({ method: "eth_accounts" })
        console.log(userWalletAddress)
        
        const slicedAddress = `${userWalletAddress[0].slice(0, 6)}.....${userWalletAddress[0].slice(userWalletAddress[0].length - 10, userWalletAddress[0].lenght)}` 
        addressOnCard.innerHTML = slicedAddress
    }

    walletButton.forEach(
        (btn) => {
            btn.innerHTML = "wallet connected"
        }
    )
}

async function handleConnectWallet() {
    if (window.ethereum !== "undefined") {
        await window.ethereum.request({method: "eth_requestAccounts"})
    } else {
        alert("Ooops!!! please install the metamask browser extension to proceed with sending Ethereum on Kripta")
    }
    
    window.localStorage.setItem("connected", "true")
    updateUI()
}



const updateConnectionState = () => {
    if (
        window.localStorage.getItem("connected")
    ) {
        updateUI()
    }
}

walletButton.forEach(
    (btn) => {
        btn.addEventListener("click", handleConnectWallet)
}
)

window.addEventListener(
    "DOMContentLoaded", updateConnectionState
)


