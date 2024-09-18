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
          url: '/app/dashboard/default'
        }
      ]
    },
    // {
    // 	id: 'ui-element',
    // 	title: 'UI ELEMENT',
    // 	type: 'group',
    // 	icon: 'icon-ui',
    // 	children: [
    // 		{
    // 			id: 'component',
    // 			title: 'Component',
    // 			type: 'collapse',
    // 			icon: 'feather icon-box',
    // 			children: [
    // 				{
    // 				id: 'button',
    // 				title: 'Button',
    // 				type: 'item',
    // 				url: '/basic/button'
    // 				},
    // 				{
    // 				id: 'badges',
    // 				title: 'Badges',
    // 				type: 'item',
    // 				url: '/basic/badges'
    // 				},
    // 				{
    // 				id: 'breadcrumb',
    // 				title: 'Breadcrumb & Pagination',
    // 				type: 'item',
    // 				url: '/basic/breadcrumb-paging'
    // 				},
    // 				{
    // 				id: 'collapse',
    // 				title: 'Collapse',
    // 				type: 'item',
    // 				url: '/basic/collapse'
    // 				},
    // 				{
    // 				id: 'tabs-pills',
    // 				title: 'Tabs & Pills',
    // 				type: 'item',
    // 				url: '/basic/tabs-pills'
    // 				},
    // 				{
    // 				id: 'typography',
    // 				title: 'Typography',
    // 				type: 'item',
    // 				url: '/basic/typography'
    // 				}
    // 			]
    // 		}
    // 	]
    // },
    {
      id: 'ui-forms',
      title: 'FORMS & TABLES',
      type: 'group',
      icon: 'icon-group',
      children: [
        {
          id: 'forms',
          title: 'Company Sign-Up',
          type: 'item',
          icon: 'feather icon-file-text',
          url: '/forms/form-companysignup'
        },
        {
          id: 'table',
          title: 'Create New Page',
          type: 'item',
          icon: 'feather icon-file-text',
          url: '/create-page/create-new-page'
        },
        {
          id: 'table',
          title: 'Basic Table',
          type: 'item',
          icon: 'feather icon-file-text',
          url: '/tables/bootstrap'
        },
        {
			id: 'form',
			title: 'Sign In',
			type: 'item',
			icon: 'feather icon-file-text',
			url: '/auth/signin'
		},
        {
          id: 'form',
          title: 'Forgot Password',
          type: 'item',
          icon: 'feather icon-file-text',
          url: '/auth/forgotpassword'
        },
        {
          id: 'form',
          title: 'Reset Password',
          type: 'item',
          icon: 'feather icon-file-text',
          url: '/auth/resetpassword'
        }
      ]
    }
    // {
    // 	id: 'chart-maps',
    // 	title: 'Chart & Maps',
    // 	type: 'group',
    // 	icon: 'icon-charts',
    // 	children: [
    // 		{
    // 		id: 'charts',
    // 		title: 'Charts',
    // 		type: 'item',
    // 		icon: 'feather icon-pie-chart',
    // 		url: '/charts/nvd3'
    // 		},
    // 		{
    // 		id: 'maps',
    // 		title: 'Maps',
    // 		type: 'item',
    // 		icon: 'feather icon-map',
    // 		url: '/maps/google-map'
    // 		}
    // 	]
    // },
    // {
    // 	id: 'pages',
    // 	title: 'Pages',
    // 	type: 'group',
    // 	icon: 'icon-pages',
    // 	children: [
    // 		{
    // 		id: 'auth',
    // 		title: 'Authentication',
    // 		type: 'collapse',
    // 		icon: 'feather icon-lock',
    // 		badge: {
    // 			title: 'New',
    // 			type: 'label-danger'
    // 		},
    // 		children: [
    // 			{
    // 			id: 'signup-1',
    // 			title: 'Sign up',
    // 			type: 'item',
    // 			url: '/auth/signup-1',
    // 			target: true,
    // 			breadcrumbs: false
    // 			},
    // 			{
    // 			id: 'signin-1',
    // 			title: 'Sign in',
    // 			type: 'item',
    // 			url: '/auth/signin-1',
    // 			target: true,
    // 			breadcrumbs: false
    // 			}
    // 		]
    // 		},
    // 		{
    // 		id: 'sample-page',
    // 		title: 'Sample Page',
    // 		type: 'item',
    // 		url: '/sample-page',
    // 		classes: 'nav-item',
    // 		icon: 'feather icon-sidebar'
    // 		},
    //
    //
    // 	]
    // }
  ]
};

export default menuItems;
