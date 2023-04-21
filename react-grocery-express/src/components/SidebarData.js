import React from 'react'
import * as MdIcons from 'react-icons/md'
import * as GiIcons from 'react-icons/gi'
import * as FaIcons from 'react-icons/fa'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'
import * as AiIcons from 'react-icons/ai'
import * as TbIcons from 'react-icons/tb'
import * as IoIcons from 'react-icons/io'
import * as BiIcons from 'react-icons/bi'

const SidebarData = [
    {
        title: 'Checkout',
        path: '/checkout',
        icon: <FaIcons.FaShoppingCart />
    },
    {
        title: 'Display Customers',
        path: '/customers',
        icon: <MdIcons.MdPeopleAlt />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        subNav: [
            {
                title: 'Add Customer',
                path: '/customers/add-customer',
                icon: <BsIcons.BsPersonFillAdd />
            },
            {
                title: 'Edit Customer',
                path: '/customers/edit-customer',
                icon: <AiIcons.AiFillEdit />
            }
        ]
    },
    {
        title: 'Display Employees',
        path: '/employees',
        icon: <FaIcons.FaPeopleCarry />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        subNav: [
            {
                title: 'Add Employee',
                path: '/employees/add-employee',
                icon: <BsIcons.BsPersonFillAdd />
            },
            {
                title: 'Edit Employee',
                path: '/employees/edit-employee',
                icon: <AiIcons.AiFillEdit />
            }
        ]
    },
    {
        title: 'Display Stores',
        path: '/stores',
        icon: <FaIcons.FaStore />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        subNav: [
            {
                title: 'Add Store',
                path: '/stores/add-store',
                icon: <IoIcons.IoIosAddCircle />
            },
            {
                title: 'Edit Store',
                path: '/stores/edit-store',
                icon: <AiIcons.AiFillEdit />
            }
        ]
    },
    {
        title: 'Display Drones',
        path: '/drones',
        icon: <GiIcons.GiDeliveryDrone />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        subNav: [
            {
                title: 'Add Drone',
                path: '/drones/add-drone',
                icon: <IoIcons.IoIosAddCircle />
            },
            {
                title: 'Edit Store',
                path: '/drones/edit-drone',
                icon: <AiIcons.AiFillEdit />
            },
            {
                title: 'Send Refueling Drone',
                path: '/drones/send-refueling',
                icon: <TbIcons.TbDrone />
            }
        ]
    },
    {
        title: 'Display Items',
        path: '/items',
        icon: <FaIcons.FaProductHunt />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        subNav: [
            {
                title: 'Add Item',
                path: '/items/add-item',
                icon: <IoIcons.IoIosAddCircle />
            },
            {
                title: 'Edit Item',
                path: '/items/edit-item',
                icon: <AiIcons.AiFillEdit />
            }
        ] 
    },
    {
        title: 'Display Orders',
        path: '/orders',
        icon: <RiIcons.RiShoppingBasket2Fill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        subNav: [
            {
                title: 'Add Order',
                path: '/orders/add-order',
                icon: <IoIcons.IoIosAddCircle />
            },
            {
                title: 'Edit Order',
                path: '/orders/edit-order',
                icon: <AiIcons.AiFillEdit />
            },
            {
                title: 'Add Items to Order',
                path: '/orders/add-item-to-order',
                icon: <MdIcons.MdAddBox />
            },
            {
                title: 'Transfer Order',
                path: '/orders/transfer-order',
                icon: <BiIcons.BiTransfer />
            }
        ]
    }
] 


export default SidebarData