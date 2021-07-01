{/* <input type="text" id="input2" disabled /> */}
{/* <button id="button2">Enable Input</button> */}  
// $("#button2").click(function () {
//     $("#input2").prop("disabled", false);
// });

// using id selector, togg
// $("#button2").click(function () {
//     $("#button1").prop("disabled", false);
//     $("#button1").prop("title", '');
//     $( "#button1" ).removeClass( "btn-outline-primary" ).addClass("btn-primary" );
//     $("#button1").click(function () {
//         alert('Your form has been submitted.');
//     });
// });
// alert works outside of click function as well
// $("#button1").click(function () {
//     alert('Your form has been submitted.');
// });

// using class selector instead of id as in case above
$(document).ready(function() {
    $('.navbar-brand').tooltip({title: "Text to guide, warn, congradulate... user.",
        trigger: "hover"})
});