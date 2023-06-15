// export default function waterToogler() {
//     const btn = document.getElementById("toogle-water")
//     console.log("hello from waterToogler")
//     btn.addEventListener("click", () => {
//         console.log(btn.checked)
//     })
// }


export function outer(){
    const message = document.getElementById("water-text")
    const btn = document.getElementById("toogle-water")

    btn.addEventListener("click", () => {

        if(btn.checked === true){
            message.innerHTML = "ON"
            //return console.log("return")
        }
        else {
            message.innerHTML = "OFF"
        }
        //console.log(btn.checked)
        return btn.checked
    })

}

export default outer