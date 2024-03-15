//№1
function TriangleArea(basic, height){
    return 1/2 * basic * height;
}
const basic = 7;
const height = 3;
const area = TriangleArea(basic, height);
console.log('Площа трикутника', area)
//№6
function SubGenerator(number){
    return function (SubtractNum){
        return SubtractNum - number;
    }
    
}
const number = 46565;
const SubtractNum = SubGenerator(number);
const result = SubtractNum(5452)
console.log('chyslo', result)
//№5
class SimpleCircle{
    constructor(majorRadius){
    this._majorRadius = majorRadius;
    }
}
set majorRadius(value){
    if(typeof value ==='num'&& Number.isInteger(value)&&value>0){
        this._majorRadius = value;
    }
    else{
        throw new Error('Значення не є цілим числом, або ж не є більшим за 0')
    }
}