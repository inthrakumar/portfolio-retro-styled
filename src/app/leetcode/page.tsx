"use client"
import React, { useState, useEffect } from 'react'
import { AcceptedSubmissions, getAccountDetails, NoofQns } from './api'
import { useQuery } from 'react-query'
import LeetCodeData from '@/components/LeetCode'
import { UserProfile } from '@/types';

function LeetCode() {

    const { isLoading, data, isError } = useQuery(['account'], getAccountDetails);
    const { isLoading: submissionsLoading, data: submissionsData, isError: submissionsError } = useQuery(['submissions'], AcceptedSubmissions);
    const { data: submissionsDataqns } = useQuery(['qns'], NoofQns);
    console.log(data, submissionsData, submissionsDataqns);
    return (
        <section className='min-h-screen  min-w-[90vw] flex flex-col items-center justify-between'>
            {(data && submissionsData && submissionsDataqns) ? (
                <LeetCodeData data={data} Submissions={submissionsData} Qns={submissionsDataqns} />
            ) : null}
        </section>
    );
}

export default LeetCode;
