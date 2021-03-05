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
  let values = [],
    uniqueValues;
  arr.forEach(x => values.push(x[criteria]));

  if (criteria === "title") {
    values = values.map(item => {
      return item.charAt(0);
    });
  }

  uniqueValues = values.filter((item, index, self) => {
    return self.indexOf(item) === index;
  });

  return uniqueValues;
};

export const filterPlainArray = (array, filters) => {
  const filterKeys = Object.keys(filters);
  if (filterKeys[0] === "title") {
    return array.filter(item => {
      return item.title.charAt(0) === filters.title[0];
    });
  }
  return array.filter(item => {
    return filterKeys.every(key => {
      if (!filters[key].length) return true;
      return filters[key].find(filter => filter === item[key]);
    });
  });
};
export const sortComics = (arr, criteria) => {
  return criteria === "random"
    ? shuffleArray(arr)
    : arr.sort(sortArrayByCriteria(criteria));
};
