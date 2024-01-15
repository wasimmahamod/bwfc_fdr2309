import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'

const Navbar = () => {
    const [navbData, setnavData] = useState({})
    const [navItemsData, setNavItemsData] = useState([])

    useEffect(() => {
        const getData = () => {
            axios.get('https://bwfc-api.vercel.app/navbar').then((data) => {
                setnavData(data.data)
                setNavItemsData(data.data.navItems)
            }
            )
        }
        getData()
    }, [])


    console.log(navItemsData)
    return (
        <div>
            <Container>
                <Flex className="justify-between items-center">
                    <img src={navbData.logo} alt="" />
                    <ul>
                        {navItemsData.map((item) => (
                            <li><a href="#">{item.item}</a></li>
                        ))}

                    </ul>

                </Flex>

            </Container>
        </div>
    )
}

export default Navbar