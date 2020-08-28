import React, { useState, useContext, useEffect } from 'react'
import {
    Container
} from './styles'

const PostContainer = ({ ...props }) => {
    return (
        <>
            <Container>{props.children}</Container>
        </>
    )
}

export default PostContainer
