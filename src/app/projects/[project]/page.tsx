"use client";

import React from 'react';
import { Metadata } from 'next';

// Define the getMetadata function
export const getMetadata = ({ params }: { params: { project: string } }): Metadata => {
    return {
        title: params.project,
        description: `Project: ${params.project}`,
    };
};


function Page({ params }: { params: { project: string } }) {
    return (
        <div>
            <h1>{params.project}</h1>

        </div>
    );
}

export default Page;
