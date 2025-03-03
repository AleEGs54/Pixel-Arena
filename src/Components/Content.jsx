import Hero from './Hero'

export default function Content(){
    return(
        <>
        <Hero
        title='How far is Glory?'
        description='Come and figure it out'
        callToActionLink="https://aleegs54.github.io/wdd231/project/membership.html"
        callToActionText={
            <>
            Join the <strong><span className='title'>Pixel Arena Membership</span></strong>
            </>
        }
        imageLink='./public/assets/images/hero-image.webp'
        imageAlt='A team in a gaming event'
        />
        
        </>
    )
}