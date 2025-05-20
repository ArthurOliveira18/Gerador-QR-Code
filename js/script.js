const container = document.querySelector(".container")
const qrCodeBtn =  document.getElementById("qrCodeBtn")
const qrInput = document.getElementById("qrCodeInput")

const qrCodeImg  = document.querySelector("#qr-code img")

function generatorQrCode(){
    const qrInputValue = qrInput.value

    console.log(qrInputValue)

    if(!qrInputValue){
        return
    } 

    qrCodeBtn.innerText = "Gerando QR Code..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInputValue}`


    container.classList.add("active")

    qrCodeImg.addEventListener("load" , () => {

         container.classList.add("active")
         qrCodeBtn.innerText = "QR Code gerado!"
    })
}


qrCodeBtn.addEventListener("click" , () =>{
    generatorQrCode()
})

qrInput.addEventListener("keydown" , (e) =>{
    if (e.key === "Enter"){
        generatorQrCode()
    }
})