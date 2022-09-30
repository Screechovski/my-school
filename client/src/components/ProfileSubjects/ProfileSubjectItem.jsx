import React from 'react';

export const ProfileSubjectItem = ({id, title, image, description, years}) => {
    return (
        <>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>image: {image}</p>
            <p>description: {description}</p>
            <p>years: {years}</p>
        </>
    );
};
