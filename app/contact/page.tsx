import ContactForm from "@/components/ContactForm";
import { CoreTeamProfilePicLeft } from "@/components/CoreTeamProfilePicLeft";
import { CoreTeamProfilePicRight } from "@/components/CoreTeamProfilePicRight";
export default function ContactPage() {
    return (
        <div className="relative h-screen w-full">
            {/* CoreTeamProfilePic positioned at the top left corner, hidden on mobile */}
            <div className="absolute top-20 left-8 z-10 hidden md:block">
                <CoreTeamProfilePicLeft/>
            </div>
            {/* CoreTeamProfilePic positioned at the top right corner, hidden on mobile */}
            <div className="absolute top-20 right-12 z-10 hidden md:block">
                <CoreTeamProfilePicRight />
            </div>

            {/* Contact Form */}
            <div>
                <ContactForm />
            </div>
        </div>
    );
}
