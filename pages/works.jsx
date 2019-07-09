const React = require('react')

function Works () {
  return (
    <div>
      <a href="/">go to page that can't be built</a>
      <h1>I can render, and I can build</h1>
    </div>
  )
}

Works.default = Works
module.exports = Works
