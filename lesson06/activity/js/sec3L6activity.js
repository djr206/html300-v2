{/* <input type="text" id="input2" disabled /> */}
{/* <button id="button2">Enable Input</button> */}  
// $("#button2").click(function () {
//     $("#input2").prop("disabled", false);
// });

$("#button2").click(function () {
    $("#button1").prop("disabled", false);
    $("#button1").prop("title", '');
    $( "#button1" ).removeClass( "btn-outline-primary" ).addClass("btn-primary" );
    $("#button1").click(function () {
        alert('Your form has been submitted.');
    });
});

// $("#button1").click(function () {
//     alert('Your form has been submitted.');
// });