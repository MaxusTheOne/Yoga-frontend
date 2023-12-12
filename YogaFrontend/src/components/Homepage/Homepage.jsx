import Footer from './Footer'
import AnimatedPage from './AnimatedPage'
import Practice from './Practice'
import Welcome from './Welcome'
import Testimonials from './Testimonials'
import BenefitsYoga from './BenefitsYoga'
import FAQ from './FAQ'
import HeaderHomepage from './HeaderHomepage'
import AboutMe from './AboutMe'

// export default function Homepage() {
//     function scrollBySmooth(distanceX, distanceY) {
//         const currentX = window.scrollX
//         const currentY = window.scrollY

//         window.scrollTo({
//             left: currentX + distanceX,
//             top: currentY + distanceY,
//             behavior: 'smooth',
//         })
//     }

//     function scrollToFAQ() {
//         scrollBySmooth(0, 1800)
//     }

//     function scrollToHIH() {
//         scrollBySmooth(0, 1200)
//     }

//     return (
//         <div>
//             <HeaderHomepage
//                 scrollToFAQ={scrollToFAQ}
//                 scrollToHIH={scrollToHIH}
//             />
//             <AnimatedPage>
//                 <Welcome />
//                 <Testimonials />
//                 <BenefitsYoga />
//                 <FAQ />
//                 <Practice />
//                 <AboutMe />
//             </AnimatedPage>
//             <Footer />
//         </div>
//     )
// }

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
                scrollToFAQ={() => scrollByPercentage(67)} // Scroll to 30% of the page
                scrollToHIH={() => scrollByPercentage(51)} // Scroll to 60% of the page
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
