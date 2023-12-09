import Header from './Header'
import Footer from './Footer'
import AnimatedPage from './AnimatedPage'
import Practice from './Practice'
import Welcome from './Welcome'
import Testimonials from './Testimonials'
import BenefitsYoga from './BenefitsYoga'

export default function Homepage() {
    return (
        <div>
            <Header />
            <AnimatedPage>
                <Welcome />
                <Testimonials />
                <BenefitsYoga />
                <Practice />
            </AnimatedPage>
            <Footer />
        </div>
    )
}
