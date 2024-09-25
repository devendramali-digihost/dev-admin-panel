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
					id: 'dashboard',
					title: 'Business Account',
					type: 'item',
					icon: 'feather icon-file-text',
					src: dashboardImg3,
					url: '/company/business-account'
				},
				{
					id: 'dashboard',
					title: 'Company List',
					type: 'item',
					icon: 'feather icon-file-text',
					src: dashboardImg1,
					url: '/company/company-list'
				},
				{
					id: 'dashboard',
					title: 'Create New Page',
					type: 'item',
					icon: 'feather icon-file-text',
					src: dashboardImg4,
					url: '/create-page/create-new-page'
				},
				{
					id: 'dashboard',
					title: 'Basic Table',
					type: 'item',
					icon: 'feather icon-file-text',
					src: dashboardImg2,
					url: '/tables/bootstrap'
				},
				{
					id: 'auth',
					title: 'Authentication',
					type: 'collapse',
					icon: 'feather icon-lock',
					src: dashboardImg1,
					badge: {
						title: 'New',
						type: 'label-danger'
					},
					children: [
						{
							id: 'signup-1',
							title: 'Sign In',
							type: 'item',
							url: '/auth/signin',
							target: true,
							breadcrumbs: false
						},
						{
							id: 'form',
							title: 'Forgot Password',
							type: 'item',
							url: '/auth/forgotpassword',
							target: true,
							breadcrumbs: false
						},
						{
							id: 'form',
							title: 'Reset Password',
							type: 'item',
							url: '/auth/resetpassword',
							target: true,
							breadcrumbs: false
						},
					]
				},
				{
					id: 'dashboard',
					title: 'My Profile',
					type: 'item',
					icon: 'feather icon-file-text',
					src: dashboardImg1,
					url: '/profile/my-profile'
				},
				{
					id: 'dashboard',
					title: 'My Profile',
					type: 'item',
					icon: 'feather icon-file-text',
					src: dashboardImg1,
					url: '/profile/my-profile'
				},
				// {
				// 	id: 'forms',
				// 	title: 'Create Admin',
				// 	type: 'item',
				// 	icon: 'feather icon-file-text',
				// 	src:dashboardImg3,
				// 	url: '/template/create-admin'
				//   },
				{
					id: 'forms',
					title: 'Buy Domain',
					type: 'item',
					icon: 'feather icon-file-text',
					src:dashboardImg3,
					url: '/buy-domain'
				  },
				{
					id: 'forms',
					title: 'Ns Verify',
					type: 'item',
					icon: 'feather icon-file-text',
					src:dashboardImg3,
					url: '/ns-verify'
				  },
			]
		},

	]
};

export default menuItems;
