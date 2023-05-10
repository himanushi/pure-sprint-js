/**
 * Create a new HTML element.
 * @param {string} tag - The tag name of the element.
 * @param {...(Node|string)} children - The child elements.
 * @returns {HTMLElement} The new HTML element.
 */
export function t(tag, ...children) {
  const element = document.createElement(tag)

  for (const child of children) {
    if (typeof child === 'string') {
      element.textContent = child
    } else {
      element.appendChild(child)
    }
  }

  return element
}
