import React, { useRef } from "react";

const FeedbackWithModal = () => {
    const usernameRef = useRef();
    const feedbackRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = usernameRef.current.value;
        const feedback = feedbackRef.current.value;

        if (!username || !feedback) {
            alert("Please fill in both fields!");
            return;
        }

        console.log("Feedback submitted:", { username, feedback });

        // Show the modal after form submission
        document.getElementById("my_modal_4").showModal();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                <h2 className="text-2xl font-bold mb-6">Feedback Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Username:</label>
                        <input
                            type="text"
                            ref={usernameRef}
                            className="input input-bordered w-full"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Feedback:</label>
                        <textarea
                            ref={feedbackRef}
                            className="textarea textarea-bordered w-full"
                            placeholder="Write your feedback here"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="btn btn-primary">
                            Submit Feedback
                        </button>
                    </div>
                </form>
            </div>

            {/* Modal Implementation */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Thank you for your feedback!</h3>
                    <p className="py-4">
                        Your feedback has been successfully submitted.
                    </p>
                    <div className="modal-action">
                        <button className="btn" onClick={() => document.getElementById('my_modal_4').close()}>
                            Close
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default FeedbackWithModal;
