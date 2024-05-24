import { useState } from 'react';

const Login = () => {
    const [userType, setUserType] = useState('normal');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        vendorName: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUserTypeChange = (type) => {
        setUserType(type);
        setFormData({
            username: '',
            password: '',
            vendorName: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formData);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Login</h1>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="mb-6">
                            <button
                                className={`mr-4 py-2 px-4 rounded ${userType === 'normal' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                                onClick={() => handleUserTypeChange('normal')}
                            >
                                Login as buyer
                            </button>
                            <button
                                className={`py-2 px-4 rounded ${userType === 'vendor' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                                onClick={() => handleUserTypeChange('vendor')}
                            >
                                Login as Vendor
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {userType === 'normal' && (
                                <>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            className="bg-gray-200 focus:bg-white text-gray-800 p-2 rounded w-full"
                                            placeholder='Enter username'
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="bg-gray-200 focus:bg-white text-gray-800 p-2 rounded w-full"
                                            placeholder='Enter password'
                                            required
                                        />
                                    </div>
                                </>
                            )}

                            {userType === 'vendor' && (
                                <>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="vendorName">Vendor Name</label>
                                        <input
                                            type="text"
                                            name="vendorName"
                                            id="vendorName"
                                            value={formData.vendorName}
                                            onChange={handleChange}
                                            className="bg-gray-200 focus:bg-white text-gray-800 p-2 rounded w-full"
                                            placeholder='Enter vendor name'
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="bg-gray-200 focus:bg-white text-gray-800 p-2 rounded w-full"
                                            placeholder='Enter password'
                                            required
                                        />
                                    </div>
                                </>
                            )}

                            <div className="mb-4">
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;
