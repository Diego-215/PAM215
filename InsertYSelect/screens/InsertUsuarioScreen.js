import { useEffect, useState, useCallback } from "react";
import {View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, ActivityIndicator} from "react-native";
import { UsuarioController } from "../controllers/UsuarioController";

const controller = new UsuarioController();

export default function UsuarioView() {
    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState('');
    const [loading, setLoading] = useState(true);
    const [guardando, setGuardando] = useState(false);

   
    const [modalVisible, setModalVisible] = useState(false);
    const [usuarioEditando, setUsuarioEditando] = useState(null);
    const [nuevoNombre, setNuevoNombre] = useState('');

    //SLECT - Cargar usuarios  desde la BD
    const cargarUsuarios = useCallback(async () => {
        try {
            setLoading(true);
            const data = await controller.obtenerUsuarios();
            setUsuarios(data);
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    // Inicializar y cargar datos
    useEffect(() => {
        const init = async () => {
            await controller.initialize();
            await cargarUsuarios();
        };

        init();
        // avisar los cambios automaticos
        controller.addListener(cargarUsuarios);

        return () => {
            controller.removeListener(cargarUsuarios);
        };
    }, [cargarUsuarios]);

    // INSERT - Agregar nuevo usuario
    const handleAgregar = async () => {
        if (guardando) return;
        try {
            setGuardando(true);
            await controller.crearUsuario(nombre);
            setNombre('');
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setGuardando(false);
        }
    };

    //Renderizar cada usuario
    const preguntarNuevoNombre = (usuario) => {
        setUsuarioEditando(usuario);
        setNuevoNombre(usuario.nombre);
        setModalVisible(true);
    };

    const confirmarEliminar = (id) => {
        Alert.alert(
            "Eliminar Usuario",
            "¿Seguro que deseas eliminar este usuario?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Eliminar",
                    style: "destructive",
                    onPress: async () => {
                        try {
                            await controller.eliminarUsuario(id);
                            Alert.alert("Eliminado", "Usuario eliminado");
                        } catch (e) {
                            Alert.alert("Error", e.message);
                        }
                    }
                }
            ]
        );
    };

    const renderUsuario = ({ item, index }) => (
        <View style={styles.userItem}>
            <View style={styles.userNumber}>
                <Text style={styles.userNumberText}>{index + 1}</Text>
            </View>

            <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.nombre}</Text>
                <Text style={styles.userId}>ID: {item.id}</Text>
                <Text style={styles.userDate}>{item.fechaCreacion}</Text>

                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <TouchableOpacity
                        style={[styles.actionButton, { backgroundColor: "#FFA500" }]}
                        onPress={() => preguntarNuevoNombre(item)}
                    >
                        <Text style={styles.actionText}>Editar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.actionButton, { backgroundColor: "#FF3B30" }]}
                        onPress={() => confirmarEliminar(item.id)}
                    >
                        <Text style={styles.actionText}>Eliminar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>

            <Text style={styles.title}>INSERT & SELECT</Text>

            <View style={styles.insertSection}>
                <Text style={styles.sectionTitle}>Insertar Usuario</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nombre del usuario"
                    value={nombre}
                    onChangeText={setNombre}
                />

                <TouchableOpacity
                    style={[styles.button, guardando && styles.buttonDisabled]}
                    onPress={handleAgregar}
                    disabled={guardando}
                >
                    <Text style={styles.buttonText}>
                        {guardando ? "Guardando..." : "Agregar Usuario"}
                    </Text>
                </TouchableOpacity>
            </View>
            {/* Zona del SELECT */}

         
            <View style={styles.selectSection}>
                <View style={styles.selectHeader}>
                    <Text style={styles.sectionTitle}>Lista de Usuarios</Text>

                    <TouchableOpacity
                        style={styles.refreshButton}
                        onPress={cargarUsuarios}
                    >
                        <Text style={styles.refreshText}>Recargar</Text>
                    </TouchableOpacity>
                </View>

                {loading ? (
                    <ActivityIndicator size="large" color="#007AFF" />
                ) : (
                    <FlatList
                        data={usuarios}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderUsuario}
                    />
                )}
            </View>

            {modalVisible && (
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Text style={styles.sectionTitle}>Editar Usuario</Text>
                        <TextInput
                            style={styles.input}
                            value={nuevoNombre}
                            onChangeText={setNuevoNombre}
                            placeholder="Nuevo nombre"
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: '#ccc' }]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={async () => {
                                    try {
                                        await controller.actualizarUsuario(usuarioEditando.id, nuevoNombre);
                                        Alert.alert("Éxito", "Usuario actualizado");
                                        setModalVisible(false);
                                    } catch (e) {
                                        Alert.alert("Error", e.message);
                                    }
                                }}
                            >
                                <Text style={styles.buttonText}>Guardar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: "#f5f5f5", 
        paddingTop: 50 
    },
    title: { 
        fontSize: 26, 
        fontWeight: "bold", 
        textAlign: "center", 
        marginBottom: 20 
    },
    insertSection: {
        backgroundColor: "#fff", 
        padding: 20, 
        margin: 15, 
        borderRadius: 12,
    },
    selectSection: {
        flex: 1, 
        backgroundColor: "#fff", 
        margin: 15, 
        borderRadius: 12, 
        padding: 15,
    },
    sectionTitle: { 
        fontSize: 18, 
        fontWeight: "bold", 
        marginBottom: 15 
    },
    input: {
        borderWidth: 1, 
        borderColor: "#ccc", 
        borderRadius: 8,
        padding: 10, 
        marginBottom: 10
    },
    button: {
        backgroundColor: "#007AFF", 
        padding: 15, 
        borderRadius: 8, 
        alignItems: "center"
    },
    buttonDisabled: { 
        backgroundColor: "#ccc" 
    },
    buttonText: { 
        color: "#fff", 
        fontWeight: "bold" 
    },
    userItem: {
        flexDirection: "row", 
        backgroundColor: "#f9f9f9", 
        padding: 15,
        borderRadius: 8, 
        marginBottom: 10
    },
    userNumber: {
        width: 35, 
        height: 35, 
        borderRadius: 17, 
        backgroundColor: "#007AFF",
        justifyContent: "center", 
        alignItems: "center", 
        marginRight: 12
    },
    userNumberText: { 
        color: "#fff", 
        fontWeight: "bold" 
    },
    userInfo: { 
        flex: 1 
    },
    userName: { 
        fontSize: 16, 
        fontWeight: "600" 
    },
    userId: { 
        fontSize: 12, 
        color: "#007AFF" 
    },
    userDate: { 
        fontSize: 12, 
        color: "#666" 
    },

    actionButton: {
        paddingVertical: 6, 
        paddingHorizontal: 12,
        borderRadius: 6, 
        marginRight: 10
    },
    actionText: { color: "#fff", 
        fontWeight: "600" 
    },

    refreshButton: { 
        padding: 6 
    },
    refreshText: { 
        color: "#007AFF", 
        fontWeight: "600" 
    },
    modal: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        width: '80%'
    }
});