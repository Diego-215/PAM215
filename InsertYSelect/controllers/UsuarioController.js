import { Usuario } from "../models/usuario";
import DatabaseService from "../database/DatabaseService";

export class UsuarioController {
    constructor() {
        this.listeners = [];
    }

    //Inicializar el controlador con el Service
    async initialize() {
        await DatabaseService.initialize();
    }

    //Como segunda parte aquí preparamos el controlador par invoque al servicio de consulta cuando se le indiquen
    async obtenerUsuarios() {
        try {
            const data = await DatabaseService.getAll();
            return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            throw new Error('No se pudieron cargar los usuarios');
        }
    }

            //1. Validar Datos
    async crearUsuario(nombre) {
        try {
            Usuario.validar(nombre);
            //2. Insertar en BD
            const nuevoUsuario = await DatabaseService.add(nombre.trim());
            //3. Notificar a los observadores
            this.notifyListeners();
            //4. Retornar usuario creado
            return new Usuario(
                nuevoUsuario.id,
                nuevoUsuario.nombre,
                nuevoUsuario.fecha_creacion
            );
        } catch (error) {
            console.error('Error al crear usuario:', error);
            throw error;
        }
    }

    //Sistema de observaciones para actualizar la vista automáticamente
    async actualizarUsuario(id, nombreNuevo) {
        try {
            Usuario.validar(nombreNuevo);
            const usuarioActualizado = await DatabaseService.update(id, nombreNuevo.trim());
            this.notifyListeners();
            return usuarioActualizado;
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
            throw error;
        }
    }

    async eliminarUsuario(id) {
        try {
            await DatabaseService.delete(id);
            this.notifyListeners();
            return true;
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
            throw error;
        }
    }

    addListener(callback) {
        this.listeners.push(callback);
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(l => l !== callback);
    }

    notifyListeners() {
        this.listeners.forEach(callback => callback());
    }
}