// components/PhonePopup.js
export default function PhonePopup({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Transparent black background overlay */}
            <div
                className="absolute inset-0 bg-black/40 bg-opacity-40"
                onClick={onClose} // Close popup when clicking outside
            ></div>

            {/* Modal content */}
            <div className="relative z-10 bg-[#eef0fa] rounded-xl p-10 text-center w-[90%] max-w-md shadow-xl">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-xl font-semibold text-gray-600 cursor-pointer"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kindly Dial</h2>
                <p className="text-lg font-bold text-gray-900 mb-4">
                    033 6902 8513 <span className="font-normal">from your mobile</span>
                </p>
                <p className="text-gray-600 text-sm mb-3">(10am – 7pm except Sunday)</p>
            </div>
        </div>
    );
}
