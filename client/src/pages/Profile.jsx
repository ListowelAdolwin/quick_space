const UserProfile = () => {
	// Dummy data for user and products
	const user = {
		name: "John Doe",
		email: "john.doe@example.com",
		phone: "123-456-7890",
		school: "School 1",
		profilePicture: "https://via.placeholder.com/150",
	};

	const postedProducts = [
		{
			id: 1,
			name: "Product 1",
			price: "$99.99",
			image: "https://via.placeholder.com/150",
		},
		{
			id: 2,
			name: "Product 2",
			price: "$149.99",
			image: "https://via.placeholder.com/150",
		},
		{
			id: 3,
			name: "Product 3",
			price: "$199.99",
			image: "https://via.placeholder.com/150",
		},
	];

	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-grow">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<h1 className="text-3xl font-bold text-gray-800 mb-4">
						User Profile
					</h1>
					<div className="flex flex-wrap items-start justify-between gap-5 bg-white p-6 rounded-lg shadow-md">
						<div className="basis-3/12 flex flex-col gap-4 space-x-6 text-start">
								<h2 className="text-2xl font-semibold text-gray-800">
									{user.name}
								</h2>
								<p className="text-gray-600">{user.email}</p>
								<p className="text-gray-600">{user.phone}</p>
								<p className="text-gray-600">
									School: {user.school}
								</p>
								<button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
									Update Profile
								</button>
						</div>

						<div className="basis-8/12">
							<h2 className="text-2xl font-semibold text-gray-800 mb-4">
								Products Posted
							</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
								{postedProducts.map((product) => (
									<div
										key={product.id}
										className="bg-gray-100 p-4 rounded-lg shadow-md"
									>
										<img
											src={product.image}
											alt={product.name}
											className="w-full h-56 object-cover object-center"
										/>
										<div className="mt-4">
											<h3 className="text-xl font-semibold text-gray-800">
												{product.name}
											</h3>
											<p className="text-gray-600 mt-2">
												{product.price}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default UserProfile;
