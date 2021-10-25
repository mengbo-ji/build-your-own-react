import diff from './diff'
function render(virtualDom, root, oldDom = root.firstChild) {
  diff(virtualDom, root, oldDom)
}
export default render;