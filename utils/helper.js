exports.generateUniqueName = (name) => {
  return `${name}-${Date.now()}`;
};
