import Footer from '../Footer'
import Header from '../Header'
import MediaCard from './MediaCard'

export default function MediaPage() {
    const yogaMedia = [
        {
            title: 'Flow video class',
            description:
                'This is a class about flow. Click the title to be directed to the video',
            img: 'https://www.stockvault.net/data/2018/06/24/252636/preview16.jpg',
            link: 'https://youtu.be/ke9XLlSvbjk?feature=shared',
        },
        {
            title: 'Sleeping Yoga',
            description: 'this is an article about sleeping yoga',
            img: 'https://www.stockvault.net/data/2018/06/24/252636/preview16.jpg',
            link: 'https://en.wikipedia.org/wiki/Yoga',
        },
        {
            title: 'Jumping Yoga',
            description: 'this is an article about jumping yoga',
            img: 'https://www.stockvault.net/data/2018/06/24/252636/preview16.jpg',
            link: 'https://en.wikipedia.org/wiki/Yoga',
        },
        {
            title: 'Talking Yoga',
            description: 'this is an article about talking yoga',
            img: 'https://www.stockvault.net/data/2018/06/24/252636/preview16.jpg',
            link: 'https://en.wikipedia.org/wiki/Yoga',
        },
    ]

    const yogaCardList = yogaMedia.map((item) => (
        <MediaCard
            key={item.title}
            title={item.title}
            description={item.description}
            img={item.img}
            link={item.link}
        />
    ))

    return (
        <>
            <Header />
            <h1>Testing for media page</h1>
            <div className="card-contaner">{yogaCardList}</div>
            <Footer />
        </>
    )
}
