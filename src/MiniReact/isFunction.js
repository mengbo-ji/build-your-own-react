function isFunction(virtualDom) {
  const type = virtualDom.type
  return type && typeof type === 'function'
}

export default isFunction