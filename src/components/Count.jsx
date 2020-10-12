import React from 'react'

function Count({ text, count }) {
  return (
    <div>
      <h6 className="text-primary font-weight-bold my-3">
        {text}: {count}
      </h6>
    </div>
  )
}
export default Count
