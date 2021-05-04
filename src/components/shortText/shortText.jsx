import React from 'react';

let lineHeightK = 1.3;

let defaultStyles = {
    'overflow': 'hidden',
    'display': '-webkit-box',
    'WebkitBoxOrient': 'vertical',
}

let tryStyles;

const shortText = (props) => {
    const CustomTag = `${props.tagName}`;

    if (props.lineHeight !== undefined) {
        lineHeightK = props.lineHeight
    }

    if (props.lineCount !== undefined) {
        tryStyles = {
            ...defaultStyles,
            'WebkitLineClamp': props.lineCount.toString(),
            'height': Number(props.lineCount) * lineHeightK + "em",
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

    return (
        <CustomTag style={tryStyles} className={`${props.parentClass}`}>{props.text}</CustomTag>
    );
}

export default shortText;