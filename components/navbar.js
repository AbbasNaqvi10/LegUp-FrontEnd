import { useState } from 'react'

function NavLink({ to, children }) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({ open, setOpen }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <a className="text-xl font-semibold" href="/">LegUp</a>
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-xl font-medium my-4" href="/" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Home
                </a>
                <a className="text-xl font-medium my-4" href="#" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Lender
                </a>
                <a className="text-xl font-medium my-4" href="#" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Consumer
                </a>
                <a className="text-xl font-normal my-4" href="#" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    About US
                </a>
            </div>
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="flex md:order-1 filter  justify-between bg-white px-2 py-2 md:px-4 md:py-4 md:h-20 items-center">
                <nav className="flex w-11/12 filter md:px-4 md:py-4 md:h-20 items-center">
                    <MobileNav open={open} setOpen={setOpen} />
                    <div className="md:w-1/12 flex items-center">
                        <a className="sm:text-2xl px-2 text-xl font-semibold" href="/">LegUp</a>
                    </div>
                    <div className="flex md:w-10/12 md:justify-center justify-start items-center">

                        <div className="z-50 w-10 flex relative h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                            setOpen(!open)
                        }}>
                            {/* hamburger button */}
                            <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                            <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                            <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                        </div>

                        <div className="hidden md:flex">
                            <NavLink to="/">
                                Home
                            </NavLink>
                            <NavLink to="#">
                                Lander
                            </NavLink>
                            <NavLink to="#">
                                Consumer
                            </NavLink>
                            <NavLink to="#">
                                About US
                            </NavLink>
                        </div>
                    </div>
                </nav>
                <div class="flex md:order-2 justify-center">
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg md:h-14 md:text-sm md:rounded-2xl text-xs px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                </div>
            </div>
        </>
    )
}