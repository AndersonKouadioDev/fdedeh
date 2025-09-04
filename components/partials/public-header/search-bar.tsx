import React from 'react';
import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";

function SearchBar() {
    return (
        <div className="relative">
            <Input
                type="text"
                placeholder="Rechercher..."
                className="w-full max-w-xs bg-[#E5E5EA] focus:bg-white border border-gray-300 rounded-full md:pr-10 pl-4 py-1 focus:outline-none focus-visible:ring-1"
            />
            <Search
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
            />
        </div>
    );
}

export default SearchBar;