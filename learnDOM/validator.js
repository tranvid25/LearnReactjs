function Validator(options) {
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector('.form-message');
        var errorMessage = rule.test(inputElement.value);//gọi hàm test trong rule để kiểm tra giá trị nhập vào

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }

    var formElement = document.querySelector(options.form);

    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                // Khi người dùng rời khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // Khi người dùng đang nhập vào input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector('.form-message');
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}

// Định nghĩa các rule
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này';
        }
    };
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            // Regex kiểm tra định dạng email
            var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập đúng email';
        }
    };
}
Validator.minLength=function(selector,min){
    return{
        selector:selector,
        test:function(value){
            return value.length>=min ? undefined : `vui lòng nhập tối thiểu ${min}`
        }
    };
}
Validator.isConfirmed=function(selector,getCofirmValue,message){
    return {
        selector:selector,
        test:function(value){
            return value === getCofirmValue() ? undefined : message || `Gía trị nhập vào không chính xác`;
        }
    }
}
