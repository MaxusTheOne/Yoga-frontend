import Footer from '../Footer'
import Header from '../Header'
import MediaCard from './MediaCard'

export default function MediaPage() {
    const yogaMedia = [
        {
            title: 'Flow video class',
            description: 'This is a class about flow.',
            img: 'https://www.stockvault.net/data/2018/06/24/252636/preview16.jpg',
            link: 'https://youtu.be/ke9XLlSvbjk?feature=shared',
            linkDescription: 'See media',
        },
        {
            title: 'Sleeping Yoga',
            description: 'this is an article about sleeping yoga',
            img: 'https://www.stockvault.net/data/2018/06/24/252636/preview16.jpg',
            link: 'https://en.wikipedia.org/wiki/Yoga',
            linkDescription: 'See media',
        },
        {
            title: 'Jumping Yoga',
            description: 'this is an article about jumping yoga',
            img: 'https://www.stockvault.net/data/2018/06/24/252636/preview16.jpg',
            link: 'https://en.wikipedia.org/wiki/Yoga',
            linkDescription: 'See media',
        },
        {
            title: 'Talking Yoga',
            description: 'this is an article about talking yoga',
            img: 'https://www.stockvault.net/data/2018/06/24/252636/preview16.jpg',
            link: 'https://en.wikipedia.org/wiki/Yoga',
            linkDescription: 'See media',
        },
    ]

    const yogaCardList = yogaMedia.map((item) => (
        <MediaCard
            key={item.title}
            title={item.title}
            description={item.description}
            img={item.img}
            link={item.link}
            linkDescription={item.linkDescription}
        />
    ))

    return (
        <>
            <Header />
            <h1>Testing for media page</h1>
            <div className="card-container">{yogaCardList}</div>
            <Footer />
        </>
    )
}
