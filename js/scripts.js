function task_item_7(numberRows) {
    let str = '';
    for (let i = 1; i <= numberRows; i++){
        for (let y = 1; y <= i - 1; y++){
            str = str + String(i);
        }
        console.log(String(i) + str);
        str = '';
    }

    if (arguments[1] !== undefined){
        let symbol = arguments[1];
        symbol = String(symbol);
        str = '';

        for (let i = 1; i <= numberRows; i++){
            for (let y = 1; y <= i - 1; y++){
                str = str + symbol[0];
            }
            console.log(symbol[0] + str);
            str = '';
        }
    }
}

task_item_7(9, 'Саша');
