function myStringArray(text) {

    for (let i = 0; i < text.length; i++) {
        const element = text[i];
        console.log(element);
    }

}

const myString = 'Onesty is the best policy';
const reversed = myStringArray(myString);

