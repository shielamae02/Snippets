import nameGenerator from "@afuggini/namegenerator";

export const getRandomName = () => {
    return nameGenerator(" ");
};

export const generateRandomLetters = (length) => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        randomString += letters.charAt(randomIndex);
    }

    return randomString;
};