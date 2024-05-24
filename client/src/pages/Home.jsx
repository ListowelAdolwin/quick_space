import HeroBanner from '../components/HeroBanner';
import FeaturedProducts from '../components/FeaturedProduct';
import Categories from '../components/Categories';
import FeaturedProductsCarousel from '../components/FeaturedProductsCarousal';

function Home() {
    return (
        <div className="App">
            <main>
                <FeaturedProductsCarousel />
                <Categories />
            </main>
        </div>
    );
}

export default Home;
