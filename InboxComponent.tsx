import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Svg, Path, Circle, Line, Rect, Polyline } from 'react-native-svg';

interface Message {
  name: string;
  message: string;
  time: string;
}

const InboxComponent: React.FC = () => {
  const messages: Message[] = [
    { name: 'Martin Randolph', message: "You: What's man!", time: '9:40 AM' },
    { name: 'Andrew Parker', message: 'You: Ok, thanks!', time: '9:25 AM' },
    { name: 'Karen Castillo', message: 'You: Ok, See you in To...', time: 'Fri' },
    { name: 'Maisy Humphrey', message: 'Have a good day, Maisy!', time: 'Fri' },
  ];

  const timeloxUsers = ['andy_h', 'karenne', 'zackjohn', 'kieron_d'];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity>
            <Svg width={24} height={24} viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
              <Line x1={4} x2={20} y1={12} y2={12} />
              <Line x1={4} x2={20} y1={6} y2={6} />
              <Line x1={4} x2={20} y1={18} y2={18} />
            </Svg>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Inbox</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.dollarButton}>
            <Text style={styles.dollarButtonText}>$68.00</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Svg width={20} height={20} viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
              <Path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <Path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </Svg>
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Timelox section */}
      <View style={styles.timeloxSection}>
        <Text style={styles.timeloxTitle}>timelox</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.timeloxUsers}>
          {timeloxUsers.map((name) => (
            <View key={name} style={styles.timeloxUser}>
              <View style={styles.timeloxAvatar}>
                <Text style={styles.timeloxAvatarText}>{name[0].toUpperCase()}</Text>
              </View>
              <Text style={styles.timeloxName}>{name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Message list */}
      <ScrollView style={styles.messageList}>
        {messages.map((chat, index) => (
          <View key={index} style={styles.messageItem}>
            <View style={styles.messageAvatar}>
              <Text style={styles.messageAvatarText}>{chat.name[0]}</Text>
            </View>
            <View style={styles.messageContent}>
              <Text style={styles.messageName}>{chat.name}</Text>
              <Text style={styles.messageText}>{chat.message}</Text>
            </View>
            <Text style={styles.messageTime}>{chat.time}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        {['message-circle', 'clock', 'plus-circle', 'credit-card', 'user'].map((icon) => (
          <TouchableOpacity key={icon}>
            <Svg width={24} height={24} viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
              {icon === 'message-circle' && <Path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />}
              {icon === 'clock' && (
                <>
                  <Circle cx={12} cy={12} r={10} />
                  <Polyline points="12 6 12 12 16 14" />
                </>
              )}
              {icon === 'plus-circle' && (
                <>
                  <Circle cx={12} cy={12} r={10} />
                  <Line x1={12} y1={8} x2={12} y2={16} />
                  <Line x1={8} y1={12} x2={16} y2={12} />
                </>
              )}
              {icon === 'credit-card' && (
                <>
                  <Rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
                  <Line x1={1} y1={10} x2={23} y2={10} />
                </>
              )}
              {icon === 'user' && (
                <>
                  <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <Circle cx={12} cy={7} r={4} />
                </>
              )}
            </Svg>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: 360,
    maxWidth: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  dollarButton: {
    backgroundColor: '#ec4899',
    borderRadius: 9999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 16,
    borderWidth: 1,
    borderColor: 'black',
  },
  dollarButtonText: {
    color: 'white',
    fontSize: 12,
  },
  notificationDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    backgroundColor: '#ef4444',
    borderRadius: 4,
  },
  timeloxSection: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  timeloxTitle: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
  },
  timeloxUsers: {
    flexDirection: 'row',
  },
  timeloxUser: {
    alignItems: 'center',
    marginRight: 16,
  },
  timeloxAvatar: {
    width: 32,
    height: 32,
    backgroundColor: '#e5e5e5',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeloxAvatarText: {
    fontSize: 12,
  },
  timeloxName: {
    marginTop: 4,
    fontSize: 10,
  },
  messageList: {
    flex: 1,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  messageAvatar: {
    width: 32,
    height: 32,
    backgroundColor: '#e5e5e5',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  messageAvatarText: {
    fontSize: 12,
  },
  messageContent: {
    flex: 1,
  },
  messageName: {
    fontSize: 12,
    fontWeight: '600',
  },
  messageText: {
    fontSize: 12,
    color: '#9ca3af',
  },
  messageTime: {
    fontSize: 10,
    color: '#9ca3af',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
});

export default InboxComponent;