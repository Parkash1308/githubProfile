const sub= document.getElementById("submit")


function addProfile(){
    
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const github = document.getElementById("account").value

    const prof= document.getElementById("data")

    const profile= document.createElement("div")
    profile.className = "profi";
   
    var namePara = document.createElement("p");
    namePara.textContent = "Name: " + name;
        
    var emailPara = document.createElement("p");
    emailPara.textContent = "Email: " + email;
        
    var githubPara = document.createElement("p");
    githubPara.textContent = "GitHub Username: " + github;
        
    var gotoButton = document.createElement("button");
    gotoButton.textContent = "Go to User";
    gotoButton.addEventListener("click", function() {
        console.log("Name: " + name + "\nEmail: " + email + "\nGitHub Username: " + github);
    });

    div.appendChild(namePara);
    div.appendChild(emailPara);
    div.appendChild(githubPara);
    div.appendChild(gotoButton);
        
    outputSection.appendChild(div);

}

sub.onclick = addProfile