import './Hero.css'


function Hero()
{
    
    return(
        <section id="home">
            <div  className="hero">
                <div className="hero-content">
                    <h2>Discover Delicious Recipes</h2>
                    <p>Explore a world of delicious and easy recipes. From tasty main dishes to sweet desserts, find your next favorite meal and enjoy cooking something special!</p>
                </div>
                <img src="https://i.pinimg.com/736x/cd/05/27/cd05273b989602621271ebfe12795b63.jpg" alt="Hero Recipes" width="200"/>
            </div>
            <button className="explore" onClick={()=>window.location= "#recipes"}>Explore Recipes</button>
        </section>
    )
}

export default Hero;