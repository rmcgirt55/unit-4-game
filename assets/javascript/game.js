$(document).ready(function(){
    var Random=Math.floor(Math.random()*101+19)

    $('#randomNumber').text(Random);
    var redG= Math.floor(Math.random()*11+1)
    var yellowG= Math.floor(Math.random()*11+1)
    var greenG= Math.floor(Math.random()*11+1)
    var blueG= Math.floor(Math.random()*11+1)
    var userTotal=0;
    var wins=0;
    var losses=0;

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);
    function reset(){

        Random=Math.floor(Math.random()*101+19);
        $('#randomNumber').text(random);
        redG= Math.floor(Math.random()*11+1);
        yellowG= Math.floor(Math.random()*11+1);
        greenG= Math.floor(Math.random()*11+1);
        blueG= Math.floor(Math.random()*11+1);
        userTotal=0;
        $('#finalTotal').text(userTotal);
    }
    function winner(){
        alert("Winner");
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

    $('#blue').on ('click', function(){
        userTotal = userTotal + blueG;
        $('#finalTotal').text(userTotal);
        if (userTotal == Random){
            winner();
        }
        else if ( userTotal> Random){
            loser();
        }
    })

    $('#red').on ('click', function(){
        userTotal = userTotal+ redG;
        $('#finalTotal').text(userTotal);
        if (userTotal == Random){
            winner();
        }
        else if (userTotal>Random){
            loser();
        }
    })

    $('#yellow').on ('click', function(){
        userTotal = userTotal+ yellowG;
        $('#finalTotal').text(userTotal);
        if (userTotal == Random){
            winner();
        }
        else if (userTotal>Random){
            loser();
        }
    })

    $('#green').on ('click', function(){
        userTotal = userTotal+ greenG;
        $('#finalTotal').text(userTotal);
        if (userTotal == Random){
            winner();
        }
        else if (userTotal>Random){
            loser();
        }
    });
});


    