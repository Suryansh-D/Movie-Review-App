import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { MovieCard } from '../components/MovieCard';
import { getMostAnticipatedMovies } from '../data/mockData';

export default function AnticipatedScreen() {
  const router = useRouter();
  const anticipatedMovies = getMostAnticipatedMovies();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Most Anticipated Movies</Text>
        <Text style={styles.subtitle}>Based on audience hype and anticipation</Text>
      </View>
      <FlatList
        data={anticipatedMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.movieContainer}>
            <View style={styles.anticipationBadge}>
              <Text style={styles.anticipationText}>{item.anticipation}%</Text>
            </View>
            <View style={styles.movieCard}>
              <MovieCard
                movie={item}
                onPress={() => router.push(`/movie/${item.id}`)}
              />
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    padding: 16,
    paddingBottom: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#94a3b8',
  },
  listContent: {
    padding: 16,
    paddingTop: 8,
  },
  movieContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  anticipationBadge: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0f3460',
    borderWidth: 2,
    borderColor: '#e94560',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  anticipationText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e94560',
  },
  movieCard: {
    flex: 1,
  },
});
