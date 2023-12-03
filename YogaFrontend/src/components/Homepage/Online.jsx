import Header from '../Header'
import Footer from '../Footer'
import AnimatedPage from '../AnimatedPage'

export default function Online() {
    return (
        <>
            <AnimatedPage>
                <Header />
                <div className="onlinepage-grid">
                    <img
                        src="onlinepage.png"
                        style={{
                            height: 'auto',
                            width: '700px',
                            borderRadius: '20px',
                        }}
                        className="onlinepage-grid-item"
                    />
                    <div className="onlinepage-grid-item">
                        <h1>YouTube</h1>
                        <a href="https://www.youtube.com/channel/UCdwDmBI8hkpvqJfn1L1NVYQ">
                            Marcela Christjansen Yoga
                        </a>{' '}
                        <br />
                        <a href="https://www.youtube.com/user/BreatheLosGatos">
                            Breathe Together Yoga
                        </a>
                    </div>
                </div>

                <Footer />
            </AnimatedPage>
        </>
    )
}
