export const quickSort = (data, property, direction) => {
  if (data.length <= 1) {
    return data;
  }

  const pivot = data[0];
  let left = [];
  let right = [];

  for (let i = 1; i < data.length; i++) {
    data[i][property] < pivot[property]
      ? left.push(data[i])
      : right.push(data[i]);
  }

  if (direction === 'asc') {
    return [
      ...quickSort(left, property, direction),
      pivot,
      ...quickSort(right, property, direction),
    ];
  } else if (direction === 'desc') {
    return [
      ...quickSort(right, property, direction),
      pivot,
      ...quickSort(left, property, direction),
    ];
  } else {
    return;
  }
};
