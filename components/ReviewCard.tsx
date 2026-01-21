import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Review } from '../types';
import { Ionicons } from '@expo/vector-icons';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Ionicons key={`full-${i}`} name="star" size={16} color="#FFD700" />);
    }
    if (hasHalfStar) {
      stars.push(<Ionicons key="half" name="star-half" size={16} color="#FFD700" />);
    }
    const remainingStars = 10 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Ionicons key={`empty-${i}`} name="star-outline" size={16} color="#FFD700" />);
    }
    return stars;
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.userContainer}>
          <Ionicons name="person-circle" size={24} color="#e94560" />
          <Text style={styles.userName}>{review.userName}</Text>
        </View>
        <Text style={styles.date}>{new Date(review.date).toLocaleDateString()}</Text>
      </View>
      <View style={styles.starsContainer}>
        {renderStars(review.rating)}
        <Text style={styles.ratingText}>{review.rating.toFixed(1)}/10</Text>
      </View>
      <Text style={styles.comment}>{review.comment}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 8,
  },
  date: {
    fontSize: 12,
    color: '#94a3b8',
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  ratingText: {
    fontSize: 14,
    color: '#FFD700',
    marginLeft: 8,
    fontWeight: 'bold',
  },
  comment: {
    fontSize: 14,
    color: '#cbd5e1',
    lineHeight: 20,
  },
});
