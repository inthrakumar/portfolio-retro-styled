"use client";

import React from 'react';



function Page({ params }: { params: { project: string } }) {
    return (
        <div className='m-10 mt-20 flex items-center justify-center'>
            <h1>{params.project}</h1>

        </div>
    );
}

export default Page;
