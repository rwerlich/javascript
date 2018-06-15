function maskDate(event) {

    let v = event.target.value;
    let key = event.which || event.keyCode;
    //se foi backspace retorna
    if(key == 8) return;

    if (v.match(/^\d{2}$/) !== null) {
        event.target.value = v + '/';
    } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
        event.target.value = v + '/';
    }
  }