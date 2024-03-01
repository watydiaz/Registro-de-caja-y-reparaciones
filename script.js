let contadorProductos = 1;

function agregarProducto() {
    contadorProductos++;
    const divProductos = document.getElementById("productos");
    const nuevoProducto = document.createElement("div");
    nuevoProducto.className = "producto";
    nuevoProducto.innerHTML = `
        <div class="row">
            <div class="col-md-3">
                <label for="producto${contadorProductos}">Producto:</label>
                <input type="text" class="form-control" id="producto${contadorProductos}" name="producto${contadorProductos}">
            </div>
            <div class="col-md-3">
                <label for="cantidad${contadorProductos}">Cantidad:</label>
                <input type="number" class="form-control" id="cantidad${contadorProductos}" name="cantidad${contadorProductos}" oninput="calcularTotal(${contadorProductos})">
            </div>
            <div class="col-md-3">
                <label for="valor-unitario${contadorProductos}">Valor Unit:</label>
                <input type="number" class="form-control" id="valor-unitario${contadorProductos}" name="valor-unitario${contadorProductos}" oninput="calcularTotal(${contadorProductos})">
            </div>
            <div class="col-md-3">
                <label for="valor-total${contadorProductos}">Total Parcial:</label>
                <input type="number" class="form-control" id="valor-total${contadorProductos}" name="valor-total${contadorProductos}" readonly>
            </div>
        </div>

        <div class="row">
            <div class="col-md-3">
                <label for="producto${contadorProductos}">Equipo:</label>
                <input type="text" class="form-control" id="equipo${contadorProductos}" name="equipo${contadorProductos}">
            </div>
            <div class="col-md-3">
                <label for="cantidad${contadorProductos}">Estado Fisico:</label>
                <input type="text" class="form-control" id="estadoFisico${contadorProductos}" name="estadoFisico${contadorProductos}" oninput="calcularTotal(${contadorProductos})">
            </div>
            <div class="col-md-3">
                <label for="valor-unitario${contadorProductos}">Password:</label>
                <input type="text" class="form-control" id="password${contadorProductos}" name="password${contadorProductos}" oninput="calcularTotal(${contadorProductos})">
            </div>
            <div class="col-md-3">
            <label for="imagen${contadorProductos}">Imagen:</label>
            <input type="file" class="form-control" id="imagen${contadorProductos}" name="imagen${contadorProductos}">
        </div>
        </div>
        <button type="button" class="btn btn-danger mt-2" onclick="eliminarUltimoProducto(this)">Eliminar Producto</button>
    `;
    divProductos.appendChild(nuevoProducto);
}


//Esta funcion sirve para cacular el valor total parcial de cada detalle o item.
function calcularTotal(id) {
    const cantidad = document.getElementById(`cantidad${id}`).value;
    const valorUnitario = document.getElementById(`valor-unitario${id}`).value;
    const total = cantidad * valorUnitario;
    document.getElementById(`valor-total${id}`).value = total;
    calcularTotalFactura();
}

function eliminarUltimoProducto(button) {
    const productoAEliminar = button.parentNode;
    productoAEliminar.parentNode.removeChild(productoAEliminar);
    contadorProductos--;
    calcularTotalFactura();
}

function calcularTotalPagado(id) {
    const valorPagado = document.getElementById(`valor-pagado${id}`).value || 0;
    const valorTotal = parseFloat(document.getElementById(`valor-total${id}`).value) || 0;
    const saldo = valorTotal - valorPagado;
    document.getElementById(`saldo${id}`).value = saldo.toFixed(2);
}

function calcularTotalFactura() {
    let totalFactura = 0;
    const camposValorTotal = document.querySelectorAll('input[name^="valor-total"]');
    
    camposValorTotal.forEach((campo) => {
        totalFactura += parseFloat(campo.value) || 0;
    });

    document.getElementById('valor-total-factura').textContent = totalFactura.toFixed(2);
}
