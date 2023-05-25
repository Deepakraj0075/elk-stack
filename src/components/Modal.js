import React, { useEffect, useState } from "react";
import Loadingimage from "../Images/loading.gif";
import Successimage from "../Images/success.2.gif";
import CopyIcon from "../Images/copyicon.svg";

export const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [showSuccessImage, setShowSuccessImage] = useState(false);
    const [arnValue, setArnValue] = useState("");
    const [isValidArn, setIsValidArn] = useState(true);
    const [kibanaIP, setKibanaIP] = useState("");
    const [isCopied, setIsCopied] = useState(false);
    const IP = "35.54.67.123";

    const handleArnChange = (event) => {
        const { value } = event.target;
        setArnValue(value);
        validateArn(value);
    };

    const validateArn = (arn) => {
        const arnPattern = /^arn:aws:iam::\d{12}:role\/[a-zA-Z_0-9+=,.@\-_/]+$/;
        // setIsValidArn(arn === "" || arnPattern.test(arn));
        setIsValidArn(arnPattern.test(arn));
    };

    const handleCopyURL = () => {
        const input = document.createElement("textarea");
        input.value = `http://${IP}:5601`;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
    
        setIsCopied(true);
    
        setTimeout(() => {
            setIsCopied(false);
        }, 500);
    };

    const handleStartCreating = async () => {
        if (arnValue === "") {
            alert("Please enter the ARN.");
            return;
        }
        setIsCreating(true);
        setTimeout(() => {
            setIsCreating(false);
            setShowSuccessImage(true);
        }, 30000);

        try {
            const response = await fetch(
                "https://3dte4reicf.execute-api.ap-south-1.amazonaws.com/elk-Deepakraj?role_name=" +
                arnValue
            );

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                console.log("API call Successful");
                setKibanaIP(data); // Set the Kibana IP value
            } else {
                throw new Error(
                    "API call failed: " + response.status + " " + response.statusText
                );
            }
        } catch (error) {
            console.error("Error calling API:", error);
        }
    };

    return (
        <div className="justify-end flex px-5 py-5">
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Create ELK-Stack
            </button>
            {showModal && (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto  fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-4xl xl:max-w-6xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-2xl font-semibold">
                                        On Process of Creating ELK-Stack
                                    </h3>
                                    <button
                                        type="button"
                                        className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                        data-te-modal-dismiss
                                        aria-label="Close"
                                        onClick={() => {
                                            setShowModal(false);
                                            setIsCreating(false);
                                            setShowSuccessImage(false);
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto w-auto">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="text"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Provide your ARN
                                        </label>
                                        <input
                                            id="text"
                                            className={`w-full md:w-96 h-20 bg-gray-50 border ${isValidArn ? "border-gray-300" : "border-red-500"
                                                } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                            placeholder="Paste your ARN here"
                                            value={arnValue}
                                            onChange={handleArnChange}
                                        />
                                        {!isValidArn && (
                                            <p className="text-red-500 text-xs mt-1">
                                                <svg
                                                    className="inline-block w-4 h-4 mr-1 -mt-1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                                Invalid IAM ARN
                                            </p>
                                        )}
                                    </div>

                                    {!isCreating && (
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handleStartCreating}
                                        >
                                            Start Creating
                                        </button>
                                    )}

                                    {isCreating && !showSuccessImage && (
                                        <div className="p-4 rounded-lg">
                                            <img
                                                src={Loadingimage}
                                                height="400"
                                                width="500"
                                                alt="Loading GIF"
                                            />
                                        </div>
                                    )}

                                    {showSuccessImage && (
                                        <>
                                            <div className="p-4 rounded-lg">
                                                <img
                                                    src={Successimage}
                                                    height="400"
                                                    width="500"
                                                    alt="Success GIF"
                                                />
                                                <div className="flex items-center">
                                                    <p className="text-black-800 hover:text-blue-500">
                                                        Your Kibana IP: http://{IP}:5601
                                                    </p>
                                                    <button className="ml-2 focus:outline-none" onClick={handleCopyURL}>
                                                        {!isCopied ? (
                                                            <img src={CopyIcon} height="20" width="20" alt="Copy Icon" />
                                                        ) : (
                                                            "Copied"
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </div>
    );
};

// {isCreating
//     && (
//         <>
//             <div className="p-4 rounded-lg">
//                 <img src={Loadingimage} height="400" width="500" alt="Loading GIF" />
//             </div>

//             {/* <div className="p-4 rounded-lg">
//                 <img src={Successimage} height="400" width="500" alt="Success GIF" />
//                 <p className="text-gray-800 hover:text-blue-500">
//                     Your Kibana IP: http://{}:5601
//                 </p>
//             </div> */}

//         </>
//     )}


{/* // {isCreating ? ( */ }
{/* //     <div className="p-4 rounded-lg">
                                        //         <img src={Successimage} height="400" width="500" alt="Success GIF" />
                                        //         <p className="text-gray-800 hover:text-blue-500">
                                        //             Your Kibana IP: http://{ }:5601
                                        //         </p>
                                        //     </div>
                                        // ) : (
                                        //     <>
                                        //         <div className="p-4 rounded-lg">
                                        //             <img src={Loadingimage} height="400" width="500" alt="Loading GIF" />
                                        //         </div>
                                        //     </>
                                        // )} */}


{/* <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                        // onClick={() => setShowModal(false)}
                                        >
                                            Create
                                        </button>
                                    </div> */}