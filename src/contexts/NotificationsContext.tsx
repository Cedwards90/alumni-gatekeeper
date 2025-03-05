
import React, { createContext, useContext, useState, useEffect } from 'react';

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  timestamp: Date;
  read: boolean;
}

interface NotificationsContextType {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  removeNotification: (id: string) => void;
  clearAllNotifications: () => void;
}

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationsProvider');
  }
  return context;
};

export const NotificationsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  // Load notifications from localStorage on mount
  useEffect(() => {
    try {
      const savedNotifications = localStorage.getItem('alumni_notifications');
      if (savedNotifications) {
        const parsedNotifications = JSON.parse(savedNotifications).map((notification: any) => ({
          ...notification,
          timestamp: new Date(notification.timestamp)
        }));
        setNotifications(parsedNotifications);
      }
    } catch (error) {
      console.error('Error loading notifications:', error);
    }
  }, []);

  // Save notifications to localStorage when they change
  useEffect(() => {
    try {
      localStorage.setItem('alumni_notifications', JSON.stringify(notifications));
      const count = notifications.filter(n => !n.read).length;
      setUnreadCount(count);
    } catch (error) {
      console.error('Error saving notifications:', error);
    }
  }, [notifications]);

  // Mock real-time updates (in a real app, this would be a WebSocket connection)
  useEffect(() => {
    const mockUpdates = () => {
      const updates = [
        { title: 'Request Review', message: 'Your alumni support request has been reviewed.', type: 'info' as NotificationType },
        { title: 'Documentation Needed', message: 'Please provide additional documentation for your request.', type: 'warning' as NotificationType },
        { title: 'Appointment Scheduled', message: 'A career advisor has scheduled a meeting with you.', type: 'success' as NotificationType },
        { title: 'Request Approved', message: 'Your alumni request has been approved!', type: 'success' as NotificationType }
      ];

      const randomUpdate = updates[Math.floor(Math.random() * updates.length)];
      addNotification(randomUpdate);
    };

    // Simulate receiving a notification every 30 seconds (only if there are less than 5 notifications)
    const interval = setInterval(() => {
      if (notifications.length < 5) {
        mockUpdates();
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [notifications.length]);

  const addNotification = (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
    const newNotification: Notification = {
      ...notification,
      id: `notification-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      timestamp: new Date(),
      read: false
    };

    setNotifications(prev => [newNotification, ...prev]);
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <NotificationsContext.Provider value={{
      notifications,
      unreadCount,
      addNotification,
      markAsRead,
      markAllAsRead,
      removeNotification,
      clearAllNotifications
    }}>
      {children}
    </NotificationsContext.Provider>
  );
};
