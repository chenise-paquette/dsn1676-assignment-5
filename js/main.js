var $theCircle = $('.circle');
var $moveDownBtn = $('.move-down');

var $theCircle = $('.circle');
var $moveUpBtn = $('.move-up');

var $theCircle = $('.circle');
var $moveLeftBtn = $('.move-left');

var $theCircle = $('.circle');
var $moveRightBtn = $('.move-right');

var $form = $('form');
var $input = $('#the-color');


//$theCircle.remove();
//$theCircle.css('border', '3px solid black');

$moveDownBtn.on('click', function () {
     var currentLocation = $theCircle.offset();
    $theCircle.css('top', currentLocation.top + 10);
});

$moveUpBtn.on('click', function () {
     var currentLocation = $theCircle.offset();
    $theCircle.css('top', currentLocation.top - 10);
});

$moveLeftBtn.on('click', function () {
     var currentLocation = $theCircle.offset();
    $theCircle.css('left', currentLocation.left - 10);
});

$moveRightBtn.on('click', function () {
     var currentLocation = $theCircle.offset();
    $theCircle.css('left', currentLocation.left + 10);
});

$form.on('submit', function (eventObject) {
    eventObject.preventDefault();  
    $theCircle.css('background-color', $input.val());



var $theH2 = $('<h2>');
    $theH2.html($input.val());
    $theCircle.append($theH2);
    
    $input.val('');
});