import { dashboardImg1, dashboardImg2, dashboardImg3, dashboardImg4 } from './../src/images';
const menuItems = {
	items: [
		{
			id: 'navigation',
			title: 'Navigation',
			type: 'group',
			icon: 'icon-navigation',
			children: [
				{
					id: 'dashboard',
					title: 'Dashboard',
					type: 'item',
					icon: 'feather icon-home',
					src: dashboardImg1,
					url: '/app/dashboard/default'
				},
				{
					id: 'forms',
					title: 'Company Sign-Up',
					type: 'item',
					icon: 'feather icon-file-text',
					src: dashboardImg3,
					url: '/forms/form-companysignup'
				},
				{
					id: 'forms',
					title: 'Company List',
					type: 'item',
					icon: 'feather icon-file-text',
					src: dashboardImg1,
					url: '/company/company-list'
				},
				{
					id: 'table',
					title: 'Create New Page',
					type: 'item',
					icon: 'feather icon-file-text',
					src: dashboardImg4,
					url: '/create-page/create-new-page'
				},
				{
					id: 'table',
					title: 'Basic Table',
					type: 'item',
					icon: 'feather icon-file-text',
					src: dashboardImg2,
					url: '/tables/bootstrap'
				},
				{
					id: 'form',
					title: 'Sign In test test',
					type: 'item',
					icon: 'feather icon-file-text',
					src: dashboardImg1,
					url: '/auth/signin'
				},
				{
					id: 'form',
					title: 'Forgot Password',
					type: 'item',
					icon: 'feather icon-file-text',
					src: dashboardImg1,
					url: '/auth/forgotpassword'
				},
				{
					id: 'form',
					title: 'Reset Password',
					type: 'item',
					icon: 'feather icon-file-text',
					src: dashboardImg1,
					url: '/auth/resetpassword'
				},
				{
					id: 'form',
					title: 'My Profile',
					type: 'item',
					icon: 'feather icon-file-text',
					src: dashboardImg1,
					url: '/profile/my-profile'
				}
			]
		}
	]
};

export default menuItems;
