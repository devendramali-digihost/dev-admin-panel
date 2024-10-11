import { dashboardImg1, dashboardImg2, dashboardImg3, dashboardImg4, adminTemplate, createProject } from './../src/images';
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
					title: 'Create New Page',
					type: 'item',
					icon: 'feather icon-file-text',
					src: dashboardImg4,
					url: '/create-page/create-new-page'
				},
				{
					id: 'auth',
					title: 'Authentication',
					type: 'collapse',
					icon: 'feather icon-lock',
					src: dashboardImg2,
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
						}
					]
				},
			]
		}
	]
};

export default menuItems;
