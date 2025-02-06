import React from "react"
import { BookOpen, GraduationCap} from "lucide-react"
import MainTitle from "./MainTitle"

export default function Component() {
    

    

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
                <MainTitle title="Home Page" />

            <main className="flex-1">
                

                <div className="h-[calc(100vh-5rem)] overflow-auto p-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            { icon: BookOpen, title: "MSc الخطة الدراسية", description: "منذ التقديم وحتى المنح" },
                            { icon: GraduationCap, title: "PhD الخطة الدراسية", description: "منذ التقديم وحتى المنح" },
                            {
                                icon: () => (
                                    <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                                        MBA
                                    </div>
                                ),
                                title: "MBA الخطة الدراسية",
                                description: "منذ التقديم وحتى المنح",
                            },
                        ].map((program, index) => (
                            <div
                                key={index}
                                className="rounded-lg border bg-white p-6 shadow-sm dark:bg-slate-800 dark:border-slate-700"
                            >
                                <div className="flex flex-col items-center gap-4">
                                    {React.createElement(program.icon, { className: "h-12 w-12 text-blue-600" })}
                                    <h3 className="text-xl font-semibold text-center">{program.title}</h3>
                                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">{program.description}</p>
                                </div>
                            </div>
                        ))}
                        <a href="/enrollSubjects" className="block">
                            <div className="rounded-lg border bg-white p-6 shadow-sm transition-transform hover:scale-105 dark:bg-slate-800 dark:border-slate-700">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                                        ماجستير
                                    </div>
                                    <h3 className="text-xl font-semibold text-center">الماجستير الاكاديمي</h3>
                                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">تسجيل المواد</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                
            </main>
        </div>
    )
}

