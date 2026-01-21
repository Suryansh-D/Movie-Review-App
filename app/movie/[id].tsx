import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { movies, getReviewsForMovie, addReview } from '../../data/mockData';
import { ReviewCard } from '../../components/ReviewCard';
import { Review } from '../../types';

export default function MovieDetailScreen() {
  const { id } = useLocalSearchParams();
  const movie = movies.find((m) => m.id === id);
  const [reviews, setReviews] = useState(getReviewsForMovie(id as string));
  const [modalVisible, setModalVisible] = useState(false);
  const [newReview, setNewReview] = useState({
    userName: '',
    rating: 5,
    comment: '',
  });

  if (!movie) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Movie not found</Text>
      </View>
    );
  }

  const handleSubmitReview = () => {
    if (!newReview.userName.trim() || !newReview.comment.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const review: Review = {
      id: `r${Date.now()}`,
      movieId: movie.id,
      userName: newReview.userName,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0],
    };

    addReview(review);
    setReviews([review, ...reviews]);
    setModalVisible(false);
    setNewReview({ userName: '', rating: 5, comment: '' });
    Alert.alert('Success', 'Review submitted successfully!');
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: movie.title,
          headerStyle: { backgroundColor: '#0f3460' },
          headerTintColor: '#ffffff',
        }}
      />
      <ScrollView style={styles.container}>
        <Image source={{ uri: movie.poster }} style={styles.poster} />
        
        <View style={styles.content}>
          <View style={styles.titleSection}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>({movie.year})</Text>
          </View>

          <View style={styles.ratingSection}>
            <Ionicons name="star" size={24} color="#FFD700" />
            <Text style={styles.rating}>{movie.rating.toFixed(1)}/10</Text>
          </View>

          <View style={styles.genreContainer}>
            {movie.genre.map((g, index) => (
              <Text key={index} style={styles.genreTag}>{g}</Text>
            ))}
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Details</Text>
            <InfoRow icon="person" label="Director" value={movie.director} />
            <InfoRow icon="calendar" label="Release" value={movie.releaseDate} />
            <InfoRow icon="cash" label="Budget" value={movie.budget} />
            <InfoRow icon="trending-up" label="Collection" value={movie.collection} />
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Watch On</Text>
            <View style={styles.ottContainer}>
              {movie.ott.map((platform, index) => (
                <View key={index} style={styles.ottBadge}>
                  <Ionicons name="tv" size={16} color="#ffffff" />
                  <Text style={styles.ottText}>{platform}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Cast</Text>
            <Text style={styles.castText}>{movie.cast.join(', ')}</Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Synopsis</Text>
            <Text style={styles.synopsis}>{movie.synopsis}</Text>
          </View>

          <View style={styles.reviewsSection}>
            <View style={styles.reviewsHeader}>
              <Text style={styles.sectionTitle}>Reviews ({reviews.length})</Text>
              <TouchableOpacity
                style={styles.addReviewButton}
                onPress={() => setModalVisible(true)}
              >
                <Ionicons name="add-circle" size={24} color="#e94560" />
                <Text style={styles.addReviewText}>Add Review</Text>
              </TouchableOpacity>
            </View>

            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </View>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add Your Review</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={24} color="#ffffff" />
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Your Name"
              placeholderTextColor="#94a3b8"
              value={newReview.userName}
              onChangeText={(text) => setNewReview({ ...newReview, userName: text })}
            />

            <View style={styles.ratingInput}>
              <Text style={styles.inputLabel}>Rating: {newReview.rating}/10</Text>
              <View style={styles.ratingButtons}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <TouchableOpacity
                    key={num}
                    style={[
                      styles.ratingButton,
                      newReview.rating === num && styles.ratingButtonActive,
                    ]}
                    onPress={() => setNewReview({ ...newReview, rating: num })}
                  >
                    <Text
                      style={[
                        styles.ratingButtonText,
                        newReview.rating === num && styles.ratingButtonTextActive,
                      ]}
                    >
                      {num}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TextInput
              style={[styles.input, styles.commentInput]}
              placeholder="Write your review..."
              placeholderTextColor="#94a3b8"
              multiline
              numberOfLines={4}
              value={newReview.comment}
              onChangeText={(text) => setNewReview({ ...newReview, comment: text })}
            />

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmitReview}>
              <Text style={styles.submitButtonText}>Submit Review</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const InfoRow = ({ icon, label, value }: { icon: any; label: string; value: string }) => (
  <View style={styles.infoRow}>
    <View style={styles.infoLabel}>
      <Ionicons name={icon} size={18} color="#e94560" />
      <Text style={styles.infoLabelText}>{label}:</Text>
    </View>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  errorContainer: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: '#ffffff',
  },
  poster: {
    width: '100%',
    height: 400,
  },
  content: {
    padding: 16,
  },
  titleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginRight: 8,
  },
  year: {
    fontSize: 20,
    color: '#94a3b8',
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rating: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginLeft: 8,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
  },
  genreTag: {
    backgroundColor: '#0f3460',
    color: '#e94560',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    fontSize: 14,
    marginRight: 8,
    marginBottom: 8,
    fontWeight: '600',
  },
  infoSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoLabelText: {
    fontSize: 16,
    color: '#94a3b8',
    marginLeft: 8,
  },
  infoValue: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },
  ottContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  ottBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#16213e',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  ottText: {
    fontSize: 14,
    color: '#ffffff',
    marginLeft: 6,
    fontWeight: '600',
  },
  castText: {
    fontSize: 16,
    color: '#cbd5e1',
    lineHeight: 24,
  },
  synopsis: {
    fontSize: 16,
    color: '#cbd5e1',
    lineHeight: 24,
  },
  reviewsSection: {
    marginTop: 8,
  },
  reviewsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  addReviewButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addReviewText: {
    fontSize: 16,
    color: '#e94560',
    marginLeft: 4,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#16213e',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  input: {
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 12,
    fontWeight: '600',
  },
  ratingInput: {
    marginBottom: 16,
  },
  ratingButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  ratingButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingButtonActive: {
    backgroundColor: '#e94560',
  },
  ratingButtonText: {
    fontSize: 16,
    color: '#94a3b8',
    fontWeight: 'bold',
  },
  ratingButtonTextActive: {
    color: '#ffffff',
  },
  commentInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#e94560',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
