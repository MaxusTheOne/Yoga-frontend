export default function AboutMe() {
    return (
        <div className="aboutMe-grid">
            <div className="aboutMe-grid-item">
                <p style={{ fontWeight: 'bolder' }}>About me </p>
                <p>
                    {' '}
                    <br />
                    My name is Marcela. I am a passionate yoga teacher dedicated
                    to helping others transform their lives by teaching them to
                    live in health, strength, joy and balance. <br /> <br />
                    I&apos;ve been practicing and studying transformational
                    techniques including yoga, meditation, stress release and
                    breath work for over 25 years, living in Mexico, France, UK,
                    Switzerland, Denmark and now USA where I learned from the
                    very best teachers I&apos;ve met on my path.
                    <br />
                    <br /> At the age of 24, while in a whole new country and
                    looking for new ways to meet people and exercise, I tried
                    yoga for the first time. Little did I know that at that very
                    moment, my life would change for the better. I remember
                    feeling at home within my own skin it felt intuitively
                    right. It was not long after that first class, that I
                    noticed how I&apos;d gotten better at handling the
                    challenges of my new life, how I was feeling better
                    physically, and emotionally. I was hooked!
                    <br /> <br /> I am dedicated to teaching from a place that
                    creates connection between our noisy, at times stressful,
                    lives and the inner wisdom of the mind, body and breath.
                </p>
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
