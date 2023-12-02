import Header from '../Header'
import Footer from '../Footer'
import AnimatedPage from '../AnimatedPage'

export default function PrivateSessions() {
    return (
        <>
            <AnimatedPage>
                <Header />
                <div className="online-grid">
                    <img
                        src="oneonone.png"
                        className="online-grid-item"
                        style={{
                            height: 'auto',
                            width: '600px',
                            borderRadius: '20px',
                        }}
                    />
                    <div className="online-grid-item">
                        <h2>
                            FLOW & VINYASA | GENTLE FLOW | YIN | YANG | FACE
                            YOGA
                        </h2>
                        <h3>
                            Deepen awareness | Get stronger | (re) Gain mobility{' '}
                        </h3>
                        <p>
                            Private sessions are one-on-one classes or small
                            group classes offering the opportunity to create
                            custom tailored sessions adapted to your specific
                            needs. Whether you are a beginner or a more
                            experienced yogi, private sessions are a great way
                            to deepen your practice, establish a greater
                            connection to your body, and expand your knowledge
                            of yoga.
                            <br /> <br /> Private yoga is a fantastic and
                            effective way to open and heal your body emotionally
                            and/or physically. It is a great way to build
                            strength and connection with your body, mind, and
                            spirit. <br /> <br />
                        </p>
                        <h4>HOW IT WORKS</h4> <br />
                        <p>
                            Sessions whether one-on-one, smaller groups, or
                            corporate settings, are held in my at-home yoga
                            room, in the comfort of your home or any other
                            private setting of your choosing.
                            <br /> <br />
                            On one-on-one yoga sessions with me, the main focus
                            is on the fundamentals of yoga. Whether you are at
                            the very beginning of your yoga journey or have been
                            practicing for some time, our sessions are all about
                            meeting you exactly where you are. It is a great way
                            to either dig deeper or start your practice. <br />{' '}
                            <br /> We will, in a safe, meaningful, and strong
                            manner focus on essential yoga techniques for yoga
                            poses, breath, and meditation. Essentially creating
                            a sustainable yoga practice that you will want to
                            keep growing and exploring, just as much on your
                            own.
                        </p>
                        <br />
                        <h4>FIRST SESSION</h4> <br />
                        <p>
                            The first session is a getting to know each other
                            session. We will go through a conversation about
                            what you are looking for, an introduction to what
                            you can expect from me, and any other points that
                            apply to our first meeting. A first practice will
                            also happen on this day. This is included in the
                            price. <br /> <br />
                            Let´s work together to help you experience
                            intimately the extensive benefits of yoga!
                        </p>{' '}
                        <br />
                    </div>
                </div>
                <div className="investment-grid">
                    <h3>INVESTMENT</h3> <br />
                    <p className="investment-grid-item">
                        SINGLE SESSIONS 1 hour: $100 75 min: $125
                    </p>
                    <p className="investment-grid-item">
                        PACKAGES 75 MIN SESSIONS 5 Pack: $575.00 ($115/class) 10
                        Pack: $1,100.00 ($110/class)
                    </p>
                    <p className="investment-grid-item">
                        PACKAGES 1 HR SESSIONS 5 Pack: $475 ($95/hour) 10 Pack:
                        $900 ($90/hour)
                    </p>
                    <p>Please contact me at any time for more information.</p>
                </div>
                <Footer />
            </AnimatedPage>
        </>
    )
}
