import { Notification } from "../../components/svg/Notification"
import { Search } from "../../components/svg/Search"

export const Account = () => {
    return (
        <div className="w-[40rem] bg-white p-5">
            <div className="flex relative justify-between">
                <div>
                    <Search></Search>
                    <input type="text" className="border-2 py-2 rounded-lg font-semibold px-10" placeholder="Search" />
                </div>
                <div>
                    <Notification></Notification>
                </div>
            </div>
            <div className="mt-5 mb-5">
                <h1 className="text-3xl font-bold">Accounts</h1>
            </div>

            <div className="flex-direction space-y-2">
                <div className="flex gap-x-4 items-center justify-between hover:bg-[#FFCCCC] rounded-xl p-4">
                    <div className="flex items-center gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div className="flex-direction">
                            <h1 className="text-2xl font-semibold">DropBox</h1>
                            <p>dropbox.com</p>
                        </div>
                    </div>
                    <p>24 accounts</p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                    </div>
                </div>

                <div className="flex gap-x-4 items-center justify-between hover:bg-[#FFCCCC] rounded-xl p-4">
                    <div className="flex items-center gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div className="flex-direction">
                            <h1 className="text-2xl font-semibold">DropBox</h1>
                            <p>dropbox.com</p>
                        </div>
                    </div>
                    <p>24 accounts</p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                    </div>
                </div>

                <div className="flex gap-x-4 items-center justify-between hover:bg-[#FFCCCC] rounded-xl p-4">
                    <div className="flex items-center gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div className="flex-direction">
                            <h1 className="text-2xl font-semibold">DropBox</h1>
                            <p>dropbox.com</p>
                        </div>
                    </div>
                    <p>24 accounts</p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                    </div>
                </div>



            </div>
        </div>
    )
}