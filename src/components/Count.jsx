import React from 'react'

function Count({ text, count }) {
  return (
    <div>
      <h5 className="text-success font-weight-bold my-3">
        {text}: {count}
      </h5>
    </div>
  )
}
export default React.memo(Count)
