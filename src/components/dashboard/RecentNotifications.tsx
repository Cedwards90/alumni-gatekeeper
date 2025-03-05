
import React from 'react';
import { useNotifications } from '@/contexts/NotificationsContext';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const RecentNotifications: React.FC = () => {
  const { notifications, markAsRead } = useNotifications();
  const navigate = useNavigate();
  
  // Get the 3 most recent notifications
  const recentNotifications = notifications.slice(0, 3);
  
  if (recentNotifications.length === 0) {
    return null;
  }
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Bell className="text-evolve-600" size={18} />
          <h3 className="font-medium">Recent Updates</h3>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-sm"
          onClick={() => navigate('/alumni-request')}
        >
          View All
        </Button>
      </div>
      
      <div className="space-y-3">
        {recentNotifications.map(notification => (
          <div 
            key={notification.id}
            className={`p-3 rounded-md ${notification.read ? 'bg-gray-50' : 'bg-evolve-50 border-l-2 border-evolve-500'}`}
            onClick={() => markAsRead(notification.id)}
          >
            <h4 className="text-sm font-medium mb-1">{notification.title}</h4>
            <p className="text-sm text-gray-600">{notification.message}</p>
            <p className="text-xs text-gray-400 mt-1">
              {notification.timestamp.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentNotifications;
