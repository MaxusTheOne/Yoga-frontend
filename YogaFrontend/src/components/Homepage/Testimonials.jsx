import QuoteChanger from './QuoteChanger'

export default function Testimonials() {
    return (
        <div className="grid-testimonials">
            <img
                style={{
                    height: 'auto',
                    width: '700px',
                    borderRadius: '20px',
                }}
                src="/me.webp"
                alt="Example"
                className="grid-item-testimonials"
            />
            <QuoteChanger className="grid-item-testimonials" />
        </div>
    )
}
