<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <title>Registro de Caja</title>
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center">Registro de Caja</h1><br><br>
        <form>
            <div class="row">
                <div class="col-md-4">
                    <h2>Datos del Cliente:</h2>
                    <div class="form-group">
                        <label for="identificacion">Identificación:</label>
                        <input type="text" class="form-control" id="identificacion" name="identificacion">
                    </div>
                    <div class="form-group">
                        <label for="nombre">Nombre:</label>
                        <input type="text" class="form-control" id="nombre" name="nombre">
                    </div>
                    <div class="form-group">
                        <label for="celular">Celular:</label>
                        <input type="text" class="form-control" id="celular" name="celular">
                    </div>
                </div>
                <div class="col-md-8">
                    <h2>Detalle de Compra:</h2>
                    <div id="productos" class="mb-3">
                        <!-- Contenido dinámico se insertará aquí -->
                    </div>
                    <button type="button" class="btn btn-primary" onclick="agregarProducto()">Agregar Producto</button>
                    <h3><p class="mt-3">Valor Total de la Factura: $<span id="valor-total-factura">0.00</span></p></h3>
                    <div class="form-group">
                        <label for="valor-pagado1">Valor Pagado:</label>
                        <input type="number" class="form-control" id="valor-pagado1" name="valor-pagado1" oninput="calcularTotalPagado(1)">
                    </div>
                </div>
            </div>
            <input type="submit" class="btn btn-success" value="Guardar Registro">
        </form>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.0.8/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
