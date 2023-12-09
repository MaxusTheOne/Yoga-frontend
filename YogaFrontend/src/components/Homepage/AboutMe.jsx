export default function AboutMe() {
    return (
        <div className="aboutMe-grid">
            <div className="aboutMe-grid-item">
                <div className="aboutMe-text-container">
                    <p
                        className="aboutMe-title"
                        style={{ fontWeight: 'bolder' }}
                    >
                        About me{' '}
                    </p>
                    <p className="aboutMe-text">
                        I am passionate about helping others transform their
                        lives by teaching them to live in health, strength, joy,
                        and balance. I have been practicing and studying
                        transformational techniques including yoga, meditation,
                        stress release and breathing techniques for nearly 18
                        years. Originally from Mexico, and have lived in France,
                        UK, Switzerland, Denmark, and USA where I learned from
                        the very best teachers I have met on my path. At the age
                        of 24, while in a whole new country and looking for new
                        ways to meet people and exercise, I tried yoga for the
                        first Ame. Little did I know that at that very moment,
                        my life would change for the better. I remember feeling
                        at home – within my own skin – it felt intuitively
                        right. It was not long after that first class, that I
                        noticed how I’d gotten better at handling the challenges
                        of my new life, how I was feeling better physically, and
                        emotionally. I was hooked! I am dedicated to teaching
                        from a place that creates connection between our noisy,
                        at times stressful, lives and the inner wisdom of the
                        mind, body & breath.
                    </p>
                </div>
            </div>
            <img
                className="aboutMe-grid-item aboutMe-img"
                src="/test.png"
                style={{
                    height: 'auto',
                    width: '700px',
                    borderRadius: '20px',
                }}
            />
        </div>
    )
}
