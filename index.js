async function onLoadCallback(x, y) {
    var container = document.getElementById("header")
    setInterval(() => {
        container.innerHTML = new Date().toLocaleString("pl-PL")
    }, 1000)

    let p1 = document.getElementById("paragraph1")
    let p2 = document.getElementById("paragraph2")

    fetch("https://ifconfig.me/all.json")
        .then(res => res.json())
        .then((res) => {
            p1.innerHTML = res.ip_addr
        })

    const rawResponse = await fetch("https://ifconfig.me/all.json")
    const jsonResponse = await rawResponse.json()
    p2.innerHTML = jsonResponse.ip_addr;
}
