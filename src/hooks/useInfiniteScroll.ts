import { useCallback, useEffect, useRef, useState } from "react";

interface UseInfiniteScrollOptions {
  threshold?: number;
  rootMargin?: string;
}

interface UseInfiniteScrollReturn {
  isLoading: boolean;
  error: Error | null;
  observerRef: (node: Element | null) => void;
}

export function useInfiniteScroll(
  onLoadMore: () => Promise<void>,
  options: UseInfiniteScrollOptions = {}
): UseInfiniteScrollReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<Element | null>(null);

  const handleObserver = useCallback(
    async (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && !isLoading) {
        setIsLoading(true);
        try {
          await onLoadMore();
        } catch (err) {
          setError(
            err instanceof Error ? err : new Error("Failed to load more items")
          );
        } finally {
          setIsLoading(false);
        }
      }
    },
    [onLoadMore, isLoading]
  );

  const observerRef = useCallback(
    (node: Element | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(handleObserver, {
        threshold: options.threshold || 0.5,
        rootMargin: options.rootMargin || "100px",
      });
      if (node) {
        lastElementRef.current = node;
        observer.current.observe(node);
      }
    },
    [handleObserver, isLoading, options.rootMargin, options.threshold]
  );

  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return {
    isLoading,
    error,
    observerRef,
  };
}
