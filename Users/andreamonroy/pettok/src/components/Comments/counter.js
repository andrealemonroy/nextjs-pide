import React, { Component, useState, useEffect } from 'react';
import { getPostById } from '../../shared/api';

const CommentsCounter = (props) => {
    const [comments, setComments] = useState([])
    const getComments = () => {
        getPostById(props.data.id)
            .then((data) => {
                setComments(data.data)
            });
    }
    useEffect(() => {
        getComments()
    }, [])

    return (
        <>
            {comments.total}
        </>
    );
}

export default CommentsCounter