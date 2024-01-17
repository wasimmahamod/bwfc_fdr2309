import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'

const Navbar = () => {
    const [navbData, setnavData] = useState({})
    const [navItemsData, setNavItemsData] = useState([])
    const [loading, setLoading] = useState(true)
    const [dropdownShow, setDropdownShow] = useState(false)



    useEffect(() => {
        const getData = () => {
            axios.get('https://bwfc-api.vercel.app/navbar').then((data) => {
                setnavData(data.data)
                setLoading(false)
                setNavItemsData(data.data.navItems)

            }
            )
        }
        getData()
    }, [])


    if (loading) {
        return (
            <div className=' w-full h-screen flex justify-center items-center'>

                <div
                    class="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span>
                </div>
                <div
                    class="inline-block h-12 w-12 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                    role="status">
                    <span
                        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span>
                </div>

            </div>

        )
    }




    const handleDropdown = () => {
        setDropdownShow(!dropdownShow)

        console.log(dropdownShow)
    }



    return (
        <div>
            <Container>
                <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                            {
                                navbData.buttonOne.visibility &&
                                <a href={navbData.buttonOne.link} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{navbData.buttonOne.text}</a>
                            }
                            {
                                navbData.buttonTwo.visibility &&
                                <a href={navbData.buttonTwo.link} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{navbData.buttonTwo.text}</a>
                            }
                            {
                                navbData.buttonThree.visibility &&
                                <a href={navbData.buttonThree.link} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{navbData.buttonThree.text}</a>
                            }



                            <button onClick={handleDropdown} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>

                        {dropdownShow &&


                            <div className="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    {navItemsData.map((item) => (
                                        <li>

                                            <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">{item.item}
                                                {/* {item.dropDownItem &&
                                        <div >
                                            <ul>
                                                {item.dropDownItem.map((ditem)=>(
                                                  <li>{ditem.dropItem}</li> 

                                                ))}
                                            </ul>
                                        </div>
                                     
                                        } */}
                                            </a>
                                        </li>


                                    ))}
                                </ul>
                            </div>

                        }
                         <div className="hidden lg:block items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    {navItemsData.map((item) => (
                                        <li>

                                            <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">{item.item}
                                                {/* {item.dropDownItem &&
                                        <div >
                                            <ul>
                                                {item.dropDownItem.map((ditem)=>(
                                                  <li>{ditem.dropItem}</li> 

                                                ))}
                                            </ul>
                                        </div>
                                     
                                        } */}
                                            </a>
                                        </li>


                                    ))}
                                </ul>
                            </div>


                     
                    </div>
                </nav>


            </Container>
        </div>
    )
}

export default Navbar