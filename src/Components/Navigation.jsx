function NavItems(){
    return (
        <nav className="navigation-menu">
            <ul className="menu-list">
                <li className="menu-item" data-active><a href="#">Home</a></li>
                <li className="menu-item"><a href="#">Membeships</a></li>
                <li className="menu-item"><a href="#">About</a></li>
            </ul>
        </nav>
    )
}

function NavIcons(){
    return (
        <div className="nav-icons">
        <img src='public/assets/logos/pixel-arena-alternative-logo-large.webp' alt="Pixel Arena Logo" width={250} className="pixel-arena-logo"/>
        <img src='public/assets/logos/alien-logo.webp' alt="Pixel Arena Icon" width={64} className="alien-logo"/>
        </div>
    )
}


export default function Navigation() {
    return (
        <>
        <NavIcons/>
        <NavItems/>
        </>
    )
}