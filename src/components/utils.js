export const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
};

export const sortArrayByCriteria = property => {
    return (x, y) => {
        if (typeof x[property] === "number") {
            return y[property] - x[property];
        } else return x[property].localeCompare(y[property]);
    };
};

export const getUniqueValues = (arr, criteria) => {
    const values = [];
    arr.forEach(x => values.push(x[criteria]));
    const unique = values.filter((item, index, self) => {
        return self.indexOf(item) === index;
    });

    return unique;
};
