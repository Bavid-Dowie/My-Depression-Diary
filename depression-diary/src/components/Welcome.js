import React from 'react'

const Welcome = () => {
  return (
    <div>
      <h1 className='welcome-title'>Dear Journal</h1>
      <form action="/action_page.php">
        <label for="date">Date:</label>
        <input type="text" id="date" name="date" />
          <br/>
          <br/>
        <label for="mood">Today I feel:</label>
        <input type="text" id="mood" name="mood" />
          <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Welcome
