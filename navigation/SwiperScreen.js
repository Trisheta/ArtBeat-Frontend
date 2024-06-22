import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Animated, TouchableOpacity, Alert } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

// Import local images
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';
import card5 from '../assets/card5.jpg';
import card6 from '../assets/card6.jpg';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

// Define the cards array with imported images and captions
const cards = [
  { id: 1, image: card1, caption: 'A beautiful sunrise' },
  { id: 2, image: card2, caption: 'Exploring the mountains' },
  { id: 3, image: card3, caption: 'City lights at night' },
  { id: 4, image: card4, caption: 'Calm beach vibes' },
  { id: 5, image: card5, caption: 'Lush green forest' },
  { id: 6, image: card6, caption: 'Starry night sky' },
];

// Define emojis with their respective icons
const emojis = {
  left: { icon: '🙁', position: { left: 10, top: 10 } },
  right: { icon: '😍', position: { right: 10, top: 10 } },
};

// Card component to display image, caption, and comment icon
const Card = ({ image, emoji, caption, animatedOpacity }) => (
  <Animated.View style={[styles.card, { opacity: animatedOpacity }]}>
    <Image source={image} style={styles.image} resizeMode="cover" />
    {emoji && (
      <View style={[styles.emojiOverlay, emoji.position]}>
        <Text style={styles.emoji}>{emoji.icon}</Text>
      </View>
    )}
    <View style={styles.textContainer}>
      <Text style={styles.caption}>{caption}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="chatbubble-ellipses-outline" size={28} color="#000" style={styles.commentIcon} />
      </TouchableOpacity>
    </View>
  </Animated.View>
);

const SwiperScreen = () => {
  const [currentEmoji, setCurrentEmoji] = useState(null);
  const animatedOpacity = useRef(new Animated.Value(1)).current;

  let [fontsLoaded] = useFonts({
    'Pacifico-Regular': require('../assets/Pacifico-Regular.ttf'),
    'Quicksand-Regular': require('../assets/Quicksand-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleSwiped = (direction) => {
    setCurrentEmoji(direction);

    // Reset opacity
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 100, // Adjust duration here (e.g., 100ms for faster display)
      useNativeDriver: true,
    }).start();

    // Display message on swiped top
    if (direction === 'top') {
      Alert.alert('Yayyy!', 'Connection sent successfully');
    }
  };

  const handleSwiping = (cardIndex, x) => {
    const opacity = 1 - Math.min(Math.abs(x) / (width / 2), 1);
    animatedOpacity.setValue(opacity);
  };

  return (
    <View style={styles.container}>
      <Swiper
        cards={cards}
        renderCard={(card) => (
          <Card key={card.id} image={card.image} emoji={emojis[currentEmoji]} caption={card.caption} animatedOpacity={animatedOpacity} />
        )}
        onSwipedLeft={() => handleSwiped('left')}
        onSwipedRight={() => handleSwiped('right')}
        onSwipedTop={() => handleSwiped('top')}
        onSwipedBottom={() => handleSwiped('bottom')}
        onSwiping={(cardIndex, x) => handleSwiping(cardIndex, x)}
        backgroundColor={'#f8f9fa'}
        stackSize={3}
        stackSeparation={15}
        cardHorizontalMargin={10} // Adjusted card margin
        containerStyle={styles.swiper} // Centering the cards
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4e1', // Light pinkish background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: width * 0.8,
    height: height * 0.65, // Reduced card height
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ffd1dc', // Light pastel border color
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: '75%', // Adjusted image height
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  caption: {
    fontSize: 18, // Adjusted caption font size
    fontFamily: 'Quicksand-Regular', // Modern font for caption
    color: '#333',
    textAlign: 'center',
    marginBottom: 10, // Space between caption and comment icon
  },
  commentIcon: {
    color: '#000', // Black color for comment icon
  },
  emojiOverlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  emoji: {
    fontSize: 40,
    color: '#000',
  },
  swiper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SwiperScreen;
