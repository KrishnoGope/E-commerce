import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({ email: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "email") {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            setErrors({ ...errors, email: emailPattern.test(value) ? "" : "Invalid email format" });
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "9a058a70-3be3-4398-93c4-971914a3506f");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <div
            className="py-10 px-10 md:px-24 min-h-screen bg-gradient-to-br  from-gray-500 to-gray-500 text-gray-200 "
        >
            <div className="text-center pb-10">
                <h1 className="inline-block font-extrabold text-2xl sm:text-5xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-red-300 to-pink-300">
                    Connect with Us
                </h1>
            </div>
            <div className="flex justify-center">
                <form
                    onSubmit={onSubmit}
                    className="p-6 rounded-xl shadow-2xl border border-blue-800 bg-gray-100 w-full max-w-xl text-black"
                >
                    <div className="mb-4">
                        <label className="block font-semibold text-gray-800 mb-1">Full Name:</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="Enter your name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold text-gray-800 mb-1">Email:</label>
                        <input
                            type="email"
                            name="email"
                            className={`w-full px-4 py-2 border rounded focus:outline-none ${
                                errors.email ? "border-red-500" : "border-gray-400"
                            } focus:ring-2 focus:ring-indigo-300`}
                            placeholder="Enter your email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold text-gray-800 mb-1">Message:</label>
                        <textarea
                            name="message"
                            className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="Write your message"
                            required
                            rows={3}
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-[95%] mx-auto block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-[17px] py-3 rounded-[5vh] hover:scale-105 transition-all duration-500 ease-in-out shadow-md"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;