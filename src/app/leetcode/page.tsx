"use client"
import React from 'react'
import { AcceptedSubmissions, getAccountDetails } from './api'
import { useQuery } from 'react-query'
function LeetCode() {
    const { isLoading, data, isError } = useQuery(['account'], getAccountDetails);
    const { isLoading: submissionsLoading, data: submissionsData, isError: submissionsError } = useQuery(['submissions'], AcceptedSubmissions);
    console.log(data);
    return (
        <div>

        </div>
    )
}

export default LeetCode
