import { FiHeart, FiShoppingCart } from "react-icons/fi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import "./SwipperStyles.css";

import { CiStar } from "react-icons/ci";
import bottle1 from "../assets/category_images/bottle1.webp";
import jordan1 from "../assets/category_images/jordan1.webp";
import bag3 from "../assets/category_images/bag3.jpg";
import note1 from "../assets/category_images/note1.jpeg";

const ProductDetail = () => {
	// Dummy data for the product
	const product = {
		id: 1,
		name: "Product Name",
		price: "₵199.99",
		images: [bottle1, jordan1, note1, bag3],
		poster: {
			name: "John Doe",
			email: "john@example.com",
			phone: "+1 234 567 890",
		},
		rating: 4.5,
		reviews: [
			{ id: 1, name: "Alice", rating: 5, comment: "Great product!" },
			{ id: 2, name: "Bob", rating: 4, comment: "Good value for money." },
			{
				id: 3,
				name: "Charlie",
				rating: 4,
				comment: "Satisfied with the purchase.",
			},
		],
	};

	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-grow">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<div className="flex flex-col space-y-4">
								<Swiper
									pagination={{
										type: "fraction",
									}}
									navigation={true}
									modules={[Pagination, Navigation]}
									className="mySwiper"
								>
									{product.images.map((image) => (
										<SwiperSlide key={image}>
											{" "}
											<img src={image} alt="" />
										</SwiperSlide>
									))}
								</Swiper>
							</div>
						</div>
						<div>
							<h1 className="text-3xl font-bold text-gray-800">
								{product.name}
							</h1>
							<div className="flex items-center gap-16">
								<p className="text-2xl text-gray-600 mt-4">
									{product.price}
								</p>
								<div className="text-white flex items-center mt-4 px-3 py-1 bg-yellow-400 rounded-md">
									<span className="flex items-center text-xl font-bold mr-1">
										<CiStar />
									</span>
									<span className="text-lg font-semibold">
										{product.rating}
									</span>
									<span className="ml-2">/ 5.0</span>
								</div>
							</div>

							<div className="mt-8">
								<h2 className="text-xl font-semibold text-gray-800">
									About the product owner
								</h2>
								<p className="mt-2 text-gray-600">
									Vendor name: {product.poster.name}
								</p>
								<p className="mt-1 text-gray-600">
									Email: {product.poster.email}
								</p>
								<p className="mt-1 text-gray-600">
									Phone: {product.poster.phone}
								</p>
							</div>
							<div className="flex items-center mt-6 space-x-4">
								<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
									<FiShoppingCart className="mr-2" /> Add to
									Cart
								</button>
								<button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center">
									<FiHeart className="mr-2" /> Favourite
								</button>
							</div>
							<div className="mt-8">
								<h2 className="text-xl font-semibold text-gray-800">
									Reviews
								</h2>
								<div className="mt-4 space-y-4">
									{product.reviews.map((review) => (
										<div
											key={review.id}
											className="bg-gray-100 p-4 rounded-lg shadow-md"
										>
											<div className="flex items-center">
												<span className="text-yellow-500 text-lg font-semibold">
													{review.rating}
												</span>
												<span className="ml-2 text-gray-600">
													/ 5.0
												</span>
												<span className="ml-4 text-gray-800 font-bold">
													{review.name}
												</span>
											</div>
											<p className="mt-2 text-gray-600">
												{review.comment}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default ProductDetail;
