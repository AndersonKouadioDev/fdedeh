import React from 'react';

function PageTitle({title}: { title: string }) {
    return (
        <div
            className="w-full p-4 md:p-6"
            style={{
                borderBottom: "12px solid",
                borderImageSource: "linear-gradient(212.97deg, #FF383C 7.49%, #FF7710 84.85%)",
                borderImageSlice: 1,
            }}
        >
            <h1 className="bg-custom-gradient text-transparent bg-clip-text text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                {title}
            </h1>
        </div>
    );
}

export default PageTitle;