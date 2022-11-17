"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

const _default = Title;
export { _default as default };

function Title(_ref) {
    var title = _ref.title;
    return React.createElement(
        "h1",
        null,
        title
    );
}

React.createElement(Title, { title: "Hello World" });
