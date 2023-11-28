import Header from './Header'
import Footer from './Footer'
import Testimonials from './Homepage/Testimonials'
import AboutMe from './Homepage/AboutMe'
import BenefitsYoga from './Homepage/BenefitsYoga'
import Practice from './Homepage/Practice'

export default function Homepage() {
    return (
        <div>
            <Header />
            <Testimonials />
            <AboutMe />
            <BenefitsYoga />
            <Practice />
            <Footer />
        </div>
    )
}
