import React from 'react';

class Slider extends React.Component {

  render() {

  	return (

  		<div id="slider" className="carousel slide" data-ride="carousel">
		    <ol className="carousel-indicators">
		        <li data-target="#slider" data-slide-to="0" className="active"></li>
		        <li data-target="#slider" data-slide-to="1"></li>
		        <li data-target="#slider" data-slide-to="2"></li>
		    </ol>
		    <div className="carousel-inner">
		        <div className="carousel-item active">
		            <img className="img-fluid" src="https://blog.nubecolectiva.com/wp-content/uploads/2019/10/img_destacada_blog_devs-5-930x360.png" />
		            <div className="elementos">
		                <a className="btn btn-lg btn-primary" href="https://blog.nubecolectiva.com/proteccion-de-rutas-o-vistas-mediante-contrasena-en-laravel-6-2/" target="_blank" role="button">Leer más</a>
		            </div>
		        </div>
		        <div className="carousel-item">
		            <img className="img-fluid" src="https://blog.nubecolectiva.com/wp-content/uploads/2019/08/edit_img_destacada_blog_devs-930x360.png" />
		            <div className="elementos">
		                <a className="btn btn-lg btn-primary" href="https://blog.nubecolectiva.com/5-tips-para-mejorar-la-ux-experiencia-del-usuario-de-un-menu-web-creado-con-bootstrap-4" target="_blank" role="button">Leer más</a>
		            </div>
		        </div>
		        <div className="carousel-item">
		            <img className="img-fluid" src="https://blog.nubecolectiva.com/wp-content/uploads/2019/10/edit_img_destacada_blog_devs-3-930x360.png" />
		            <div className="elementos">
		                <a className="btn btn-lg btn-primary" href="https://blog.nubecolectiva.com/como-crear-animaciones-en-android-trasladar-elemento-en-eje-x-y-java/" target="_blank" role="button">Leer más</a>
		            </div>
		        </div>
		    </div>
		    <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
		        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		        <span className="sr-only">Previous</span>
		    </a>
		    <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
		        <span className="carousel-control-next-icon" aria-hidden="true"></span>
		        <span className="sr-only">Next</span>
		    </a>
		</div>

  	)
    
  }

}

export default Slider;