"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cc = cc;
exports.jsxTextContent = jsxTextContent;
function cc(...classes) {
    if (classes.length > 1)
        return classes.map((c) => cc(c)).join(" ");
    else if (typeof classes[0] === "object")
        return Object.keys(classes[0])
            .filter((c) => classes[0][c])
            .join(" ");
    else
        return classes[0].toString();
}
function jsxTextContent(node) {
    if (typeof node === 'string' || typeof node === 'number' || typeof node === 'boolean') {
        return node.toString();
    }
    if (!node) {
        return '';
    }
    if (Array.isArray(node)) {
        return node.map((entry) => jsxTextContent(entry)).join('');
    }
    const props = node.props ? node.props : {};
    if (!props || !props.children) {
        return '';
    }
    return jsxTextContent(props.children);
}
exports.default = jsxTextContent;
//# sourceMappingURL=jsx.js.map