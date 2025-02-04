import { Youtube, FileText } from "lucide-react"

export default function Categories() {
    const handleSubmit = async (event) => {
        event.preventDefault()
        // Add your form submission logic here
    }

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <div className="w-full max-w-xl space-y-6 rounded-lg bg-slate-900/50 p-6 backdrop-blur-sm">
                <h1 className="text-2xl font-semibold text-white">Add New Course Material</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="material-name" className="block text-sm font-medium text-white">
                            Material Name
                        </label>
                        <input
                            id="material-name"
                            type="text"
                            placeholder="Enter material name"
                            className="w-full rounded-md bg-slate-800/50 border border-slate-700 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="doctor-name" className="block text-sm font-medium text-white">
                            Doctor Name
                        </label>
                        <input
                            id="doctor-name"
                            type="text"
                            placeholder="Enter doctor name"
                            className="w-full rounded-md bg-slate-800/50 border border-slate-700 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="youtube-link" className="block text-sm font-medium text-white">
                            YouTube Link
                        </label>
                        <div className="relative">
                            <Youtube className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                            <input
                                id="youtube-link"
                                type="url"
                                placeholder="https://www.youtube.com/..."
                                className="w-full rounded-md bg-slate-800/50 border border-slate-700 pl-10 pr-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="drive-link" className="block text-sm font-medium text-white">
                            Google Drive Link
                        </label>
                        <div className="relative">
                            <FileText className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                            <input
                                id="drive-link"
                                type="url"
                                placeholder="https://drive.google.com/..."
                                className="w-full rounded-md bg-slate-800/50 border border-slate-700 pl-10 pr-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
                    >
                        Add Material
                    </button>
                </form>
            </div>
        </div>
    )
}

