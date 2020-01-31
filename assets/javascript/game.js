$(document).ready(function(){
    var Random=Math.floor(Math.random()*101+19)

    $('#randomNumber').text(random);
    var red= Math.floor(Math.random()*11+1)
    var yellow= Math.floor(Math.random()*11+1)
    var green= Math.floor(Math.random()*11+1)
    var blue= Math.floor(Math.random()*11+1)
    var userTotal=0;
    var wins=0;
    var losses=0;

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);
    function reset(){

        Random=Math.floor(Math.random()*101+19);
        $('#randomNumber').text(random);
        red= Math.floor(Math.random()*11+1);
        yellow= Math.floor(Math.random()*11+1);
        green= Math.floor(Math.random()*11+1);
        blue= Math.floor(Math.random()*11+1);
        userTotal=0;
        $('#finalTotal').text(userTotal);
    }
    function winner(){
        allert("Winner");
        wins++;
        $('#numberWins').text(wins);
        reset()
    }
    function loser(){
        alert ("losser");
        losses++;
        $('#numberLosses').text(losses);
        reset()
    }

    $('#blue').one ('click', function(){
        userTotal = userTotal + blue;
        $('#finalTototal').text(userTotal);
        if (userTotal === Random){
            winner();
        }
        else if ( userTotal> Random){
            loser();
        }
    })

    $('#red').one ('click', function(){
        userTotal = userTotal+ red;
        $('#finalTotal').text(userTotal);
        if (userTotal === Random){
            winner();
        }
        else if (userTotal>random){
            loser();
        }
    })

    $('#yellow').one ('click', function(){
        userTotal = userTotal+ red;
        $('#finalTotal').text(userTotal);
        if (userTotal === Random){
            winner();
        }
        else if (userTotal>random){
            loser();
        }
    })

    $('#green').one ('click', function(){
        userTotal = userTotal+ red;
        $('#finalTotal').text(userTotal);
        if (userTotal === Random){
            winner();
        }
        else if (userTotal>random){
            loser();
        }
    });
});


    