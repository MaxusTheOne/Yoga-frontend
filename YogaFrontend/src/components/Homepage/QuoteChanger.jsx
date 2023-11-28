import React, { useState, useEffect } from 'react'

export default function QuoteChanger() {
    const [quotes, setQuotes] = useState([
        '"Marcela is a wonderful yoga instructor.  She has a gentle presence and clear explanations. Her passion for yoga and its benefits is inspiring.  I highly recommend her classes!" - Mia K.',
        '"Marcela truly cares about each student and the practice of yoga.  Her calm explanations and directions keep one in the flow and encourage me.  She is authentic, light-spirited, and respectful.  She welcomes all levels into her classes." - Kathy K',
        'Based on a present - a beautiful Indian purse - given to me: "The pupils you teach come in different colors, body types, mental status, backgrounds. You are making a difference in their lives. Making it meaningful, beautiful for each. The design of the purse represents the harmony, symmetry and unity you bring. Thank you, lots of love and hugs" - Swati M.',
        '“Thank you so much for making Mondays something to look forward to! Namaste” -  Alicia & Brandy',
    ])

    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)

    useEffect(() => {
        // Function to change the quote every 3 seconds
        const intervalId = setInterval(() => {
            setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length)
        }, 1000)

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId)
    }, [quotes.length])

    return (
        <div className="quote-container">
            <h1 className="quote-container-title">Testimonials</h1>
            <p className="quote-fade-in">{quotes[currentQuoteIndex]}</p>
        </div>
    )
}
