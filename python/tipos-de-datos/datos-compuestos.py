#ACA ESTAMOS CREANDO UNA LISTA
lista = ['Diego', True, 1.80]   #Aca estamos creando una lista
print(lista[0])


#ACA ESTAMOS CREANDO UNA TUPLA
tupla = ('Diego', True, 1.80)   #Aca estamos creando una tupla, la diferencia es que no se pueden modificar.
print(tupla[2])
lista[2] = '1.75'   #De esta manera estamos modificando la lista
print(lista)


#CREANDO UN CONJUNTO (set)
conjunto = {'Diego Ziraldo', True, 1.70} #En un conjunto no pueden haber datos duplicados. Tampoco se puede acceder al elemento por su numero de indice
print(conjunto)


#ACA ESTAMOS CREANDO UN DICCIONARIO (dict) - La estructura es 'key':'value',
diccionario = {
    'nombre':'Diego',
    'apellido':'Ziraldo',
    'telefono':'1515151515'

}
print(diccionario['nombre'])