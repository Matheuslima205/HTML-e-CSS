function mostrarHorario() {
    var dataAtual = new Date();
    var hora = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    var segundos = dataAtual.getSeconds();

    var horario = hora + ":" + minutos + ":" + segundos;

    alert('Parabéns ' + document.getElementById('nome').value + '\n' + 'Enviado com sucesso. \nHorário do envio: '+ horario);
}