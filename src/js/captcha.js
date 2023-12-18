var cd;
var IsAllowed = false;
$(document).ready(function () {
    CreateCaptcha();
});


// Create Captcha
function CreateCaptcha() {
    //$('#InvalidCapthcaError').hide();
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');

    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
    }
    cd = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f;
    $('#CaptchaImageCode').empty().append('<div class="relative"><canvas id="CapCode" class="w-[130px] h-full"></canvas><div class="h-[2px] bg-black top-8 -rotate-6 left-[16%] mx-auto z-10 absolute w-[85px]"></div></div>')

    var c = document.getElementById("CapCode"),
        ctx = c.getContext("2d"),
        x = c.width / 2,
        img = new Image();

    img.src = "./../images/captcha-bg.png";
    img.onload = function () {
        var pattern = ctx.createPattern(img, "repeat");
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.font = "50px Roboto Slab";
        ctx.fillStyle = 'black';
        ctx.textDecoration = 'line-through';
        ctx.textAlign = 'center';
        ctx.setTransform(1, -0.1, 0, 1, 3, 46);
        ctx.fillText(cd, x, 55);
    };


}

// Validate Captcha
function ValidateCaptcha() {
    var string1 = removeSpaces(cd);
    var string2 = removeSpaces($('#captcha-code').val());
    if (string1 == string2) {
        return true;
    }
    else {
        return false;
    }
}

// Remove Spaces
function removeSpaces(string) {
    return string.split(' ').join('');
}

// Check Captcha
function CheckCaptcha(e) {
    var result = ValidateCaptcha();
    if ($("#captcha-code").val() == "" || $("#captcha-code").val() == null || $("#captcha-code").val() == "undefined") {
        $('#err-invalid-captcha').removeClass('hidden');
        $('#captcha-code').focus();
    } else {
        if (result == false) {
            IsAllowed = false;
            e.preventDefault();
            console.log('oj');
            // $('#err-invalid-captcha').text('Invalid Captcha! Please try again.').show();
            CreateCaptcha();
            $('#captcha-code').focus().select();
        }
        else {
            IsAllowed = true;
        }
    }
}


function Submit(e) {

    if (IsAllowed === false) {
        $('#err-invalid-captcha').removeClass('hidden');
    }else {
        $('#err-invalid-captcha').addClass('hidden');
    }

}