"use client";

import React from 'react';
import map from '../../../projects_assests/details'

function Page({ params }: { params: { project: string } }) {
    const projectDetails = map.get(params.project);
    const IconComponent = projectDetails?.TechIcons[0];

    return (
        <div className='m-10 mt-20 flex items-center justify-center'>
            {IconComponent && <IconComponent />}
        </div>
    );
}

export default Page;
