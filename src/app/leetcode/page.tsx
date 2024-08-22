"use client"
import React, { useState, useEffect } from 'react'
import { AcceptedSubmissions, getAccountDetails, NoofQns } from './api'
import { useQuery } from 'react-query'
import LeetCodeData from '@/components/LeetCode'
import { UserProfile } from '@/types';
import Loading from '@/components/Loading'
function LeetCode() {

    const { isLoading, data, isError } = useQuery(['account'], getAccountDetails);
    const { isLoading: submissionsLoading, data: submissionsData, isError: submissionsError } = useQuery(['submissions'], AcceptedSubmissions);
    const { data: submissionsDataqns } = useQuery(['qns'], NoofQns);
    return (
        <section className='min-h-screen  min-w-[90vw] flex flex-col items-center justify-between'>
            {isLoading && <div className='min-h-[75vh] flex items-center justify-center'><Loading /></div>
            }
            {(data && submissionsData && submissionsDataqns) ? (
                <LeetCodeData data={data} Submissions={submissionsData} Qns={submissionsDataqns} />
            ) : null}
        </section>
    );
}

export default LeetCode;
