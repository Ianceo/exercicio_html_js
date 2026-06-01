function validar() {
    const a = parseFloat(document.getElementById('fieldA').value);
    const b = parseFloat(document.getElementById('fieldB').value);
    const msg = document.getElementById('msg');

    if (isNaN(a) || isNaN(b)) {
    msg.className = 'message error';
    msg.innerHTML = 'Preencha os dois campos antes de verificar.';
    return;
    }

    if (b > a) {
    msg.className = 'message success';
    msg.innerHTML = `Válido — B (${b}) é maior que A (${a}).`;
    } else {
    msg.className = 'message error';
    msg.innerHTML = `Inválido — B (${b}) precisa ser maior que A (${a}).`;

    }
}

document.addEventListener('keydown', e => {
    if (e.key === 'Enter') validar();
});