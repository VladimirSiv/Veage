const parseJsonPath = (obj, path) => {
  return path ? path.split(".").reduce((obj, prop) => obj[prop], obj) : null;
};

export default parseJsonPath;
