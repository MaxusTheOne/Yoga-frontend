import Footer from './Footer'
import AnimatedPage from './AnimatedPage'
import Practice from './Practice'
import Welcome from './Welcome'
import Testimonials from './Testimonials'
import BenefitsYoga from './BenefitsYoga'
import FAQ from './FAQ'
import HeaderHomepage from './HeaderHomepage'
import AboutMe from './AboutMe'

//This function serves to scroll dynamically based on screensize so that it will work for different screens

export default function Homepage() {
    function scrollByPercentage(percentage) {
        const windowHeight = window.innerHeight
        const targetY =
            (document.body.scrollHeight - windowHeight) * (percentage / 100)

        window.scrollTo({
            top: targetY,
            behavior: 'smooth',
        })
    }

    return (
        <div>
            <HeaderHomepage
                scrollToFAQ={() => scrollByPercentage(67)}
                scrollToHIH={() => scrollByPercentage(49)}
            />
            <AnimatedPage>
                <Welcome />
                <Testimonials />
                <BenefitsYoga />
                <FAQ />
                <Practice />
                <AboutMe />
            </AnimatedPage>
            <Footer />
        </div>
    )
}
