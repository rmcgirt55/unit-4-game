$(document).ready(function() {

    var wins= 0;
    var losses =0;
    var magicNumber =0;

    var red= random(1, 12);
    var blue= random(1, 12);
    var green= random(1, 12);
    var yellow= random(1, 12);

    function random(min,max){
        min= Math.ceil(min);
        max=Math.floor(max);
        return Math.floor(Math.random() * (max-min +1))+ min;
    }
    var randomGem = random(19, 120);
    $("#gem").html(random);

    function reset(){
        magicNumber = 0;
        $("magicNumber").text(magicNumber);
        red= random(1, 12);
        yellow= random(1, 12);
        green= random(1, 12);
        blue= random(1, 12);
        randomGem= random(19, 120);
    }

    $('#gem').on('click', function() {
        $("#target").text(randomGem);
    })
    $("#red").on("click", function(){
        magicNumber += red;
        winLose();
        $('#magicNumber').text(magicNumber);
    });
    $("#blue").on("click", function(){
        magicNumber += blue;
        winLose();
        $('#magicNumber').text(magicNumber);
    });
    $("#yellow").on("click", function(){
        magicNumber += yellow;
        winLose();
        $('#magicNumber').text(magicNumber);
    });
    $("#green").on("click", function(){
        magicNumber += green;
        winLose();
        $('#magicNumber').text(magicNumber);
    });

    function winLose (){
        if (magicNumber === randomGem) {
            wins += 1;
            alert("Winner");
            $('#wins').text('Wins:' + wins);
            reset();
        }else if(magicNumber > randomGem){
            losses += 1;
            alert("Your a looser");
            $('#losses').text('Losses:' + losses);
            reset();
        }}
    });


