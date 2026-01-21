import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MovieCard } from '../components/MovieCard';
import { getTopMoviesOfMonth, getTopMoviesOfYear } from '../data/mockData';

export default function TopMoviesScreen() {
  const router = useRouter();
  const [period, setPeriod] = useState<'month' | 'year'>('month');

  const topMovies = period === 'month' ? getTopMoviesOfMonth() : getTopMoviesOfYear();

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, period === 'month' && styles.activeToggle]}
          onPress={() => setPeriod('month')}
        >
          <Text style={[styles.toggleText, period === 'month' && styles.activeToggleText]}>
            Month
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, period === 'year' && styles.activeToggle]}
          onPress={() => setPeriod('year')}
        >
          <Text style={[styles.toggleText, period === 'year' && styles.activeToggleText]}>
            Year
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={topMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.movieContainer}>
            <View style={styles.rankBadge}>
              <Text style={styles.rankText}>#{index + 1}</Text>
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
  toggleContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#16213e',
    alignItems: 'center',
  },
  activeToggle: {
    backgroundColor: '#e94560',
  },
  toggleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#94a3b8',
  },
  activeToggleText: {
    color: '#ffffff',
  },
  listContent: {
    padding: 16,
    paddingTop: 0,
  },
  movieContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rankBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e94560',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  rankText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  movieCard: {
    flex: 1,
  },
});
