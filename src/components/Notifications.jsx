import { useState } from "react";

const initialNotifications = [
  { id: 1, message: "New message from Rahul", read: false },
  { id: 2, message: "Your interview is tomorrow", read: false },
  { id: 3, message: "You have a new connection request", read: true },
  { id: 4, message: "Your application was viewed", read: false },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((item) => {
        if (item.id === id) {
          return { ...item, read: true };
        }
        return item;
      }),
    );
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((item) => {
        if (item.read === false) {
          return { ...item, read: true };
        }
        return item;
      }),
    );
  };

  const clearReadNotifications = () => {
    setNotifications(
      notifications.filter((item) => {
        return item.read === false;
      }),
    );
  };

  return (
    <div>
      <div>
        count : {notifications.filter((item) => item.read === false).length}
      </div>
      <div>
        {notifications.map((item) => (
          <div>
            {!item.read && "●"}
            {item.id} {item.message}{" "}
            <button onClick={() => markAsRead(item.id)}>
              {item.read ? "Read" : "unread"}
            </button>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => markAllAsRead()}>Mark All As Read</button>
        <button onClick={() => clearReadNotifications()}>Clear All Read</button>
      </div>
    </div>
  );
};

export default Notifications;
