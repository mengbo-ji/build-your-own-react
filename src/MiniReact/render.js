import diff from './diff'
function render(virtualDom, root, oldDom) {
  diff(virtualDom, root, oldDom)
}
export default render;