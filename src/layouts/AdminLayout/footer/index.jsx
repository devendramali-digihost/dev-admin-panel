import React from 'react'
import { Row, Col } from 'react-bootstrap';
function Footer() {
	return (
		<React.Fragment>
			<footer className="footer">
				<div className='d-flex justify-content-between'>
					<div>
					&copy; {new Date().getFullYear()} Copyright:{' '} © DigiHost.
					</div>
					<div>
						Crafted with <i class="mdi mdi-heart text-danger"></i> by <a href="https://1.envato.market/themesdesign" target="_blank">DigiHost</a>
					</div>
				</div>
			</footer>
		</React.Fragment>
	)
}

export default Footer