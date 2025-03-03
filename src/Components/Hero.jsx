import '../styles/Hero.css'

function CallToAction({callToActionText, callToActionLink}) {
    return (
        <div className="hero-call-to-action">
            <a href={callToActionLink}>{callToActionText}</a>
        </div>
    )
}

export default function Hero({ title, description, callToActionText = null, callToActionLink = null, imageLink, imageAlt }) {


    return (
        <div className="hero-container">
            <img src={imageLink} alt={imageAlt} fetchPriority="high" className='hero-image'/>
            <div className="hero-text">
                <h1>{title}</h1>
                <p>{description}</p>

                {callToActionText && callToActionLink && 

                <CallToAction 
                callToActionText={callToActionText}
                callToActionLink={callToActionLink}
                />
                }
            </div>
        </div>
    )
}