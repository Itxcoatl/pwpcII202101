/* eslint-disable prettier/prettier */
// action methods
// "/projects"
const index = (req, res) => {
  res.send('respondiendo a "/projects/index"');
};
// "/projects/add"
const add = (req, res) => {
  res.send('respondiendo a "/projects/add"');
};

// TODO: pendeiente por programar
export default {
  add,
  index,
};