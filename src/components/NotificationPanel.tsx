"use client";

import { useEffect, useState } from "react";

export default function NotificationPanel() {
  const [notifications, setNotifications] =
    useState<any[]>([]);

  useEffect(() => {
    fetch("/api/notifications")
      .then((res) => res.json())
      .then(setNotifications);
  }, []);

  return (
    <div className="bg-zinc-900 p-4 rounded-xl">
      <h2 className="font-bold mb-2">
        Notifications
      </h2>

      {notifications.map((n) => (
        <div key={n.id}>
          {n.message}
        </div>
      ))}
    </div>
  );
}