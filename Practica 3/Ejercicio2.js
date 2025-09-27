function verificarusuario (usuario){
    return new Promise((resolve, reject) =>{
        if (usuario === "admin"){
            resolve("acceso consedido");
        }
        else{
            reject("Acceso denegado");
        }
    });
}

verificarusuario("admin")
.then(res => console.log(res))
.catch(err => console.log(err));

verificarusuario("ivan")
.then(res => console.log(res))
.catch(err => console.log(err));