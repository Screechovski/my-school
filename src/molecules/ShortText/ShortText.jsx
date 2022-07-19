import React from 'react';

let lineHeightK = 1.3;

let defaultStyles = {
    'overflow': 'hidden',
    'display': '-webkit-box',
    'WebkitBoxOrient': 'vertical',
}

let tryStyles;

const ShortText = ({ tagName, lineHeight, lineCount, parentClass, text }) => {
    const CustomTag = `${tagName}`;

    if (lineHeight !== undefined) {
        lineHeightK = lineHeight
    }

    if (lineCount !== undefined) {
        tryStyles = {
            ...defaultStyles,
            'WebkitLineClamp': lineCount.toString(),
            'height': Number(lineCount) * lineHeightK + "em",
            'lineHeight': lineHeightK + 'em',
        }
    } else {
        tryStyles = {
            ...defaultStyles,
            'WebkitLineClamp': '3',
            'height': '3.6em',
            'lineHeight': lineHeightK + 'em',
        }
    }

    return <CustomTag style={tryStyles} className={parentClass}>{text}</CustomTag>;
}

export default ShortText;