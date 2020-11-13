user-cpf.oninput = function () {
    if (this.value.length > 11) {
        this.value = this.value.slice(0,11); 
    }
}