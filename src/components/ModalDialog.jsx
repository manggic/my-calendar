function ModalDialog({ dialogRef, handleModalClose, handleModalSubmit }) {
    return (
        <dialog
            ref={dialogRef}
            className="w-[350px] max-w-full p-6 rounded-xl shadow-2xl border border-gray-200 
             bg-white dark:bg-gray-800 dark:border-gray-700 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                Add Event
            </h2>

            <input
                type="text"
                name="input"
                placeholder="Enter event title"
                id="event-name"
                className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md 
               focus:outline-none focus:ring-2 focus:ring-blue-400 
               focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 
               dark:text-gray-100 dark:placeholder-gray-400"
            />

            <div className="flex justify-end space-x-3">
                <button
                    className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 
                 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
                    onClick={handleModalClose}
                >
                    Cancel
                </button>

                <button
                    className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 
                 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    onClick={() => {
                        handleModalSubmit();
                    }}
                >
                    Submit
                </button>
            </div>
        </dialog>
    );
}

export default ModalDialog;
