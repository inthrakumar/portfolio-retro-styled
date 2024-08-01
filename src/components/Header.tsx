"use client"
import React from 'react'
import Link from 'next/link'
function Header() {
    return (

        <section className="w-full mt-5 mr-7">
            <section className="icon-list flex w-fit gap-4 fixed top-4 left-2 max-sm:hidden ">
                <i className="nes-mario "></i>
                <i className="nes-charmander "></i>

            </section>
            <div className="w-full flex gap-3 max-sm:gap-1 items-center justify-end">
                <Link href="/leetcode">
                    <button type="button" className="nes-btn is-error max-sm:px-[1px] max-sm:py-[2px] max-sm:text-[6px]">
                        LeetCode
                    </button>
                </Link>


                <Link href="/projects">
                    <button type="button" className="nes-btn is-error max-sm:px-[1px] max-sm:py-[2px] max-sm:text-[6px]">
                        Projects
                    </button>
                </Link>

                <Link href="/skills">
                    <button type="button" className="nes-btn is-error max-sm:px-[1px] max-sm:py-[2px] max-sm:text-[6px]">
                        Skills
                    </button>
                </Link>
            </div>

        </section>
    )
}

export default Header
