var NombreProducto = document.querySelector("#NombreProducto")
var CodigoP = document.querySelector("#CodigoP")
var DescripcionP = document.querySelector("#DescripcionP")
var CantidadP = document.querySelector("#CantidadP")
var CostoP  = document.querySelector("#CostoP")

var btnAgregarP = document.querySelector("#btnAgregarP")
var btnBorrarP = document.querySelector("#btnBorrarP")
var btnBuscarP = document.querySelector("#btnBuscarP")
var btnListarP = document.querySelector("#btnListarP")
var btnListarInvertido = document.querySelector("#btnListarInvertido")

var RlistaPoductos  = document.querySelector("#RlistaPoductos")
var RnombreProductos  = document.querySelector("#RnombreProductos")
var RcodigoProductos  = document.querySelector("#RcodigoProductos")
var RdescripcionP  = document.querySelector("# RdescripcionP")
var RcantidadP  = document.querySelector("#RcantidadP")
var RcostoP  = document.querySelector("#RcostoP")
var Rvalor = document.querySelector("#Rvalor")


var vectorNombreP = new Array
var vectorCodigoP = new Array
var vectorDescripcionP = new Array
var vectorCantidadP = new Array
var vecorCostoP = new Array
var vectorP = new Array

var SumaM = 0

class Productos{
    constructor(nombre, codigo, descripcion, cantidad, costo){
        this.nombre = nombre
        this.codigo = codigo
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.costo = costo
    }
    
    agruegarProducto(producto){
        vectorP.push(producto)
    }

    posicionProducto(posicion,producto){
        if(posicion < 20 && posicion <= vectorP.length){
            vectorP.splice(posicion -1,0,producto)
        }else{
            alert("no hay mas espacio")
        }
    }

    eleminarProducto(eliminar){
        let i = 0
        while ((eliminar = vectorP[i].codigo) && (i< vectorP.length)){
            i++
        }
        if(eliminar === vectorP[i].codigo){
            SumaM -= (vectorP[i].costo * vectorP[i].cantidad)
            RvalorMercancia.innerHTML = "$" + SumaM
        }else{
            alert("el producto no es valido, inserte uno que lo sea")
        }
    }

    BuscarProducto(eliminar){
        let i = 0 
        while ( eliminar != vectorP[i].codigo && i < vectorP.length){
            i++
        }
        if ( eliminar === vectorP[i].codigo){
            console.log(vectorP[i])
            RnombreProductos.innerHTML = "Nombre" + vectorP[i].nombre
            RcodigoProductos.innerHTML = "codigo" + vectorCodigoP[i].codigo
            RdescripcionP.innerHTML = "Descripcion" + vectorDescripcionP[i].descripcion
            RcantidadP.innerHTML = "Cantidad" + vectorCantidadP[i].cantidad
            RcostoP.innerHTML = "Costo" + vectorCantidadP[i].costo

        }else{
            alert("producto invalido")
        }
    }
}