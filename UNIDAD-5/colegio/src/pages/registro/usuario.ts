export class Usuario {
    public nombre:string;
    public apellido:string;
    public password:string;
    public email:string;

    constructor(nombre, apellido, password, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.password = password;
        this.email = email;
    }
}