function calculatePrice(myform) {

    //Receber dados selecionados  
    var elt = document.getElementById("number_days");
    var days = elt.options[elt.selectedIndex].value;

    var elt = document.getElementById("number_albums");
    var albums = elt.options[elt.selectedIndex].value;

    var elt = document.getElementById("chosen_album");
    var chosen_album = elt.options[elt.selectedIndex].value;

    //Converter dados para integers
    days = parseInt(days);
    albums = parseInt(albums);
    chosen_album = parseInt(chosen_album)
    tax = 0.07

    //Calcular valor total
    var total = days + albums + chosen_album + tax;

    //Imprimir valor total na tela
    document.getElementById("PicExtPrice").value = total;

}
