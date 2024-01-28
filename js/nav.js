const changeColor = () => {
	{
		document.querySelectorAll('.nav li').forEach(item => {
			item.addEventListener('click', () => {
				document.querySelectorAll('.nav li.on').forEach(navItem => navItem.classList.remove('on'));
				item.classList.add('on');
			});
		});
	}
}
document.addEventListener('DOMContentLoaded',changeColor);