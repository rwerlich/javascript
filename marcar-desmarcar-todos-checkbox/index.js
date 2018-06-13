//acha o botão de marcar todos
let checkProducts = document.getElementById('checkAll');
//acha o checkboxes a serem marcados/desmarcados
let elements = getCheckboxes();

//no evento change
checkProducts.addEventListener('change', () => {       
    if (checkProducts.checked) {
        for (let value of elements) {
            changeCheckboxState(value, true);
        }
    } else {
        for (let value of elements) {
            changeCheckboxState(value, false);
        }
    }
})

//busca todos os checkboxes
function getCheckboxes() {
    return document.getElementsByClassName('check');
}

//marca/desmarcar o checkbox
function changeCheckboxState(el, state) {
    el.checked = state;
}