
const btn = document.getElementById("submit")
let profille = ""
function addData() {
    // alert("clicked")
    const name = document.getElementById("name").value;
    const mail = document.getElementById("email").value;
    const git = document.getElementById("git").value;

    if (name && mail && git) {
        const div = document.createElement("div")
        div.className = "div"
        div.style.display = "flex";
        div.style.flexDirection = "row";
        div.style.justifyContent = "space-between"
        div.style.padding = "10px"
        div.style.border = "2px solid black";

        fetch(`https://api.github.com/users/${git}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                profille = data.avatar_url;
            })
            .catch(error => {
                alert("No account")
            });



        const pro = document.createElement("img")
        pro.src = profille
        pro.alt = "profile"

        pro.style.width = "50px"
        pro.style.height = "50px"
        const pName = document.createElement("p")
        pName.textContent = name
        const pmail = document.createElement("p")
        pmail.textContent = mail
        const pgit = document.createElement("p")
        pgit.textContent = git

        const showbtn = document.createElement("button")
        showbtn.textContent = "Show"
        showbtn.style.width = "50px"
        showbtn.style.height = "25px"
        showbtn.style.marginTop = "10px"
        showbtn.style.backgroundColor = "blue-light"


        showbtn.addEventListener("click", function () {
            window.location.href = `https:www.github.com/${git}`
        });

        div.appendChild(pro)
        div.appendChild(pName)
        div.appendChild(pmail)
        div.appendChild(pgit)
        div.appendChild(showbtn)

        const info = document.getElementById("area")

        info.appendChild(div)
    } else {
        alert("Don't Miss any field")
    }
}

btn.onclick = addData