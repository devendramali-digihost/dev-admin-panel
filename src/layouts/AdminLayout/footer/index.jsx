import React from 'react'
import { Row, Col } from 'react-bootstrap';
function Footer() {
	return (
		<React.Fragment>
			<footer className="footer">
				<Row>
					<Col lg={6}>
					&copy; {new Date().getFullYear()} Copyright:{' '} © DigiHost.
					</Col>
					<Col lg={6}>
						Crafted with <i class="mdi mdi-heart text-danger"></i> by <a href="https://1.envato.market/themesdesign" target="_blank">DigiHost</a>
					</Col>
				</Row>
			</footer>
		</React.Fragment>
	)
}

export default Footer