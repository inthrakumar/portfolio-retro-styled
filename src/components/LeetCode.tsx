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
        <div className='h-inherit w-100vw flex flex-col gap-7'>
            <div className='text-3xl'>{data?.name}</div>
            <div className='flex gap-1 text-2xl'>UserName: <span>{data?.username}</span></div>
            <div className={` flex flex-col text-xl w-full h-fit gap-3 bg-white rounded-md p-4`}>
                <div>All: {Qns?.solvedProblem}</div>
                <div>Easy: {Qns?.easySolved}</div>
                <div>Medium: {Qns?.mediumSolved}</div>
                <div>Hard: {Qns?.hardSolved}</div>
            </div>
            <div className='flex flex-col gap-3 w-fit max-w-75w justify-between'>
                <div className='text-2xl'>Accepted Submissions</div>
                <div className='bg-white flex flex-col gap-2 text-3xl'>
                    {Submissions?.submission.map((submission, index) => (
                        <div key={index} className='m-2 p-2 '>
                            <p className={`text-ellipses ${Nametext.className}`}>
                                <Link href={`https://leetcode.com/problems/${submission.titleSlug}/description/`} title={`https://leetcode.com/problems/${submission.titleSlug}/description/`}>
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
