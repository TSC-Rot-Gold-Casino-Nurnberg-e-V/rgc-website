import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach, vi } from "vitest";

process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ??= "test-recaptcha-site-key";

const installBrowserShims = () => {
  if (typeof window !== "undefined" && !window.matchMedia) {
    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      value: (query: string) => ({
        addEventListener: vi.fn(),
        addListener: vi.fn(),
        dispatchEvent: vi.fn(),
        matches: false,
        media: query,
        onchange: null,
        removeEventListener: vi.fn(),
        removeListener: vi.fn(),
      }),
    });
  }

  if (typeof globalThis.ResizeObserver === "undefined") {
    vi.stubGlobal(
      "ResizeObserver",
      class ResizeObserver {
        disconnect() {}

        observe() {}

        unobserve() {}
      },
    );
  }
};

beforeEach(installBrowserShims);

afterEach(() => {
  if (typeof document !== "undefined") {
    cleanup();
  }
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});
