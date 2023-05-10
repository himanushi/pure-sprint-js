/**
 * Append an element to the app container.
 * @param {Node} element - The element to append.
 */
export function app(element) {
  const container = document.getElementById('app')
  container.appendChild(element)
}

/**
 * Create a new HTML element.
 * @param {string} tag - The tag name of the element.
 * @param {...(Node|string)} children - The child elements.
 * @returns {HTMLElement} The new HTML element.
 */
export function t(tag, ...children) {
  const element = window.document.createElement(tag)

  for (const child of children) {
    if (typeof child === 'string') {
      element.textContent = child
    } else {
      element.appendChild(child)
    }
  }

  return element
}

/**
 * Create a new div element.
 * @param {...(Node|string)} children - The child elements.
 * @returns {HTMLElement} The new div element.
 */
export function div(...children) {
  return t('div', ...children)
}
