export default function AuthLayout({children, title, description}) {
    return (
        <div
            className="min-h-screen p-3 w-screen bg-[#EEEEEE] flex items-center justify-center">
            <div className="w-full max-w-md bg-gray-400  bg-opacity-30 border border-gray-100 rounded-3xl shadow-xl">
                <div className="p-5 sm:p-12">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                        {title}
                    </h2>
                    <p className="text-center text-gray-800 mb-8">
                        {description}
                    </p>
                    {children}
                </div>
            </div>
        </div>
    )
}
