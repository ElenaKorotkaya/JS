var message;
var login = 'Hello';

message = (login == 'Pitter') ? 'Hi' :
          (login == 'Owner') ? 'Hello':
          (login == '') ? 'unknown':
           '';

           console.log(message);