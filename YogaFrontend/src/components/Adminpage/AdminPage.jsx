import AnimatedPage from '../AnimatedPage'
import Footer from '../Footer'
import Header from '../Header'
import Login from './Login'

export default function AdminPage() {
    return (
        <>
            <Header />
            <AnimatedPage>
                <div className="adminPage-container">
                    <Login />
                </div>
            </AnimatedPage>
            <Footer />
        </>
    )
}
