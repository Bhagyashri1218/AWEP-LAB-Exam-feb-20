

function submit() {
    let username = document.querySelector("#input1").value;
    const ele = document.querySelector("#refid").cloneNode(true);
    ele.removeAttribute("id");
    ele.innerHTML = username;
    ele.style.background = "skyblue";
    ele.style.visibility = "visible";
    const infoBox = document.querySelector("#infoBox");
    infoBox.appendChild(ele, infoBox.firstChild);
    document.querySelector("#input1").value = " ";

    //password
    let password = document.querySelector("#input2").value;
    const ele1 = document.querySelector("#refid1").cloneNode(true);
    ele1.removeAttribute("id");
    ele1.innerHTML = password;
    ele1.style.background = "skyblue";
    ele1.style.visibility = "visible";
    //const infoBox = document.querySelector("#infoBox");
    infoBox.appendChild(ele1, infoBox.firstChild);
    document.querySelector("#input2").value = " ";

    //E-mail
    let mail = document.querySelector("#input3").value;
    const ele2 = document.querySelector("#refid3").cloneNode(true);
    ele2.removeAttribute("id");
    ele2.innerHTML = mail;
    ele2.style.background = "skyblue";
    ele2.style.visibility = "visible";
    //const infoBox = document.querySelector("#infoBox");
    infoBox.appendChild(ele2, infoBox.firstChild);
    document.querySelector("#input3").value = " ";

}


