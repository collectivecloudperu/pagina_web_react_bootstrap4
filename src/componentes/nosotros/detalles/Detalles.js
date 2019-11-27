import React from 'react';

class Detalles extends React.Component {

  render() {

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h2>Objetivo</h2>
                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                    <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p>
                </div>
                <div className="col-md-4">
                    <h2>Misión</h2>
                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                    <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p>
                </div>
                <div className="col-md-4">
                    <h2>Visión</h2>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo.</p>
                    <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p>
                </div>
            </div>

            <hr/>

        </div>

    )
    
  }

}

export default Detalles;