import React, {useState} from 'react'
import "./TweetBox.css"
import {Avatar, Button} from "@mui/material";
import db from "./firebase"
function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      displayName: 'bakkyyin',
      userName: "yinyiyn",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://bit.ly/fcc-running-cats"
    });
    setTweetImage('')
    setTweetMessage('')
  }
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src = "https://bit.ly/fcc-running-cats"></Avatar>
                <input 
                onChange={(e) => setTweetMessage(e.target.value)}
                value = {tweetMessage} 
                placeholder={`What's happening?`}/>
                
            </div>
            <input
            onChange={(e) => setTweetImage(e.target.value)}
            value={tweetImage}
             className='tweetBox__imageInput' placeholder='Optional: Enter Image URL' type='text'/>
            <Button 
            onClick={sendTweet}
            type='submit'
            className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox