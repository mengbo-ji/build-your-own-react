import isFunction from "./isFunction";

function isFunctionComponent(virtualDom) {
  const type = virtualDom.type;
  return type && isFunction(virtualDom) && !(type.prototype && type.prototype.render)
}

export default isFunctionComponent
