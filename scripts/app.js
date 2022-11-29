// 1

const obj = {
    height: '180 sm',
    weight: '80 kg',
    firstName: 'Vova',
}

// 2
obj.lastName = 'Pupkin';
obj.nickName = 'Pupa';

//3

obj.getWeight = function getWeight () {
    console.log(this.weight)
}
obj.getHeightPlusArgs = function getSomething (arg = 0) {
    height = this.height;
    const heightInt = +height.split(' ')[0];
    console.log(`${heightInt + arg + argGlobal} sm`)
}
const argGlobal = 1;
obj.getHeightPlusArgs()


//4

function getProperty (obj) {
    for (e in obj) {
        console.log(`${e}: ${obj[e]}`);
    }
    
}


//5

function isFlat (obj) {
    for (e in obj){
        if (typeof obj[e] === 'object'){
            return true
        }
    }
    return false
}
