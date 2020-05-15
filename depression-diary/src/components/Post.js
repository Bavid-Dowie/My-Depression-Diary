import React from 'react'

const Post = () => {
  return (
    <div>
      <form action='/action_page.php'
            id='daily-post'>
        <label  for='date'>Date:</label>
          <br/>
        <input  type='text'
                id='date'
                name='date' />
          <br/>
          <br/>
        <label for='mood'>Today I feel:</label>
          <br/>
        <input  type='text'
                id='mood'
                name='mood' />
          <br/>
          <br/>
        <input  type='submit'
                value='Submit' />
      </form>
    </div>
  )
}

export default Post
