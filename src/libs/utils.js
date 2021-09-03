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
  return !arr ? [] : (typeof arr != "string" && arr.length > 1 ? arr : [arr]);
}

const findNamedVariant = (src, name) => {
  return ensureArray(src).find(e => e.props && e.props.name === name);
}

const findChildrenByType = (src, typeName, sequence = 1) => {
  return ensureArray(src).filter(e => e.type && e.type.name === typeName)[sequence - 1];
}

const keySeparator = ".";

const treeOfKeys = (objTree, prefix = "") => {
  let keyTree = {};
  const prefixKey = prefix ? `${prefix}${keySeparator}` : "";

  for(const [key, value] of Object.entries(objTree)) {
    const fullKey = `${prefixKey}${key}`;
    if (Object.entries(value).length > 1) {
      keyTree[fullKey] = treeOfKeys(value, prefixKey + key);
    }
    else {
      keyTree[fullKey] = key;
    }
  }
  
  return keyTree;
}

const findKeyInTree = (objTree, key) => {
  const [prefix, rem] = reduceKeyName(key);

  if (rem && objTree[prefix])
    return findKeyInTree(objTree[prefix], rem);
  return objTree[prefix];
}

const reduceKeyName = (keyName, reverse = false) => {
  const parts = (keyName + "").split(keySeparator);
  if (reverse) {
    return [parts.pop(), parts.join(keySeparator)];
  }

  return [parts.shift(), parts.join(keySeparator)];
}

const classJoin = (classes) => {
  const arr = ensureArray(classes);
  
  let classList = [];
  for(const i in arr) {
    const parts = arr[i].split(" ");
    
    for(const j in parts)
    {
      const item = parts[j];
      if(item.trim() === "" || classList.indexOf(item) > -1)
        continue;
      classList.push(item);
    }
  }
  
  return classList.join(" ");
}

export {
  defineDescendant,
  defineNamedVariant,
  findNamedVariant,
  findChildrenByType,
  ensureArray,
  treeOfKeys,
  findKeyInTree,
  reduceKeyName,
  classJoin,
}