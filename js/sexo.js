
function verificarSexo() {
    selecionado = document.getElementById("sexo_select").selectedIndex;
    if (selecionado == 1) {
        alert("Olá homem, este projeto é destinado apenas para mulheres");
    }
}