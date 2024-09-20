import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ConfigContext } from '../../../../contexts/ConfigContext';
import * as actionType from '../../../../store/actions';
import avatar2 from '../../../../assets/images/logo-w.png';
const NavLogo = () => {
	const configContext = useContext(ConfigContext);
	const { collapseMenu } = configContext.state;
	const { dispatch } = configContext;

	let toggleClass = ['mobile-menu'];
	if (collapseMenu) {
		toggleClass = [...toggleClass, 'on'];
	}

	return (
		<React.Fragment>
			<div className="navbar-brand header-logo">
				<Link to="#" className="b-brand">
					<div className="">
						{/* <i className="feather icon-trending-up" /> */}
						<Link to="#">
							<img className="img-fluid" style={{ width: '' }} src={avatar2} alt="activity-user" />
						</Link>
					</div>
					{/* <span className="b-title">Datta Able</span> */}
				</Link>
				<Link to="#" className={toggleClass.join(' ')} id="mobile-collapse" onClick={() => dispatch({ type: actionType.COLLAPSE_MENU })}>
					<span />
				</Link>
			</div>
		</React.Fragment>
	);
};

export default NavLogo;
