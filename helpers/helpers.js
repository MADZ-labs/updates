const monthNumberToString = (num, short = false) => {
  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };
  return short ? months[num].substring(0, 3) : months[num];
};

const cutOffDesc = (desc) => {
  const words = desc.split(' ');
  if (words.length > 24) return `${words.slice(0, 24).join(' ')}... Read more`;
  return desc;
};

module.exports.monthNumberToString = monthNumberToString;
module.exports.cutOffDesc = cutOffDesc;
