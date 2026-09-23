// @vitest-environment jsdom

import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { LiveTicker } from "./LiveTicker";

type LinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>;

vi.mock("next/link", () => ({
  default: ({ children, ...props }: LinkProps) => <a {...props}>{children}</a>,
}));

const fetchMock = vi.fn();

beforeEach(() => {
  vi.stubGlobal("fetch", fetchMock);
  fetchMock.mockReset();
});

describe("LiveTicker", () => {
  it("renders a plain ticker message without a link", async () => {
    fetchMock.mockResolvedValue({
      json: async () => ({ id: 1, text: "Training heute" }),
      ok: true,
    });

    render(<LiveTicker />);

    expect(
      await screen.findByRole("region", { name: "Liveticker" }),
    ).toHaveTextContent("Training heute");
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders external links with safe new-tab attributes", async () => {
    fetchMock.mockResolvedValue({
      json: async () => ({
        id: 2,
        link: "https://example.com/news",
        text: "Mehr Informationen",
      }),
      ok: true,
    });

    render(<LiveTicker />);

    const link = await screen.findByRole("link", {
      name: /Mehr Informationen/,
    });
    expect(link).toHaveAttribute("href", "https://example.com/news");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
