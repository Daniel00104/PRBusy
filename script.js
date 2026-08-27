var navbarToggler = document.querySelector('.navbar-toggler');
var navbarCollapse = document.querySelector('#main_nav');

if (navbarToggler && navbarCollapse) {
	navbarToggler.addEventListener('click', function () {
		var isOpen = navbarCollapse.classList.toggle('show');
		navbarToggler.setAttribute('aria-expanded', String(isOpen));
	});
}

document.querySelectorAll('.navbar .dropdown-toggle').forEach(function (toggle) {
	toggle.addEventListener('click', function (event) {
		event.preventDefault();
		var dropdown = toggle.closest('.dropdown');
		var isOpen = dropdown.classList.contains('show');

		document.querySelectorAll('.navbar .dropdown.show').forEach(function (openDropdown) {
			openDropdown.classList.remove('show');
			openDropdown.querySelector('.dropdown-menu').classList.remove('show');
			openDropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
		});

		if (!isOpen) {
			dropdown.classList.add('show');
			dropdown.querySelector('.dropdown-menu').classList.add('show');
			toggle.setAttribute('aria-expanded', 'true');
		}
	});
});

document.addEventListener('click', function (event) {
	if (!event.target.closest('.navbar .dropdown')) {
		document.querySelectorAll('.navbar .dropdown.show').forEach(function (openDropdown) {
			openDropdown.classList.remove('show');
			openDropdown.querySelector('.dropdown-menu').classList.remove('show');
			openDropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
		});
	}
});

document.querySelectorAll('[data-toggle="tab"]').forEach(function (tab) {
	tab.addEventListener('click', function (event) {
		event.preventDefault();

		var tabList = tab.closest('.nav');
		var tabContent = tabList && tabList.parentElement.querySelector('.tab-content');
		var targetSelector = tab.getAttribute('href');
		var targetPane = tabContent && targetSelector ? tabContent.querySelector(targetSelector) : null;

		if (!tabList || !tabContent || !targetPane) {
			return;
		}

		tabList.querySelectorAll('.nav-link').forEach(function (navLink) {
			navLink.classList.remove('active');
			navLink.setAttribute('aria-selected', 'false');
		});

		tabContent.querySelectorAll('.tab-pane').forEach(function (pane) {
			pane.classList.remove('active', 'show');
		});

		tab.classList.add('active');
		tab.setAttribute('aria-selected', 'true');
		targetPane.classList.add('active', 'show');
	});
});

