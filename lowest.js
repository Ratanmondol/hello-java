function lowInArray(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let index = i;
        let element = numbers[index];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}


const hieght = [34, 76, 45, 12, 78, 7];
const lowest = lowInArray(hieght);
console.log(lowest);