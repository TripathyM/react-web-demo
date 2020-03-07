import React, { useState } from 'react'


const FeedbackForm = ({initFeedback}) => {

    const [feedbackText, setFeedbackText] = useState(initFeedback)
    
    const onFeedbackUpdate = (event) => {
        setFeedbackText(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div>
            <textarea
                   value = {feedbackText}
                   onChange = {e => setFeedbackText(e.target.value)}
            />
            
            <h4>{feedbackText}</h4>
        </div>
    )
}

export default FeedbackForm
