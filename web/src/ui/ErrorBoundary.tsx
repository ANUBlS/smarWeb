import { Component, type ReactNode } from 'react';
import { logger } from '../runtime/log';

/** Keeps a failing form from taking the whole shell down. */
export class ErrorBoundary extends Component<{ name: string; children: ReactNode }, { err: Error | null }> {
  state = { err: null as Error | null };
  static getDerivedStateFromError(err: Error) { return { err }; }
  componentDidCatch(err: Error, info: { componentStack?: string | null }) {
    logger.error(`${this.props.name}: render error: ${err.message}`);
    console.error(err, info.componentStack);
  }
  render() {
    if (this.state.err) {
      return (
        <div className="notice" style={{ margin: 16 }}>
          Bu pəncərənin bir hissəsi göstərilə bilmədi: {this.state.err.message}.{' '}
          <button className="v-btn" style={{ height: 24 }} onClick={() => this.setState({ err: null })}>Yenidən cəhd et</button>
        </div>
      );
    }
    return this.props.children;
  }
}
