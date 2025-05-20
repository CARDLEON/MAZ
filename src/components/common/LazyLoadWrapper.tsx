import React, { Suspense } from 'react';

interface LoadingProps {
  message?: string;
}

const DefaultLoading: React.FC<LoadingProps> = ({ message = 'Cargando...' }) => (
  <div className="flex items-center justify-center min-h-[200px] w-full">
    <div className="animate-pulse flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600">{message}</p>
    </div>
  </div>
);

interface ErrorBoundaryProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorBoundaryProps> = ({ error, resetErrorBoundary }) => (
  <div className="flex flex-col items-center justify-center min-h-[200px] w-full">
    <p className="text-red-600 mb-4">Algo salió mal:</p>
    <pre className="text-sm text-red-500 mb-4">{error.message}</pre>
    <button
      onClick={resetErrorBoundary}
      className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
    >
      Intentar de nuevo
    </button>
  </div>
);

interface LazyLoadWrapperProps {
  children: React.ReactNode;
  loadingMessage?: string;
}

export const LazyLoadWrapper: React.FC<LazyLoadWrapperProps> = ({
  children,
  loadingMessage,
}) => {
  return (
    <Suspense fallback={<DefaultLoading message={loadingMessage} />}>
      {children}
    </Suspense>
  );
}; 