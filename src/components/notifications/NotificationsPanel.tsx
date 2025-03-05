
import React from 'react';
import { useNotifications } from '@/contexts/NotificationsContext';
import NotificationItem from './NotificationItem';
import { Button } from '@/components/ui/button';
import { Bell, Check } from 'lucide-react';

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationsPanel: React.FC<NotificationsPanelProps> = ({ isOpen, onClose }) => {
  const { 
    notifications, 
    markAsRead, 
    markAllAsRead, 
    removeNotification, 
    clearAllNotifications 
  } = useNotifications();

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-evolve-600" />
          <h3 className="font-medium">Notifications</h3>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 flex items-center gap-1 text-xs"
            onClick={markAllAsRead}
          >
            <Check className="h-4 w-4" />
            Mark all read
          </Button>
        </div>
      </div>
      <div className="max-h-[400px] overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <NotificationItem 
              key={notification.id} 
              notification={notification}
              onMarkAsRead={markAsRead}
              onRemove={removeNotification}
            />
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">
            <p>No notifications</p>
          </div>
        )}
      </div>
      {notifications.length > 0 && (
        <div className="p-3 border-t bg-gray-50">
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full text-xs text-gray-600"
            onClick={clearAllNotifications}
          >
            Clear all notifications
          </Button>
        </div>
      )}
    </div>
  );
};

export default NotificationsPanel;
