import Header from './Header'
import Footer from './Footer'
import Testimonials from './Homepage/Testimonials'
import AboutMe from './Homepage/AboutMe'
import BenefitsYoga from './Homepage/BenefitsYoga'
import Practice from './Homepage/Practice'
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
