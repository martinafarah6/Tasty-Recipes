import './Header.css'

export default function Header()
{
    return(
        <section id="header">
            <h1>Tasty Recipes</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#recipes">Recipes</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
        </section>
    )
}
