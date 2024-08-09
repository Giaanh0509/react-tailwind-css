import { Job } from "../../components/Job"
import Job1Svg from "../../components/svg/Job1Svg"
import Job2Svg from "../../components/svg/Job2Svg"
import JobSvg from "../../components/svg/JobSvg"

export const JobList = () => {
    return (
        <div className="w-[40rem] bg-white p-5">
            <div className="flex items-center gap-x-4 relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute w-6 h-6 mr-4 ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input type="text" className="w-3/4 h-10 border-2 border-black rounded-xl px-10 py-5" placeholder="Search for a partime job" />

                <button className="text-white bg-red-500 hover:bg-green-500 rounded-md py-2 px-5">Search</button>
            </div>

            <div className="grid grid-cols-3 mt-5 gap-5">
                <div className="h-fit">
                    <Job title="Furniture" bgColor="bg-[#FFECEC]" icon={<JobSvg />}></Job>
                </div>

                <div className="h-fit">
                    <Job title="Technical" bgColor="bg-[#FFECEC]" icon={<Job1Svg />
                    }></Job>
                </div>

                <div className="h-fit">
                    <Job title="Features" bgColor="bg-[#FFECEC]" icon={<Job2Svg></Job2Svg>
                    }></Job>
                </div>

                <div className="h-fit">
                    <Job title="Furniture" bgColor="bg-[#FFECEC]" icon={<JobSvg />}></Job>
                </div>

                <div className="h-fit">
                    <Job title="Technical" bgColor="bg-[#FFECEC]" icon={<Job1Svg />
                    }></Job>
                </div>

                <div className="h-fit">
                    <Job title="Features" bgColor="bg-[#FFECEC]" icon={<Job2Svg></Job2Svg>
                    }></Job>
                </div>
            </div>
        </div>
    )
}