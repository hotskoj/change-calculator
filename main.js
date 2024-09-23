// Write your JavaScript here

function calculateChange(due, received) {
    var dollars = Math.round(total);
    return dollars;
}

function handleClickEvent() {
    var amountReceived = parseFloat($("#amount-received").val());
    var amountDue = parseFloat($("#amount-due").val());
    var change = Math.round((amountReceived - amountDue) * 100);
    console.log(change);

    var dollars = (change - (change % 100)) / 100;
    change = change % 100;

    var quarters = (change - (change % 25)) / 25;
    change = change % 25;

    var dimes = (change - (change % 10)) / 10;
    change = change % 10;

    var nickles = (change - (change % 5)) / 5
    pennies = change % 5;

    $("#dollars-output").text(dollars);
    $("#quarters-output").text(quarters);
    $("#dimes-output").text(dimes);
    $("#nickels-output").text(nickles);
    $("#pennies-output").text(pennies);      
}

$("#calculate-change").click(handleClickEvent);


