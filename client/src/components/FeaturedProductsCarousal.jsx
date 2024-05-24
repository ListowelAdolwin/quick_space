import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { products } from "../data/products";
import { Link } from "react-router-dom";

const FeaturedProductsCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const itemsPerView = {
		mobile: 2,
		desktop: 4,
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === products.length - itemsPerView.desktop
				? 0
				: prevIndex + 1
		);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0
				? products.length - itemsPerView.desktop
				: prevIndex - 1
		);
	};

	return (
		<div className="relative w-full max-w-7xl mx-auto py-16">
			<h2 className="text-2xl ml-4 font-bold text-gray-800">
				Featured Products
			</h2>
			<div className="overflow-hidden">
				<div
					className="flex transition-transform duration-300"
					style={{
						transform: `translateX(-${
							(currentIndex * 100) / itemsPerView.desktop
						}%)`,
					}}
				>
					{products.map((product, index) => (
						<Link
            to={`/product/${product.id}`}
							key={index}
							className="w-full sm:w-1/2 lg:w-1/4 p-4 flex-shrink-0"
						>
							<div className="bg-white p-6 rounded-lg shadow-md">
								<img
									src={product.image}
									alt={product.name}
									className="w-full h-40 object-cover mb-4"
								/>
								<h2 className="text-lg line-clamp-1 font-semibold">
									{product.name}
								</h2>
								<p className="text-gray-600">
									${product.price}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
			<button
				onClick={handlePrev}
				className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
			>
				<FiChevronLeft size={24} />
			</button>
			<button
				onClick={handleNext}
				className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
			>
				<FiChevronRight size={24} />
			</button>
		</div>
	);
};

export default FeaturedProductsCarousel;
