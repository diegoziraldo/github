cadena1 = 'hola soy Diego 1'
cadena2 = 'hola que tal'

mayuscula = cadena2.upper() #convierte la cadena a mayusculas
minuscula = cadena2.lower() #convierte la cadena a minusculas
primer_letra_mayus = cadena2.capitalize() #Convierte la primera letra a mayuscula
busqueda_find = cadena1.find('D')   #Busca en que indice del array empieza el array que le pasamos. Si no lo encuentra, manda -1
busqueda_index = cadena1.index('D') #Busca en que indice del array empieza el array que le pasamos. Si no lo encuentra, manda una excepcion
es_numerico = cadena1.isnumeric()   #Vamos a comprobar si el string es numerico, nos devuelve un valor buleano
es_alphanumerico = cadena1.isalpha()

print(es_alphanumerico)