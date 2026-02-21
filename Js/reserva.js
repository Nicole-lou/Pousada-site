function validarEReservar() {
    // 1. Pegar referências dos campos
    const campos = document.querySelectorAll('.required-field');
    const entrada = document.getElementById('data-entrada');
    const saida = document.getElementById('data-saida');
    
    let formularioValido = true;

    // 2. Validação de campos vazios
    campos.forEach(campo => {
        if (campo.value.trim() === "") {
            formularioValido = false;
            campo.style.borderColor = "red"; // Feedback visual simples
        } else {
            campo.style.borderColor = "#ced4da";
        }
    });

    if (!formularioValido) {
        alert("Preencher todos os campos é obrigatório");
        return; // Para a execução aqui
    }

    // 3. Validação de Datas
    const dataEntrada = new Date(entrada.value);
    const dataSaida = new Date(saida.value);
    const hoje = new Date();
    hoje.setHours(0,0,0,0); // Zera as horas para comparar apenas o dia

    if (dataEntrada < hoje) {
        alert("A data de entrada não pode ser no passado.");
        return;
    }

    if (dataSaida <= dataEntrada) {
        alert("A data de saída deve ser posterior à data de entrada.");
        return;
    }

    // 4. Se tudo estiver OK, monta a URL do WhatsApp
    const nome = document.getElementById('nome').value;
    const msg = `Olá, gostaria de reservar! Nome: ${nome}, Entrada: ${entrada.value}, Saída: ${saida.value}`;
    const url = `https://wa.me/552434511134?text=${encodeURIComponent(msg)}`;
    
    window.open(url, '_blank');
}