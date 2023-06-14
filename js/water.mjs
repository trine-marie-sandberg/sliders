export default function waterToogler() {
    const btn = document.getElementById("toogle-water")
    console.log("hello from waterToogler")
    btn.addEventListener("click", () => {
        console.log(btn.checked)
    })
}