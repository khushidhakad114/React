import React, { useRef, useState } from "react";

const FeedbackWithModal = () => {
    const usernameRef = useRef();
    const feedbackRef = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        const username = usernameRef.current.value;
        const feedback = feedbackRef.current.value;

        setName(username);


        if (!username || !feedback) {
            alert("Please fill in both fields!");
            return;
        }

        console.log("Feedback submitted:", { username, feedback });

        setIsModalOpen(true); // Open modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close modal
    };

    return (
        <div className="flex items-center justify-center overflow-hidden mt-10">
            <div className="bg-gray-100 border border-solid-black w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
                    Feedback Form
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Username:
                        </label>
                        <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input
                                type="text"
                                ref={usernameRef}
                                className="grow focus:outline-none"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Feedback:
                        </label>
                        <textarea
                            ref={feedbackRef}
                            className="textarea textarea-bordered w-full h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Write your feedback here"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="btn btn-primary px-4 py-2 rounded-md w-full">
                            Submit Feedback
                        </button>
                    </div>
                </form>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="modal-box bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                        <h3 className="font-bold text-lg">Thank you {name} for your feedback!</h3>
                        <p className="py-4">
                            Your feedback has been successfully submitted.
                        </p>
                        <div className="modal-action text-right">
                            <button
                                className="btn btn-secondary"
                                onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeedbackWithModal;
