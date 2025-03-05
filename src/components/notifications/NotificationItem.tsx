
import React from 'react';
import { Bell, CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Notification, NotificationType } from '@/contexts/NotificationsContext';
import { cn } from '@/lib/utils';

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
  onRemove: (id: string) => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onMarkAsRead,
  onRemove
}) => {
  const getIcon = (type: NotificationType) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-amber-500" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'info':
      default:
        return <Info className="h-5 w-5 text-evolve-500" />;
    }
  };

  const handleClick = () => {
    if (!notification.read) {
      onMarkAsRead(notification.id);
    }
  };

  return (
    <div 
      className={cn(
        "p-4 border-b last:border-b-0 flex justify-between gap-3 transition-colors",
        notification.read ? "bg-white" : "bg-evolve-50"
      )}
      onClick={handleClick}
    >
      <div className="flex gap-3">
        <div className="shrink-0 mt-1">
          {getIcon(notification.type)}
        </div>
        <div>
          <h4 className="text-sm font-medium">{notification.title}</h4>
          <p className="text-sm text-gray-600">{notification.message}</p>
          <p className="text-xs text-gray-400 mt-1">
            {notification.timestamp.toLocaleString()}
          </p>
        </div>
      </div>
      <Button 
        variant="ghost" 
        size="sm" 
        className="shrink-0 h-8 w-8 p-0 rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(notification.id);
        }}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Remove</span>
      </Button>
    </div>
  );
};

export default NotificationItem;
