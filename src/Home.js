import React from 'react';
import "./Home.css";
import Product from "./Product";


function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' alt="" src="../amazon-home-background-image.jpg" />
            </div>
            <div className='home__row'>
                <Product 
                    id= {1}
                    title = "2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB SSD) - Space Grey"
                    price= {110900}
                    image="../MacBook-Pro.jpg"
                    rating={5}
                />
                <Product 
                    id={2}
                    title = "Sony Bravia 138 cm (55 inches) 4K Ultra HD Smart Android LED TV KD-43X74 (Black) (2021 Model) | with Alexa Compatibility"
                    price={89990}
                    image="../Sony-tv.jpg"
                    rating={4}
                />
            </div>
            <div className='home__row'>
                <Product 
                    id={3}
                    title = "DO EPIC SHIT Hardcover – published on 27 December 2021"
                    price= {340}
                    image = "../Do-Epic-Shit.jpg"
                    rating = {4}
                />
                <Product 
                    id={4}
                    title = "Amazon Brand - Solimo XXXL Bean Bag Filled With Beans (Purple)"
                    price={1490}
                    image = "../Bean-bag.png"
                    rating = {3}
                />
                <Product 
                    id={5}
                    title = "Trived Soft Push Stuffed Jumbo Teddy Bear, 2 feet in Brown Color All Occasions Including Mother's Day"
                    price={999}
                    image="../teddy.jpg"
                    rating={3}
                />
            </div>
            <div className='home__row'>
                <Product 
                    id={6}
                    title = "Dell 24 Monitor-S2421HN in-Plane Switching (IPS), Flicker-Free Screen with Comfort View, Full HD (1080p) 1920 x 1080 at 75 Hz with AMD Free Sync, with Dual HDMI Ports, 3 Sided Ultrathin Bezel."
                    price={13990}
                    image="../Long-monitor.jpg"
                    rating={5}
                />
                <Product 
                    id={7}
                    title = "Inephos Multiple Frames Beautiful chinese tree Wall Painting (Multi Color, 150 cm x 76 cm, Abstract) - Set of 3"
                    price={599}
                    image="../Painting.jpg"
                    rating={5}
                />
            </div>
        </div>
    );
}

export default Home;