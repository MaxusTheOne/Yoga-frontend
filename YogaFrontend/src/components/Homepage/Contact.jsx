import AnimatedPage from './AnimatedPage'
import Footer from './Footer'
import Header from './Header'

export default function Contact() {
    return (
        <>
            <Header />
            <AnimatedPage>
                <h1 className="contact-title">Contact information</h1>
                <div className="contact-container">
                    <div className="contact-text">
                        Email:
                        <a
                            className="contact-item"
                            href="mailto:machristjansen@gmail.com"
                        >
                            machristjansen@gmail.com
                        </a>
                        Phone:
                        <p className="contact-item">+1.408.442.8816</p>
                        Location:
                        <p className="contact-item">Los Gatos, CA</p>
                    </div>
                </div>
            </AnimatedPage>
            <Footer />
        </>
    )
}
