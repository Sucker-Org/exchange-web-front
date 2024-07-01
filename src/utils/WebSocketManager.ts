class WebSocketManager {
  private url: string;
  private websocket: WebSocket | null;
  private reconnectInterval: number;
  private maxReconnectInterval: number;

  constructor(url: string) {
    this.url = url;
    this.websocket = null;
    this.reconnectInterval = 1000;
    this.maxReconnectInterval = 30000;
    this.connect();
  }

  private connect() {
    this.websocket = new WebSocket(this.url);

    this.websocket.onopen = () => {
      console.log("WebSocket连接已建立");
      this.reconnectInterval = 1000;
    };

    this.websocket.onmessage = event => {
      console.log("收到消息:", event.data);
    };

    this.websocket.onclose = () => {
      console.log("WebSocket连接已关闭，尝试重新连接...");
      this.reconnect();
    };

    this.websocket.onerror = error => {
      console.error("WebSocket发生错误:", error);
      this.websocket?.close();
    };
  }

  private reconnect() {
    setTimeout(() => {
      this.connect();
    }, this.reconnectInterval);
    this.reconnectInterval = Math.min(this.reconnectInterval * 2, this.maxReconnectInterval);
  }

  public sendMessage(message: string) {
    if (this.websocket?.readyState === WebSocket.OPEN) {
      this.websocket.send(message);
    } else {
      console.error("WebSocket未连接，无法发送消息");
    }
  }
}

export default WebSocketManager;

/* 
// src/components/MyComponent.tsx
import React, { useEffect } from 'react';
import WebSocketManager from '../utils/WebSocketManager';

const MyComponent: React.FC = () => {
  useEffect(() => {
    const wsManager = new WebSocketManager('ws://your-websocket-url');

    // 发送消息示例
    wsManager.sendMessage('Hello, WebSocket!');

    return () => {
      // 组件卸载时清理资源
      wsManager.sendMessage('Goodbye, WebSocket!');
    };
  }, []);

  return (
    <div>
      <h1>My WebSocket Component</h1>
    </div>
  );
};

export default MyComponent;

*/
