import React, { useState } from 'react';
import Rating from 'react-simple-star-rating'

const Stars = () => {
    const [ value, setValue ] = useState(0);

    const handleRating = (value) => {
        setValue(value)
    }
    return (
             <div>
      <Rating
        onClick={handleRating}
        ratingValue={value}
        size={20}
        label
        transition
        fillColor='orange'
        emptyColor='gray'
        className='foo' // Will remove the inline style if applied
      />
      {/* Use rating value */}
      {value}
        </div>
    )
}

export default Stars;
