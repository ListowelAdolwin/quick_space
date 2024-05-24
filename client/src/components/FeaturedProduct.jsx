import { Link } from "react-router-dom";
import { products } from "../data/products";


const FeaturedProducts = () => {
	return (
		<div className="bg-white py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-2xl font-bold text-gray-800">
					Featured Products
				</h2>
				<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{products.slice(0, 4).map((product) => (
						<Link
							to={`/product/${product.id}`}
							key={product.id}
							className="border border-blue-200 rounded-md group relative"
						>
							<div className="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
								<img
									src={product.image}
									alt={product.name}
									className="w-full h-full object-center object-cover"
								/>
							</div>
							<div className="pl-2 pb-2 mt-4 flex justify-between">
								<div>
									<h3 className="text-md text-gray-900">
										{product.name}
									</h3>
									<p className="mt-1 text-sm text-gray-500">
										{product.price}
									</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default FeaturedProducts;
