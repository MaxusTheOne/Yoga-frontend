import { useState } from 'react'

export default function FAQ() {
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false) // Added state for new question

    function toggleAnswer(questionNumber) {
        if (questionNumber === 1) {
            setIsOpen1((prev) => !prev)
        } else if (questionNumber === 2) {
            setIsOpen2((prev) => !prev)
        } else if (questionNumber === 3) {
            // Added condition for new question
            setIsOpen3((prev) => !prev)
        }
    }

    return (
        <>
            <div className="FAQ-container">
                <h1 className="faq-title">FAQ</h1>

                {/* Existing questions and answers */}
                <div className="faq-question" onClick={() => toggleAnswer(1)}>
                    <h3>How can I practice with you?</h3>
                </div>
                {isOpen1 && (
                    <div className="faq-answer">
                        <p>
                            You can always catch my online classes either over
                            at Breathe Together Yogas{' '}
                            <a className="faq-a" href="">
                                home page
                            </a>{' '}
                            or on my{' '}
                            <a className="faq-a" href="">
                                YouTube channel
                            </a>
                            . If you are a teacher or curious practitioner, you
                            can practice AND learn in person and via Zoom.
                        </p>
                    </div>
                )}

                <div className="faq-question" onClick={() => toggleAnswer(2)}>
                    <h3>
                        I’m interested in yoga and coaching. Can you help with
                        both?
                    </h3>
                </div>
                {isOpen2 && (
                    <div className="faq-answer">
                        <p>
                            Yes, we can have a talk together and figure out what
                            the best approach is for you and your wishes. You
                            can find my information on the contact page.
                        </p>
                    </div>
                )}

                {/* New question and answer */}
                <div className="faq-question" onClick={() => toggleAnswer(3)}>
                    <h3>How can I get more information on this site?</h3>
                </div>
                {isOpen3 && (
                    <div className="faq-answer">
                        <p>
                            You can click the pictures below to see more or you
                            can navigate to the menu, on the left, at the top of
                            the page for upcoming events and content about yoga.
                        </p>
                    </div>
                )}
            </div>
        </>
    )
}
