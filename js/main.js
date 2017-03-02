$(function() {

    var $body = $('body'),
        $sizeValue = $('#sizeValue'),
        $repeatButton = $('#repeat'),
        $sizeButton = $('#size'),
        $coverButton = $('#cover'),
        $changeBckgrnd = $('#changeBckgrnd'),
        bckgrndNum = 1,
        trigger = 0;

    $changeBckgrnd.on('click', function() {
        $body.css('background', 'url("img/SVG/' + bckgrndNum + '.svg") top center' + '/' + $sizeValue.val() + '%');
        bckgrndNum++;
        if (bckgrndNum === 9) {
            bckgrndNum = 1;
        }
    });

    $sizeButton.on('click', function() {
        $body.css('background-size', $sizeValue.val() + '%');
    });

    $sizeValue.keypress(function(e) {
        if (e.which == 13) {
            $body.css('background-size', $sizeValue.val() + '%');
        }
    });

    $repeatButton.on('click', function() {
        if (!trigger) {
            $body.css('background-repeat', 'repeat');
            trigger = 1;
            console.log('if', trigger);
        } else {
            $body.css('background-repeat', 'no-repeat');
            trigger = 0;
            console.log('else', trigger);
        }
    });

    $coverButton.on('click', function() {
        $body.css('background-size', 'cover');
    });

});
