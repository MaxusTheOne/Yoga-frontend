import AnimatedPage from '../AnimatedPage'
import Footer from '../Footer'
import Header from '../Header'

export default function FaceYoga() {
    return (
        <>
            <AnimatedPage>
                <Header />
                <h1 className="faceyoga-title">Benefits of face yoga</h1>
                <div className="faceyoga-grid">
                    <img
                        src="faceyoga.png"
                        style={{
                            height: 'auto',
                            width: '700px',
                            borderRadius: '20px',
                        }}
                        className="faceyoga-grid-item img-faceyoga"
                    />
                    <div className="faceyoga-grid-item">
                        <ul>
                            <li>Increase volume in cheeks and lips.</li>
                            <li>Improve facial contour and symmetry.</li>
                            <li>Release tension in you facial muscles.</li>
                            <li>
                                Improve skin texture and collagen production.
                            </li>
                            <li>Become aware of bad facial habits.</li>
                            <li>Learn to love yourself and your face.</li>
                        </ul>
                        <img
                            src="faceyoga2.png"
                            style={{
                                height: 'auto',
                                width: '500px',
                                borderRadius: '20px',
                            }}
                            className="faceyoga-grid-item img-faceyoga"
                        />
                    </div>
                </div>
                <Footer />
            </AnimatedPage>
        </>
    )
}
