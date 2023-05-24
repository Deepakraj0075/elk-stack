import React from 'react';

const Instruction = () => {
    return (
        <div className="top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="bg-white shadow p-4 max-w-xl mx-auto">
                <div className="container">
                    <h1 className="text-2xl font-bold mb-4">Instructions</h1>
                    <h2 className="text-lg font-medium mb-2">Create a role</h2>
                    <p className="mb-4">Create the role with the valid name</p>
                    <h2 className="text-lg font-medium mb-2">Add the Permissions</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Amazon-EC2-FullAccess</li>
                        <li>AWS-Lambda-Excecute</li>
                        <li>AWS-CloudFormation-FullAccess</li>
                    </ul>
                    <h2 className="text-lg font-medium mb-2">Add the trust Policy</h2>
                    <p>Add the below mentioned trust policy:</p>

                </div>
            </div>
        </div>
    );
};

export default Instruction;




// import React, { useEffect, useState } from "react";
// import Loadingimage from "../Images/loading.gif";
// import Successimage from "../Images/success.2.gif";

// export const Modal = () => {
//     const [showModal, setShowModal] = useState(false);
//     const [isCreating, setIsCreating] = useState(false);
//     const [arnValue, setArnValue] = useState('');
//     const [isValidArn, setIsValidArn] = useState(true);
//     const [kibanaIP, setKibanaIP] = useState("");
//     const IP = "35.54.67.123"
//     const handleArnChange = (event) => {
//         const { value } = event.target;
//         setArnValue(value);
//         validateArn(value);
//     };

//     const validateArn = (arn) => {
//         const arnPattern = /^arn:aws:iam::\d{12}:role\/[a-zA-Z_0-9+=,.@\-_/]+$/;
//         setIsValidArn(arnPattern.test(arn));
//     };

//     const handleStartCreating = async () => {
//         setIsCreating(true);
//         try {
//             const response = await fetch(
//                 "https://3dte4reicf.execute-api.ap-south-1.amazonaws.com/elk-Deepakraj?role_name=" + arnValue
//             );
//             // const response = await fetch(
//             //     "https://ji4yajrt34.execute-api.ap-south-1.amazonaws.com?role_name=" + arnValue
//             // );

//             if (response.ok) {
//                 const data = await response.json();
//                 console.log(data);
//                 console.log("API call Successful");
//                 setKibanaIP(data); // Set the Kibana IP value
//             } else {
//                 throw new Error(
//                     "API call failed: " + response.status + " " + response.statusText
//                 );
//             }
//         } catch (error) {
//             console.error("Error calling API:", error);
//         } finally {
//             // setIsCreating(false);
//         }
//     };

//     return (
//         <div className="justify-end flex px-5 py-5">
//             <button
//                 className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                 type="button"
//                 onClick={() => setShowModal(true)}
//             >
//                 Create ELK-Stack
//             </button>
//             {showModal && (
//                 <>
//                     <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto  fixed inset-0 z-50 outline-none focus:outline-none">
//                         <div className="relative w-auto my-6 mx-auto max-w-4xl xl:max-w-6xl">
//                             {/* Increase the max-w-4xl class for wider modal */}
//                             <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                                 <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
//                                     <h3 className="text-2xl font-semibold">
//                                         On Process of Creating ELK-Stack
//                                     </h3>
//                                     <button
//                                         type="button"
//                                         className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
//                                         data-te-modal-dismiss
//                                         aria-label="Close"
//                                         onClick={() => { setShowModal(false); setIsCreating(false) }}
//                                     >
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             strokeWidth="1.5"
//                                             stroke="currentColor"
//                                             className="h-6 w-6"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M6 18L18 6M6 6l12 12"
//                                             />
//                                         </svg>
//                                     </button>
//                                 </div>
//                                 {/*body*/}
//                                 <div className="relative p-6 flex-auto w-auto">
//                                     <div className="mb-3">
//                                         <label
//                                             htmlFor="text"
//                                             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                                         >
//                                             Provide your ARN
//                                         </label>
//                                         <input
//                                             id="text"
//                                             className={`w-full md:w-96 h-20 bg-gray-50 border ${isValidArn ? 'border-gray-300' : 'border-red-500'
//                                                 } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
//                                             placeholder="Paste your ARN here"
//                                             value={arnValue}
//                                             onChange={handleArnChange}
//                                         />
//                                         {!isValidArn && (
//                                             <p className="text-red-500 text-xs mt-1">
//                                                 <svg
//                                                     className="inline-block w-4 h-4 mr-1 -mt-1"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     fill="none"
//                                                     viewBox="0 0 24 24"
//                                                     stroke="currentColor"
//                                                 >
//                                                     <path
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         strokeWidth={2}
//                                                         d="M6 18L18 6M6 6l12 12"
//                                                     />
//                                                 </svg>
//                                                 Invalid IAM ARN
//                                             </p>
//                                         )}

//                                     </div>

//                                     {!isCreating && (
//                                         <button
//                                             className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                                             type="button"
//                                             onClick={handleStartCreating}
//                                         >
//                                             Start Creating
//                                         </button>
//                                     )}


//                                     {isCreating
//                                         && (
//                                             <>
//                                                 <div className="p-4 rounded-lg">
//                                                     <img src={Loadingimage} height="400" width="500" alt="Loading GIF" />
//                                                 </div>

//                                                 <div className="p-4 rounded-lg">
//                                                     <img src={Successimage} height="400" width="500" alt="Success GIF" />
//                                                     <p className="text-gray-800 hover:text-blue-500">
//                                                         Your Kibana IP: http://{IP}:5601
//                                                     </p>
//                                                 </div>

//                                             </>
//                                         )}

//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                     <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//                 </>
//             )}
//         </div>
//     );
// };


