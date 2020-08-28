import React, { Component, useState, useEffect } from 'react';
// import { timeToFormatDate } from '../utils/lib';
import { getPostById } from '../../shared/api';
import { Text } from '../'
import { ContainerComment } from './styles'
// import { Link } from "react-router-dom";

const Comments = (props) => {
  const [comments, setComments] = useState([])
  const getComments = () => {
    getPostById(props.data.id)
      .then((data) => {
        setComments(data.data.data)
      });
  }
  useEffect(() => {
    getComments()
  }, [])

  return (
    <>
      {comments.map((comment) => (
        <>
          <br />
          <ContainerComment>
            <Text semibold>{comment.owner.firstName} {comment.owner.lastName}</Text>
            <br />
            <Text>{comment.message}</Text>
          </ContainerComment>
        </>
      ))}

    </>
  );
}

export default Comments