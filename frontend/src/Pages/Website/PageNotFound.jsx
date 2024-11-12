import React from "react";

const PageNotFound = () => {
    return (
        <section className="bg-white min-h-screen flex items-center justify-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="flex justify-center items-center flex-col text-center">
                    <div className="bg-cyan-700 rounded-full w-60 h-60 flex justify-center items-center">
                        <h1 className="text-7xl tracking-tight font-extrabold lg:text-9xl text-white">
                            404
                        </h1>
                    </div>
                    <p className="my-4 text-3xl text-cyan-700 font-bold md:text-4xl">
                        Not Found!
                    </p>
                    <p className="mb-4 text-lg text-cyan-700 font-medium">
                        Sorry, we can't find that page. You'll find lots to
                        explore on the home page.
                    </p>
                    <a
                        href="/"
                        className=" text-cyan-700 border-b-2 border-cyan-700 rounded-none hover:scale-105 duration-300 ease-in-out font-medium text-center my-4"
                    >
                        Back to Homepage
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PageNotFound;
