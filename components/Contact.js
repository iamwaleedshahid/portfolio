import React from "react";

export default function Contact({bg}) {
    return (
        <div className={`${bg}`+" dark:bg-gray-900"}>
            <div className="max-w-6xl mx-auto pt-10">
                <div className="flex flex-col lg:flex-row justify-center items-center my-10">
                    <div className="p-4 lg:p-20">
                        <h3 className="text-3xl lg:text-5xl font-bold">
                            Get in Touch, Let's Talk
                        </h3>
                        <div className="py-10 text-lg">
                            <p className="py-2">
                                <span className="px-2">{"📧"}</span>
                                <a
                                    href="mailto:hello@waleedshahid.com"
                                    className="underline text-blue-500"
                                >
                                    <strong>hello@waleedshahid.com</strong>
                                </a>
                                <strong> OR </strong>
                            </p>

                            <iframe className="py-4 w-full h-64" src="https://docs.google.com/forms/d/e/1FAIpQLSemc5iV9UVxTem94LkJocF9-2e-L_TTflLHkny6JW_85M-4gQ/viewform?embedded=true">Loading…</iframe>
                        </div>

                    </div>
                    <img
                        className="lg:block w-1/3 rounded-md mx-auto border-2 border-gray-50"
                        src="/self.jpg"
                    />
                </div>
            </div>
        </div>
    )
}