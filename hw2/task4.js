var f = function (day) {
    if (typeof day === 'number' && day >= 1 && day <= 7) {
        switch(day) {
            case 1:
                return 'Понедельник';
                break;
            case 2:
                return 'Вторник';
                break;  
            case 3:
                return 'Среда';
                break;   
            case 4:
                return 'Четверг';
                break; 
            case 5:
                return 'Пятница';
                break; 
            case 6:
                return 'Суббота';
                break; 
            case 7:
                return 'Воскресенье';
                break;                
        }
    } else {
        throw new Errow('Аргумент должен быть числом от 1 до 7')
    }
}
console.log(f(1))
console.log(f('haha'))