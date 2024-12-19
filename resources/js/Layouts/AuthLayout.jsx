
export default function AuthLayout({children, title, description}) {
    return (
        <div
            className="min-h-screen p-5 w-screen bg-gradient-to-br from-gray-100 via-gray-200 to-white flex items-center justify-center">
            <div className="w-full max-w-md bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl shadow-xl">
                <div className="p-5 sm:p-12">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
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
