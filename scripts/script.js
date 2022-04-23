let testing_es = test_es['test'];
let testing_ca = test_ca['test'];
let testing_en = test_en['test'];
let lang = document.documentElement.getAttribute('lang');
let total = "87";
let version = 'All';
let level = 'All';
let category = 'All';

const resume = document.getElementById('resume');
let message;

let checksAlias = [
	{
		"name" : "level",
		"alias" : {
			"ca" : "Nivell",
			"es" : "Nivel",
			"en" : "Level"
		}
	},
	{
		"name" : "version",
		"alias" : {
			"ca" : "Versió",
			"es" : "Versión",
			"en" : "Version"
		}
	},
	{
		"name" : "goal",
		"alias" : {
			"ca" : "Objectiu",
			"es" : "Objetivo",
			"en" : "Goal"
		}
	},
	{
		"name" : "verification",
		"alias" : {
			"ca" : "Verificació",
			"es" : "Verificación",
			"en" : "Verification"
		}
	},
	{
		"name" : "tools",
		"alias" : {
			"ca" : "Eines",
			"es" : "Herramientas",
			"en" : "Tools"
		}
	}
];

let headers = [
	{
		"name" : "criteria",
		"alias" : {
			"ca" : "Criteri",
			"es" : "Criterio",
			"en" : "Criteria"
		},
		"view" : true
	},
	{
		"name" : "link",
		"alias" : "Link",
		"view" : false
	},
	{
		"name" : "level",
		"alias" : {
			"ca" : "Nivell",
			"es" : "Nivel",
			"en" : "Level"
		},
		"view" : true
	},
	{
		"name" : "version",
		"alias" : {
			"ca" : "Versió",
			"es" : "Versión",
			"en" : "Version"
		},
		"view" : true
	},
	{
		"name" : "goal",
		"alias" : {
			"ca" : "Objectiu",
			"es" : "Objetivo",
			"en" : "Goal"
		},
		"view" : true
	},
	{
		"name" : "verification",
		"alias" : {
			"ca" : "Verificació",
			"es" : "Verificación",
			"en" : "Verification"
		},
		"view" : true
	},
	{
		"name" : "tools",
		"alias" : {
			"ca" : "Eines",
			"es" : "Herramientas",
			"en" : "Tools"
		},
		"view" : true
	}
];

function createTable() {
	const filterLevel = level.split(",");
	const filterVersion = version.split(",");
	const tableHeader = document.getElementById('thead');
	const tableBody = document.getElementById('tbody');
  const totalHead = tableHeader.children.length;
  const totalBody = tableBody.children.length;
  
	for(let g= 0; g<totalHead; g++) {
    if (tableHeader.children.length >0 ) { tableHeader.removeChild(tableHeader.children[0]); }
  }

  for (let i = 0; i < totalBody;i++ ) {
    if (tableBody.children.length > 0 ) { tableBody.removeChild(tableBody.children[0]); }
  }

	// Create table headers
  let tr = document.createElement('tr');
	headers.forEach(item => {
    if (item.view) {
      const th = document.createElement('th')
			th.setAttribute('scope', 'column')
			th.innerHTML = item.alias[lang];
      tr.appendChild(th)
    }
  })
  tableHeader.appendChild(tr)

	// Create table body
  switch (lang) {
		case 'ca':
			testing_ca.forEach(item => {
				tr = document.createElement('tr')
				headers.forEach(head => {
					if (head.view===true && (filterLevel.find(lev => lev === item.level) || filterLevel[0] === 'All') && (filterVersion.find(lev => lev === item.version) || filterVersion[0] === 'All')) {
						if (head.name === 'criteria') {
							const th = document.createElement('th')
							th.setAttribute('scope', 'row')
							th.innerHTML = item[head.name];
							tr.appendChild(th)
						} else {
							const td = document.createElement('td');
							td.innerHTML = item[head.name];
							tr.appendChild(td);
						}
					}
				});
				if (tr.firstElementChild != null){
					tableBody.append(tr);
				}
			});
		break;
		case 'en':
			testing_en.forEach(item => {
				tr = document.createElement('tr')
				headers.forEach(head => {
					if (head.view===true && (filterLevel.find(lev => lev === item.level) || filterLevel[0] === 'All') && (filterVersion.find(lev => lev === item.version) || filterVersion[0] === 'All')) {
						if (head.name === 'criteria') {
							const th = document.createElement('th')
							th.setAttribute('scope', 'row')
							th.innerHTML = item[head.name];
							tr.appendChild(th)
						} else {
							const td = document.createElement('td');
							td.innerHTML = item[head.name];
							tr.appendChild(td);
						}
					}
				});
				if (tr.firstElementChild != null){
					tableBody.append(tr);
				}
			});
		break;
		case 'es':
		default:
			testing_es.forEach(item => {
				tr = document.createElement('tr')
				headers.forEach(head => {
					if (head.view===true && (filterLevel.find(lev => lev === item.level) || filterLevel[0] === 'All') && (filterVersion.find(lev => lev === item.version) || filterVersion[0] === 'All')) {
						if (head.name === 'criteria') {
							const th = document.createElement('th')
							th.setAttribute('scope', 'row')
							th.innerHTML = item[head.name];
							tr.appendChild(th)
						} else {
							const td = document.createElement('td');
							td.innerHTML = item[head.name];
							tr.appendChild(td);
						}
					}
				});
				if (tr.firstElementChild != null){
					tableBody.append(tr);
				}
			});
		break;
	}
	total = document.getElementById('wcagTable').rows.length - 1;
	updateResume();
}

function translateInterface() {
	const legendLang = document.getElementById('btnLang').firstElementChild;
	switch (lang) {
		case 'ca':
			legendLang.innerHTML = 'Idioma';
			break;
		case 'es':
			legendLang.innerHTML = 'Idioma';
			break;
		case 'en':
		default:
			legendLang.innerHTML = 'Language';
			break;	
	}
	const legendVersion = document.getElementById('btnVersion').firstElementChild;
	switch (lang) {
		case 'ca':
			legendVersion.innerHTML = 'Versió';
			break;
		case 'es':
			legendVersion.innerHTML = 'Versión';
			break;
		case 'en':
		default:
			legendVersion.innerHTML = 'Version';
			break;	
	}
	const legendLevel = document.getElementById('btnLevel').firstElementChild;
	switch (lang) {
		case 'ca':
			legendLevel.innerHTML = 'Nivell';
			break;
		case 'es':
			legendLevel.innerHTML = 'Nivel';
			break;
		case 'en':
		default:
			legendLevel.innerHTML = 'Level';
			break;	
	}
	const checks = document.getElementsByClassName('checks');
	for (i=0; i < checks.length; i++) {
		checks[i].innerHTML = checksAlias[i].alias[lang];
	}
	updateResume();
}

function updateResume() {
	switch (lang) {
		case 'ca':
			message = 'Mostrant <span class="btn btn-info dark-text btn-sm">' + total + '</span> criteris. Versió <span class="btn btn-info btn-sm">' + version + '</span> nivell <span class="btn btn-info btn-sm">' + level + '</span>.';
		break;
		case 'es':
			message = 'Mostrando <span class="btn btn-info dark-text btn-sm">' + total + '</span> criterios. Versión <span class="btn btn-info btn-sm">' + version + '</span> nivel <span class="btn btn-info btn-sm">' + level + '</span>.';
		break;
		case 'en':
		default:
			message = 'Showing <span class="btn btn-info dark-text btn-sm">' + total + '</span> criterias. Version <span class="btn btn-info btn-sm">' + version + '</span> level <span class="btn btn-info btn-sm">' + level + '</span>.';
		break;
	}
	resume.innerHTML = message;
}

function btnLang(btn) {
	document.documentElement.setAttribute("lang", btn.id);
	lang = document.documentElement.getAttribute('lang');
	const btns = document.getElementsByClassName('language');
	for (i=0; i< btns.length; i++) {
		if (btns[i].id === btn.id) {
			btns[i].ariaPressed = 'true';
			btns[i].classList.remove('btn-secondary');
			btns[i].classList.add('btn-primary')
		} else {
			btns[i].ariaPressed = 'false';
			btns[i].classList.remove('btn-primary');
			btns[i].classList.add('btn-secondary')
		}
	}
	translateInterface();
	createTable();
}

function btnVersion(btn) {
	const versions = document.getElementsByClassName('version');
	const arrayVersions = [];
	let checker = false;

	if (btn.textContent === 'All') {
		for (i=0; i< versions.length; i++) {
			versions[i].ariaPressed = 'false';
		}
		versions[0].ariaPressed = 'true';
	} else {
		versions[0].ariaPressed = 'false';
		btn.ariaPressed === 'true' ? btn.ariaPressed = 'false' : btn.ariaPressed = 'true';
	}

	for (i=0; i< versions.length; i++) {
		if (versions[i].ariaPressed === 'true') {
			checker = true;
			versions[i].classList.remove('btn-secondary');
			versions[i].classList.add('btn-primary');
			arrayVersions.push(versions[i].textContent);
		} else {
			versions[i].ariaPressed = 'false';
			versions[i].classList.remove('btn-primary');
			versions[i].classList.add('btn-secondary');
		}
	}

	if (checker === false) {
		versions[0].ariaPressed = 'true';
		versions[0].classList.remove('btn-secondary');
		versions[0].classList.add('btn-primary');
		arrayVersions.push(versions[0].textContent);
	}
	version = arrayVersions.join();
	createTable()
}

function btnLevel(btn) {
	const levels = document.getElementsByClassName('level');
	const arrayLevels = [];
	let checker = false;

	if (btn.textContent === 'All') {
		for (i=0; i< levels.length; i++) {
			levels[i].ariaPressed = 'false';
		}
		levels[0].ariaPressed = 'true';
	} else {
		levels[0].ariaPressed = 'false';
		btn.ariaPressed === 'true' ? btn.ariaPressed = 'false' : btn.ariaPressed = 'true';
	}

	for (i=0; i< levels.length; i++) {
		if (levels[i].ariaPressed === 'true') {
			checker = true;
			levels[i].classList.remove('btn-secondary');
			levels[i].classList.add('btn-primary');
			arrayLevels.push(levels[i].textContent);
		} else {
			levels[i].ariaPressed = false;
			levels[i].classList.remove('btn-primary');
			levels[i].classList.add('btn-secondary');
		}
	}
	
	if (checker === false) {
		levels[0].ariaPressed = true;
		levels[0].classList.remove('btn-secondary');
		levels[0].classList.add('btn-primary');
		arrayLevels.push(levels[0].textContent);
	}
	level = arrayLevels.join();
	
	createTable()
}

function showColumns(check){
	headers.forEach(item => {
		if (item.name === check.id) {
			item.view ? item.view = false : item.view = true;
		}
	})
	createTable();
}

function init() {
	const btnLang = document.getElementsByClassName('language');
	const btnVersion = document.getElementsByClassName('version')[0];
	const btnLevel = document.getElementsByClassName('level')[0];
	const btnCategory = document.getElementsByClassName('level')[0];

	for (i=0; i < btnLang.length; i++) {
		if (btnLang[i].id === lang) {
			btnLang[i].ariaPressed = 'true';
			btnLang[i].classList.remove('btn-secondary');
			btnLang[i].classList.add('btn-primary')
		}
	}

	btnVersion.ariaPressed = 'true';
	btnVersion.classList.remove('btn-secondary');
	btnVersion.classList.add('btn-primary')

	btnLevel.ariaPressed = 'true';
	btnLevel.classList.remove('btn-secondary');
	btnLevel.classList.add('btn-primary')
	

}

init();
translateInterface();
createTable();