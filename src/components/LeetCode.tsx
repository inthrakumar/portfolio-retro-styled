"use client"
import React from 'react'
import { UserProfile, SubmissionsData, NoofQns } from '@/types';
import localFont from 'next/font/local';
import Link from 'next/link';

const Nametext = localFont({ src: '../font/MilkyVintage-Regular.woff2' });

type LeetCodeDataSource = {
    data: UserProfile | undefined;
    Submissions: SubmissionsData | undefined;
    Qns: NoofQns | undefined;
}

function LeetCode({ data, Submissions, Qns }: LeetCodeDataSource) {
    return (
        <div className='h-inherit w-100vw flex flex-col gap-7 mt-6 max-lg:mt-8 max-sm:p-4'>
            <div className='text-3xl max-lg:text-2xl max-sm:text-lg'>{data?.name}</div>
            <div className='flex gap-1 text-2xl max-lg:text-xl max-sm:text-base'>UserName: <span>{data?.username}</span></div>
            <div className={` max-w-[40vw] flex flex-col text-xl w-full h-fit gap-3 bg-white rounded-md p-4 max-sm:p-2 max-lg:text-base max-sm:text-[10px]`}>
                <div>All: {Qns?.solvedProblem}</div>
                <div>Easy: {Qns?.easySolved}</div>
                <div>Medium: {Qns?.mediumSolved}</div>
                <div>Hard: {Qns?.hardSolved}</div>
            </div>
            <div className='flex flex-col gap-3 w-fit max-w-75vw justify-between'>
                <div className='text-2xl max-lg:text-xl max-sm:text-sm whitespace-nowrap'>Accepted Submissions</div>
                <div className='bg-white flex flex-col gap-1 text-3xl max-sm:text-xl rounded-3xl max-sm:gap-1'>
                    {Submissions?.submission.map((submission, index) => (
                        <div key={index} className='m-2 p-2 '>
                            <p className={`text-ellipses ${Nametext.className}`}>
                                <Link className='no-underline text-black hover:text-black' target='_blank' href={`https://leetcode.com/problems/${submission.titleSlug}/description/`} title={submission.title}>
                                    {submission.title}
                                </Link>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LeetCode;
