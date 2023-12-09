import { useState } from 'react'

export default function Testimonials() {
    const testimonialsData = [
        {
            name: 'Mia K.',
            quote: '"Marcela is a wonderful yoga instructor. She has a gentle presence and clear explanations. Her passion for yoga and its benefits is inspiring. I highly recommend her classes!"',
        },
        {
            name: 'Kathy K.',
            quote: '"Marcela truly cares about each student and the practice of yoga. Her calm explanations and directions keep one in the flow and encourage me. She is authentic, light-spirited, and respectful. She welcomes all levels into her classes."',
        },
        {
            name: 'Swati M.',
            quote: 'Based on a present - a beautiful Indian purse - given to me: "The pupils you teach come in different colors, body types, mental status, backgrounds. You are making a difference in their lives. Making it meaningful, beautiful for each. The design of the purse represents the harmony, symmetry and unity you bring. Thank you, lots of love and hugs"',
        },
        {
            name: 'Alicia & Brandy',
            quote: '“Thank you so much for making Mondays something to look forward to! Namaste”',
        },
    ]

    const [selectedTestimonial, setSelectedTestimonial] = useState(null)

    const handleNameClick = (name) => {
        setSelectedTestimonial(name)
    }

    return (
        <div className="testimonials-container">
            <h2 className="testimonails-title">See what people are saying</h2>
            <div className="testimonials-list">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <div
                            className="testimonial-name"
                            onClick={() => handleNameClick(testimonial.name)}
                        >
                            {testimonial.name}
                        </div>
                        {selectedTestimonial === testimonial.name && (
                            <div className="testimonial-quote">
                                {testimonial.quote}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
