localStorage.setItem('login','lula');
localStorage.setItem('senha','livre');
localStorage.setItem('nome','Luiz Inácio Lula');

localStorage.setItem('loginCord','paulo');
localStorage.setItem('senhaCord','guedes');
localStorage.setItem('nomeCord','Paulo Guedes');

let loginInput = document.querySelector("#username");
let senhaInput = document.querySelector("#password");
let btnLogar = document.querySelector("#btnLogar");

btnLogar.addEventListener("click",()=>{
	console.log(loginInput.value,senhaInput.value)
	if(loginInput.value === localStorage.getItem('login') && senhaInput.value === localStorage.getItem('senha')){
		window.location.href = "./areaAdmnistrador.html"
	}else if(loginInput.value === localStorage.getItem('loginCord') && senhaInput.value === localStorage.getItem('senhaCord')){
		window.location.href = "./areaCord.html"
	}else{
		Swal.fire("Problemas com credenciais :(","Login ou senha inválidos","error")
	}
})
