import React from 'react'

function Title({ title }) {
  return (
    <div>
      <h1 className="text-primary">{title}</h1>
    </div>
  )
}

export default React.memo(Title)
