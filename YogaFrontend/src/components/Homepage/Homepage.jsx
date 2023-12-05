import Header from './Header'
import Footer from './Footer'
import Testimonials from './Testimonials'
import AboutMe from './AboutMe'
import BenefitsYoga from './BenefitsYoga'
import Practice from './Practice'
import AnimatedPage from './AnimatedPage'

export default function Homepage() {
    return (
        <div>
            <Header />
            <AnimatedPage>
                <Testimonials />
                <AboutMe />
                <BenefitsYoga />
                <Practice />
            </AnimatedPage>
            <Footer />
        </div>
    )
}
