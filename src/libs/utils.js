const defineDescendant = (fn, defaultProps) => {
  const extension = Object.create(fn);
  extension.defaultProps = defaultProps;

  return extension;
}

const defineNamedVariant = (fn, name) => {
  return defineDescendant(fn, { name: name });
}

const ensureArray = (arr) => {
  // ensure array. TODO: low effort, need to improve
  return !arr ? [] : (arr.length > 1 ? arr : [arr]);
}

const findNamedVariant = (src, name) => {
  return ensureArray(src).find(e => e.props && e.props.name === name);
}

const findChildrenByType = (src, typeName, sequence = 1) => {
  return ensureArray(src).filter(e => e.type && e.type.name === typeName)[sequence - 1];
}

export {
  defineDescendant,
  defineNamedVariant,
  findNamedVariant,
  findChildrenByType,
  ensureArray
}