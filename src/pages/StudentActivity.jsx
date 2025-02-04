import { FaGlobe, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const activities = [
    {
        name: "Google Developer Groups (GDG)",
        description: "A community group for developers interested in Google's developer technology.",
        social: [
            { icon: FaFacebook, link: "#", color: "[#3b5998]" },
            { icon: FaTwitter, link: "#", color: "[#1DA1F2]" },
            { icon: FaInstagram, link: "#", color: "[#833AB4]" },
            { icon: FaYoutube, link: "#" ,color: "[#FF0000]"}, 
        ],
        website: "#",
    },
    {
        name: "IEEE",
        description: "The world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.",
        social: [
            { icon: FaFacebook, link: "#" , color: "[#3b5998]" },
            {
                icon: FaTwitter, link: "#", color: "[#1DA1F2]" },
            { icon: FaInstagram, link: "#", color: "[#833AB4]" },
            { icon: FaLinkedin, link: "#", color:"[#0077B5]" },
        ],
        website: "#",
    },
    {
        name: "Student Union",
        arabicName: "اتحاد الطلبة",
        description: "The official representative body for students, organizing events and advocating for student interests.",
        social: [
            { icon: FaFacebook, link: "#", color:"[#3b5998]" },
            { icon: FaInstagram, link: "#", color: "[#833AB4]" },
        ],
        website: "#",
    },
];

export default function StudentActivities() {
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <h2 className="text-3xl font-bold text-center mb-8">Student Activities</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {activities.map((activity, index) => (
                    <div key={index} className="w-80 p-4 text-center bg-white rounded-2xl shadow-md">
                        <div className="d-flex flex-col justify-between content-between flex-wrap">
                            <h3 className="text-lg font-semibold">{activity.name}</h3>
                            {activity.arabicName && <p className="text-sm text-gray-600">{activity.arabicName}</p>}
                            <p className="text-sm text-gray-700 my-2">{activity.description}</p>
                            <div className="flex justify-center gap-3 my-3">
                                {activity.social.map((social, idx) => (
                                    <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className={`border p-2 text-lg rounded text-gray-500 hover:text-white hover:bg-[#0077B5] bg-${social.color} bg-[#50d71e]`}>
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                            <a href={activity.website} target="_blank" rel="noopener noreferrer" className="no-underline w-full mt-4 bg-black text-white py-2 rounded-lg flex items-center justify-center gap-2">
                                <FaGlobe className="w-5 h-5" /> Visit Website
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}