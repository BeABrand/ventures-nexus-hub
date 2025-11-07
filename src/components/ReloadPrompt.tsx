import { useRegisterSW } from 'virtual:pwa-register/react';
import { useEffect } from 'react';
import { Button } from './ui/button';
import { X, RefreshCw } from 'lucide-react';

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(registration) {
      console.log('SW Registered:', registration);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  useEffect(() => {
    if (offlineReady) {
      console.log('App ready to work offline');
    }
  }, [offlineReady]);

  if (!offlineReady && !needRefresh) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-[100] max-w-md">
      <div className="bg-card border border-border rounded-lg shadow-lg p-4 animate-fade-in-up">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            {offlineReady ? (
              <div>
                <p className="font-semibold text-foreground mb-1">App ready to work offline</p>
                <p className="text-sm text-muted-foreground">
                  You can now use this app even when you're offline!
                </p>
              </div>
            ) : (
              <div>
                <p className="font-semibold text-foreground mb-1">New content available</p>
                <p className="text-sm text-muted-foreground">
                  Click reload to update to the latest version.
                </p>
              </div>
            )}
          </div>
          <button
            onClick={close}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        {needRefresh && (
          <div className="mt-3 flex gap-2">
            <Button
              onClick={() => updateServiceWorker(true)}
              size="sm"
              className="flex-1"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Reload
            </Button>
            <Button onClick={close} variant="outline" size="sm">
              Later
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReloadPrompt;
