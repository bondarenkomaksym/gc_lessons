const addPropertyV1 = (obj, key, value) => {
  obj[key] = value;
  return obj;
};

const addPropertyV2 = (obj, key, value) => {
  Object.assign(obj, { [key]: value });
  return obj;
};

const addPropertyV3 = (obj, key, value) => {
  let clone = Object.assign({}, obj);
  Object.assign(clone, { [key]: value });
  return clone;
};

const addPropertyV4 = (obj, key, value) => {
  let clone = { ...obj };
  Object.assign(clone, { [key]: value });
  return clone;
};
