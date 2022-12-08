export function getUniqueSelector(node) {
  let selector = "";
  while (node.parentElement) {
    const siblings = Array.from(node.parentElement.children).filter(
      (e) => e.tagName === node.tagName
    );
    selector =
      (siblings.indexOf(node)
        ? `${node.tagName}:nth-of-type(${siblings.indexOf(node) + 1})`
        : `${node.tagName}`) + `${selector ? " > " : ""}${selector}`;
    node = node.parentElement;
  }
  return `html > ${selector.toLowerCase()}`;
}

export function mouseY(evt) {
  if (evt.pageY) {
    return evt.pageY;
  } else if (evt.clientY) {
    return (
      evt.clientY +
      (document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop)
    );
  } else {
    return null;
  }
}

export function mouseX(evt) {
  if (evt.pageX) {
    return evt.pageX;
  } else if (evt.clientX) {
    return (
      evt.clientX +
      (document.documentElement.scrollLeft
        ? document.documentElement.scrollLeft
        : document.body.scrollLeft)
    );
  } else {
    return null;
  }
}
