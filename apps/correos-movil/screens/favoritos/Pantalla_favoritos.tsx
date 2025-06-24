import React, { useEffect, useState } from 'react';
import {
  Alert,
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

type Favorito = {
  id: string;
  nombre: string;
  imagen_url: string;
  descripcion: string;
};

type Props = {
  navigation: {
    goBack: () => void;
    navigate: (screen: string, params?: any) => void;
  };
};

const PantallaFavoritos: React.FC<Props> = ({ navigation }) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(50));

  const [favoritos, setFavoritos] = useState<Favorito[]>([]); // Estado inicial vacío

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  useEffect(() => {
    // Aquí irá el fetch del backend
    // Ejemplo:
    // axios.get('http://tu-servidor/favoritos/usuario-id')
    //   .then(response => setFavoritos(response.data))
    //   .catch(error => console.error(error));
  }, []);

  const eliminarFavorito = (id: string) => {
    Alert.alert(
      'Eliminar favorito',
      '¿Deseas eliminar este producto de tus favoritos?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            setFavoritos(prev => prev.filter(f => f.id !== id));
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Favoritos</Text>
        <View style={styles.itemCount}>
          <Text style={styles.itemCountText}>{favoritos.length}</Text>
        </View>
      </View>

      <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        {favoritos.length === 0 ? (
          <View style={styles.empty}>
            <Icon name="favorite-border" size={80} color="#ddd" />
            <Text style={styles.emptyText}>No tienes productos favoritos</Text>
          </View>
        ) : (
          <ScrollView style={styles.list}>
            {favoritos.map((item, index) => (
              <Animated.View key={item.id} style={styles.item}>
                <Image source={{ uri: item.imagen_url }} style={styles.image} />
                <View style={styles.details}>
                  <Text style={styles.name}>{item.nombre}</Text>
                  <Text style={styles.desc}>{item.descripcion}</Text>
                </View>
                <TouchableOpacity onPress={() => eliminarFavorito(item.id)} style={styles.trash}>
                  <Icon name="delete" size={20} color="#DE1484" />
                </TouchableOpacity>
              </Animated.View>
            ))}
          </ScrollView>
        )}
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 2,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  itemCount: {
    backgroundColor: '#DE1484',
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  itemCountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
  list: {
    padding: 16,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 12,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 1,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#eee',
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: '#333',
  },
  desc: {
    fontSize: 12,
    color: '#666',
  },
  trash: {
    padding: 8,
  },
});

export default PantallaFavoritos;
