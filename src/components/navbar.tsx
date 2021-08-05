import React, { useState } from 'react';
import { useEffect } from 'react';

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {

	return (
		<section className='navbar'>
			<h1 className='app-name'>Games Unchained</h1>
		</section>
	);
};

export default Navbar;
