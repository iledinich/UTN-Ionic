export class Usuario {
    public nombre:string;
    public apellido:string;
    public dni:string;
    public usuario:string;
    public password:string;

    constructor(nombre, apellido, dni, usuario, password){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.usuario = usuario;
        this.password = password;
    }
}