import React, { useEffect, useState } from "react"
import { BookOpen, GraduationCap, Home, MessageCircle, Search, Settings, User } from "lucide-react"

export default function Component() {
    // const [isWidgetLoaded, setIsWidgetLoaded] = useState(false)

    // useEffect(() => {
    //     if (!isWidgetLoaded) {
    //         const script = document.createElement("script")
    //         script.innerHTML = `
    //     window.CHIPP_APP_URL = "https://-18122.chipp.ai";
    //     window.CHIPP_APP_ID = 18122;
    //   `
    //         document.head.appendChild(script)

    //         const link = document.createElement("link")
    //         link.rel = "stylesheet"
    //         link.href = "https://storage.googleapis.com/chipp-chat-widget-assets/build/bundle.css"
    //         document.head.appendChild(link)

    //         const deferredScript = document.createElement("script")
    //         deferredScript.defer = true
    //         deferredScript.src = "https://storage.googleapis.com/chipp-chat-widget-assets/build/bundle.js"
    //         document.head.appendChild(deferredScript)

    //         setIsWidgetLoaded(true)
    //     }
    // }, [isWidgetLoaded])

    // const handleChatClick = () => {
    //     if (window.Chipp && typeof window.Chipp.open === "function") {
    //         window.Chipp.open()
    //     }
    // }

    const NavItem = ({ href, icon: Icon, label }) => (
        <div className="group relative">
            <a
                href={href}
                className="flex h-12 w-12 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            >
                <Icon className="h-6 w-6" />
                <span className="sr-only">{label}</span>
            </a>
            <div className="absolute left-full ml-2 hidden rounded bg-gray-900 px-2 py-1 text-xs text-white group-hover:block">
                {label}
            </div>
        </div>
    )

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900">
            <aside className="flex w-16 flex-col items-center border-r bg-white py-4 dark:bg-slate-800 dark:border-slate-700">
                <div className="flex flex-col items-center gap-4">
                    <NavItem href="#" icon={Home} label="الصفحة الرئيسية" />
                    <NavItem href="#" icon={User} label="شروط الالتحاق ببرامج" />
                    <NavItem href="#" icon={GraduationCap} label="الدكتوراه الاكاديمية" />
                    <NavItem href="/registration-subjects" icon={BookOpen} label="الماجستير الاكاديمي" />
                </div>
                <div className="mt-auto flex flex-col gap-4">
                    <NavItem href="/profile" icon={User} label="Profile" />
                    <NavItem href="#" icon={Settings} label="Settings" />
                </div>
            </aside>

            <main className="flex-1">
                <header className="bg-blue-600 text-white p-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">المرشد الاكاديمي</h1>
                        <button className="rounded-full bg-blue-700 p-2 hover:bg-blue-800">
                            <Search className="h-4 w-4" />
                        </button>
                    </div>
                </header>

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
                        <a href="/registration-subjects" className="block">
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

                <button
                    className="fixed bottom-4 right-4 h-14 w-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    // onClick={handleChatClick}
                >
                    <MessageCircle className="h-6 w-6 m-auto" />
                    <span className="sr-only">Open Chat</span>
                </button>
            </main>
        </div>
    )
}

