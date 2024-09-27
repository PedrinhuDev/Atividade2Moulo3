let pagina1 = document.getElementById('pagina1');
let formularioUsuario = document.getElementById('form1');
let inputEmail = document.getElementById('iptEmail');
let inputNome = document.getElementById('iptNome');
let inputSenha = document.getElementById('iptSenha');
let buttonAdicionar = document.getElementById('btnAdicionar');

let pagina2 = document.getElementById('pagina2');
let nomeUsuario = document.getElementById('nomeUsuario');
let formularioProduto = document.getElementById('form2');
let inputFoto = document.getElementById('iptFoto');
let inputInscricao = document.getElementById('iptInscricao');
let inputValor = document.getElementById('iptValor');
let buttonCadastrar = document.getElementById('btnCadastrar');

let c1 = document.getElementById('container1');
let cTotal = document.getElementById('containerTotal');

let lista = new Modelos();

let usuario;
let srcImagem;

function quandoCarregarArquivo(){
    const fileReader = new FileReader();
    const arquivos = inputFoto.files;  /* inputFoto foi o nome que eu dei para a variável que armazena o input file */
    
    if (arquivos) {
        fileReader.onload = function (event) {
            srcImagem = event.target.result;
        }
        fileReader.readAsDataURL(arquivos[0]);
    }

}

inputFoto.addEventListener("change", quandoCarregarArquivo);

function quandoClicaNoBotaoAdicionar() {

    if(formularioUsuario.reportValidity()){
        
        usuario = new Usuario(
            inputEmail.value,
            inputNome.value,
            inputSenha.value
        );
    
        console.log(usuario);

        nomeUsuario.innerHTML = usuario.nome;
    
        // desenharRoupas(usuario, c1, cTotal);
    
    
        pagina1.classList.remove('pagina1')
        pagina1.classList.add('oculto')  
    
        pagina2.classList.remove('oculto')
        pagina2.classList.add('pagina2')  
        
        // formularioProduto.classList.remove('oculto')
        // formularioProduto.classList.add('form2') 
    }
    
}

buttonAdicionar.addEventListener('click', quandoClicaNoBotaoAdicionar)

function quandoClicaNoBotaoCadastrar() {
    
    if(formularioProduto.reportValidity()){

        let p1 = new Roupa(
            srcImagem,
            inputInscricao.value,
            inputValor.value
        );
    
        lista.adicionarRoupa(p1);
    
        console.log(lista);
    
        desenharRoupas(lista, c1);
    
        formularioProduto.reset();

    }
}

buttonCadastrar.addEventListener('click', quandoClicaNoBotaoCadastrar)



