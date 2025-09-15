import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { NavBar } from './components/navigation/NavBar';
import { Home } from './pages/Home';
import { StreamerStudio } from './pages/StreamerStudio';
import { StreamInterface } from './pages/StreamInterface';
import { ActiveStreamers } from './pages/ActiveStreamers';
import { Recording } from './pages/Recording';
import { DeviceFrame } from './components/device/DeviceFrame';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'studio' | 'active' | 'stream' | 'recording'>('home');
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home />;
      case 'studio':
        return <StreamerStudio />;
      case 'active':
        return <ActiveStreamers />;
      case 'stream':
        return <StreamInterface />;
      case 'recording':
        return <Recording />;
    }
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-black">
      <DeviceFrame>
        <NavBar currentView={currentView} onViewChange={setCurrentView} />
        {renderView()}
      </DeviceFrame>
    </div>
  );
}