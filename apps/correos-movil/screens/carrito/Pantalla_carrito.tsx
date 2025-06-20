import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';

type ProductoCarrito = {
  id: string;
  cantidad: number;
  precio_unitario: number;
  producto: {
    nombre: string;
    descripcion: string;
    imagen_url: string;
  };
};

const PantallaCarrito = () => {
  const [items, setItems] = useState<ProductoCarrito[]>([]);

  useEffect(() => {
    const fetchCarrito = async () => {
      try {
        const res = await axios.get(`http://192.168.1.7:3000/carrito/72627e56-2f1a-41bb-89d6-72e1e37a82f2`);
        setItems(res.data);
      } catch (error) {
        console.error('Error al cargar carrito', error);
      }
    };

    fetchCarrito();
  }, []);

  const eliminarItem = async (id: string) => {
    try {
      await axios.delete(`http://192.168.1.7:3000/carrito/${id}`);
      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error al eliminar', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Carrito</Text>

      <ScrollView contentContainerStyle={styles.scroll}>
        {items.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image 
              source={{ uri: `https://via.placeholder.com/100x100/DE1484/FFFFFF?text=${item.producto.nombre.charAt(0)}` }}
              style={styles.imagen}
            />

            <View style={styles.info}>
              <Text style={styles.nombre}>{item.producto.nombre}</Text>
              <Text style={styles.descripcion}>{item.producto.descripcion}</Text>
              <Text style={styles.precio}>${parseFloat(item.precio_unitario.toString()).toFixed(2)}</Text>
              <Text style={styles.cantidad}>Cantidad: {item.cantidad}</Text>
            </View>

            <TouchableOpacity onPress={() => eliminarItem(item.id)} style={styles.botonEliminar}>
              <Icon name="trash-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PantallaCarrito;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 4,
    color: '#111',
  },
  scroll: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  imagen: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#eee',
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  nombre: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  descripcion: {
    fontSize: 13,
    color: '#777',
    marginBottom: 4,
  },
  precio: {
    fontSize: 16,
    color: '#DE1484',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  cantidad: {
    fontSize: 14,
    color: '#444',
  },
  botonEliminar: {
    backgroundColor: '#DE1484',
    padding: 6,
    borderRadius: 20,
    marginLeft: 8,
    alignSelf: 'center',
  },
});
