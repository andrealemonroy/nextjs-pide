import React, { useEffect, useState } from 'react'
import { Global, css } from '@emotion/core'
import globals from './GlobalStyles'
import { getPosts, getPostById } from './shared/api'
import { PostContainer, Flexbox, Text, Content, Comments, CommentsCounter } from './components';
import { heart, commentsSVG, shareSVG } from './assets';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ReactImageAppear from 'react-image-appear';

const App = () => {
  const [postsData, setPostData] = useState([])
  const [show, setShow] = useState(false)
  const [comments, setComments] = useState([])
  const [totalComments, setTotalComments] = useState([])
  const handlePosts = async () => {
    try {
      const { data } = (await getPosts()).data
      setPostData(data)
      setShow(true)
      // setComments(res.data.data)
      // data.map(post => {
      //   getPostById(post.id).then(res => {
      //     setComments(res.data.data)
      //   }).catch(err => {
      //     console.log(err)
      //   })
      // })
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    handlePosts()
  }, [])
  return (
    <>
      <Global
        styles={css`
          ${globals}
        `}
      />

      <TransitionGroup>
        {postsData.map((postData) => (
          <CSSTransition
            in={show}
            classNames="slide"
            key={postData.id}
            timeout={{ enter: 1000, exit: 1000 }}
          >
            <Flexbox mobileNone grid>
              <PostContainer key={postData.id}>
                <ReactImageAppear src={postData.image} />
              </PostContainer>
              <Content full>
                <Text semibold>{postData.owner.firstName} </Text>
                <Text semibold>{postData.owner.lastName}</Text> <br />
                <Text>{postData.text}</Text>
                <br />
                {postData.tags.map(tag => (
                  <Text>{tag} </Text>
                ))}
                <br /><br />
                <Flexbox evenly>
                  <img src={heart} />
                  <Text>{postData.likes}</Text>
                  <img src={commentsSVG} />
                  <Text><CommentsCounter data={postData}></CommentsCounter></Text>
                  <img src={shareSVG} />
                  {/* <Text>{getPostById(postData.id).then(res => console.log(res))}</Text> */}
                </Flexbox>
                <Comments data={postData} ></Comments>
              </Content>
            </Flexbox>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  )
}
export default App
