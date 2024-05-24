import { useState } from "react";
import { categories } from "../data/categories";

const AddProduct = () => {
	const [formData, setFormData] = useState({
		itemName: "",
		price: "",
		category: "",
		images: [],
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleFileChange = (e) => {
		setFormData({ ...formData, images: Array.from(e.target.files) });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic
		console.log(formData);
	};

	return (
		<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<h1 className="text-3xl font-bold text-gray-800 mb-4">
				Add Product
			</h1>
			<div className="bg-white p-6 rounded-lg shadow-md">
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="itemName"
						>
							Item Name
						</label>
						<input
							type="text"
							name="itemName"
							id="itemName"
							value={formData.itemName}
							onChange={handleChange}
							className="bg-gray-200 focus:bg-white text-gray-800 p-2 rounded w-full"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="price"
						>
							Price
						</label>
						<input
							type="number"
							name="price"
							id="price"
							value={formData.price}
							onChange={handleChange}
							className="bg-gray-200 focus:bg-white text-gray-800 p-2 rounded w-full"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="category"
						>
							Category
						</label>
						<select
							name="category"
							id="category"
							value={formData.category}
							onChange={handleChange}
							className="bg-gray-200 focus:bg-white text-gray-800 p-2 rounded w-full"
							required
						>
							<option value="">Select Category</option>
							{categories.map((category) => (
								<option
									key={category.val}
									value={category.val}
								>
									{category.name}
								</option>
							))}
						</select>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="images"
						>
							Images
						</label>
						<input
							type="file"
							name="images"
							id="images"
							multiple
							onChange={handleFileChange}
							className="bg-gray-200 focus:bg-white text-gray-800 p-2 rounded w-full"
							required
						/>
					</div>
					<div className="mb-4">
						<button
							type="submit"
							className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							Add Product
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
