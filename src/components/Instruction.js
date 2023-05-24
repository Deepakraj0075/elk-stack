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
                        <li>AmazonEC2FullAccess</li>
                        <li>AWSLambdaExcecute</li>
                        <li>AWSCloudFormationFullAccess</li>
                    </ul>
                    <h2 className="text-lg font-medium mb-2">Add the trust Policy</h2>
                    <p>Add the below mentioned trust policy:</p>
                </div>
            </div>
        </div>
    );
};

export default Instruction;
