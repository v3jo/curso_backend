class Usuario {
    constructor(nombre, apellido, libros, mascotas)
    {
        this.apellido = apellido;
        this.nombre = nombre;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
      return `Hola ${this.nombre} ${this.apellido}!`;
    }

    addMascotas(mascota){
        let agregar = mascota;
        this.mascotas.push(agregar)

    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(nombre, autor){
    
        return this.libros.splice(0, 0, {nombre : nombre, autor : autor})
    }

    getBookNames(){
        return this.libros.map(prop => prop.nombre )
    }
}

const user = new Usuario ('pepe', 'argento',[{nombre: "JavaScript2022"},{nombre: "HTML 2022"},{nombre: "CSS 2022"}],["Gato","Perro","Loro"])

//obtener nombre completo----
console.log(user.getFullName())

//Agregar mascota-----
user.addMascotas("pez")
console.log(user)
//Contar Mascota-----
console.log(user.countMascotas())
//Agregar libro----
user.addBook("libro4","NodeJS2022")
console.log(user)
//obtener nombre libro----

console.log(user.getBookNames())



