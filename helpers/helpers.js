const cutOffDesc = (desc) => {
  const words = desc.split(' ');
  if (words.length > 24) return `${words.slice(0, 24).join(' ')}... `;
  return desc;
};

let color = 0;
const getColor = (newRender) => {
  if (newRender) {
    color = 0;
  }
  if (color === 0) {
    color += 1;
    return '#5fc';
  } if (color === 1) {
    color += 1;
    return '#9cf';
  }
  color = 0;
  return '#fca';
};

module.exports.cutOffDesc = cutOffDesc;
module.exports.getColor = getColor;
