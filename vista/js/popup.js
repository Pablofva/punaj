// Importo las ID de los elementos a usar

var abrirBuffet = document.getElementById('buffet'),
	abrirSala = document.getElementById('sala'),
	abrirFotocopiadora = document.getElementById('fotocopiadora'),
	abrirDepartamentos = document.getElementById('departamentos'),
	abrirLaboratorio = document.getElementById('laboratorio'),
	abrirBaños = document.getElementById('baños'),

	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	cerrar = document.getElementById('btn-cerrar-popup'),
	imagen = document.getElementById('selector-imagen');


// agrego imagen segun donde se haya hecho un click

abrirBuffet.addEventListener('click', function(){
	abrirVentana();
	imagen.setAttribute('src', 'vista/img/buffet.jpg');
})

abrirSala.addEventListener('click', function(){
	abrirVentana();
	imagen.setAttribute('src', 'vista/img/sala.jpg');
})

abrirFotocopiadora.addEventListener('click', function(){
	abrirVentana();
	imagen.setAttribute('src', 'vista/img/foto.jpg');
})

abrirDepartamentos.addEventListener('click', function(){
	abrirVentana();
	imagen.setAttribute('src', 'vista/img/3.jpg');
})

abrirLaboratorio.addEventListener('click', function(){
	abrirVentana();
	imagen.setAttribute('src', 'vista/img/3.jpg');
})

abrirBaños.addEventListener('click', function(){
	abrirVentana();
	imagen.setAttribute('src', 'vista/img/3.jpg');
})



// Boton de cerrar de la ventana POPUP

cerrar.addEventListener('click', function(){
	overlay.classList.remove('active');
	popup.classList.remove('active');
})


// Funcion que abre la ventana

function abrirVentana(){
	overlay.classList.add('active');
	popup.classList.add('active');
}