import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid className='size-8' />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <HiOutlineCube className='size-8'/>
	},
	{
		key: 'orders',
		label: 'Orders',
		path: '/orders',
		icon: <HiOutlineShoppingCart className='size-8'/>
	},
	{
		key: 'customers',
		label: 'Customers',
		path: '/customers',
		icon: <HiOutlineUsers className='size-8'/>
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/transactions',
		icon: <HiOutlineDocumentText className='size-8'/>
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation className='size-8'/>
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog className='size-8'/>
	},
	{
		key: 'support',
		label: 'Help',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle className='size-8'/>
	}
]
