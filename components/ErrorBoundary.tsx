import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

// Fixed: Explicitly using React.Component to ensure TypeScript correctly recognizes the inheritance.
export class ErrorBoundary extends React.Component<Props, State> {
  // Fixed: Removed 'override' modifier which was causing issues because inheritance was not being properly detected in this environment.
  public state: State = {
    hasError: false
  };

  // Fixed: Initializing props via constructor correctly calls super for class components.
  constructor(props: Props) {
    super(props);
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    // Fixed: 'this.state' is now correctly recognized as an inherited member.
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 text-center">
          <div className="bg-red-100 p-4 rounded-full mb-4 text-red-600">
            <AlertTriangle size={48} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Ops! Algo deu errado.</h1>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            Não foi possível carregar o conteúdo solicitado. Isso pode ser uma falha temporária de conexão ou um erro interno.
          </p>
          
          {/* Fixed: Accessing error from state via this.state */}
          {this.state.error && (
             <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm text-left mb-8 w-full max-w-md overflow-hidden">
                <p className="text-[10px] text-red-500 font-mono break-all">
                   Erro: {this.state.error.toString()}
                </p>
             </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => window.location.reload()}
              className="bg-brand-blue hover:bg-brand-hover text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg"
            >
              <RefreshCw size={18} /> Tentar Novamente
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-white border border-gray-200 text-brand-dark hover:bg-gray-50 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all"
            >
              <Home size={18} /> Início
            </button>
          </div>
        </div>
      );
    }

    // Fixed: 'this.props' is now correctly recognized as an inherited member.
    return this.props.children;
  }
}