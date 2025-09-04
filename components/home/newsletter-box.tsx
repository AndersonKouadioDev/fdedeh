import React from "react";
import {Send} from "lucide-react";
import {Button} from "@/components/ui/button";

const NewsletterBox = () => {
    return (
        <div className="bg-[#222B59A1] rounded-xl p-6 flex flex-col items-center text-white w-full mt-10">
            <h2 className="text-lg font-bold mb-4">NEWSLETTER :</h2>
            <div className="flex items-center w-full max-w-md">
                <input
                    type="email"
                    placeholder="Votre adresse mail"
                    className="flex-1 px-4 py-2.5 rounded-l-full text-black outline-none text-sm"
                />
                <Button className="bg-white text-[#222B59] px-4 py-2 rounded-r-full hover:bg-gray-200 transition duration-200">
                    <Send className="w-5 h-5"/>
                </Button>
            </div>
            <p className="text-sm mt-6 text-center">
                Recevez les dernières actualités et mises à jour sur vos rubriques préférées !
            </p>
        </div>
    );
};

export default NewsletterBox;
