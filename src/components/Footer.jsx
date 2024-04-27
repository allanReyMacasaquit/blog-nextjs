const Footer = () => {
	const currentYear = new Date().getFullYear(); // Get the current year
	return (
		<footer>
			<div className='container'>
				<hr />
				<p className='pt-30'>&copy; Headeless CMS {currentYear}</p>
			</div>
		</footer>
	);
};
export default Footer;
