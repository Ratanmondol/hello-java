function maxInArry(numbers) {

    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}


const hieght = [11, 545, 26, 78, 45];
const tallest = maxInArry(hieght);

console.log(tallest);