$('#slider1, #slider2, #slider3').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            autoplay: true,
        },
        600: {
            items: 3,
            nav: true,
            autoplay: true,
        },
        1000: {
            items: 5,
            nav: true,
            loop: true,
            autoplay: true,
        }
    }
})

$('.plus-cart').click(function () {
    console.log("Plus dabaya gya hai:)");

    var id = $(this).attr("pid").toString();
    var eml=this.parentNode.children[2]
    // console.log(id);
    // console.log("ok")
    $.ajax({
        type: "GET",
        url: "/pluscart",
        data: {
            product_id: id},
        success: function(data){

            eml.innerText=data.quantity;
            // console.log(data);
            // console.log("Success");
            document.getElementById("amount").innerText=data.amount
            document.getElementById('totalamount').innerText=data.totalamount
            


                }
    })
});
$('.minus-cart').click(function () {
    console.log("Minus dabaya gya hai:)");

    var id = $(this).attr("pid").toString();
    var eml=this.parentNode.children[2]
    // console.log(id);
    // console.log("ok")
    $.ajax({
        type: "GET",
        url: "/minuscart",
        data: {
            product_id: id},
        success: function(data){

            eml.innerText=data.quantity;
            // console.log(data);
            // console.log("Success");
            document.getElementById("amount").innerText=data.amount
            document.getElementById('totalamount').innerText=data.totalamount
            


                }
    })
});
$('.remove-cart').click(function () {
    console.log("Remove dabaya gya hai:)");

    var id = $(this).attr("pid").toString();
    var eml=this

    console.log(id); 
    // console.log("ok")
    $.ajax({
        type: "GET",
        url: "/removecart",
        data: {
            product_id: id},
        success: function(data){
            // console.log(data);
            // console.log("Success");
            document.getElementById("amount").innerText=data.amount
            document.getElementById('totalamount').innerText=data.totalamount
            eml.parentNode.parentNode.parentNode.parentNode.remove()
            


                }
    })
});
