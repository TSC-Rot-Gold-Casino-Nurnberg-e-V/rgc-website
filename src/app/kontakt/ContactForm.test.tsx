// @vitest-environment jsdom

import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from "./ContactForm";

type LinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>;

vi.mock("next/link", () => ({
  default: ({ children, ...props }: LinkProps) => <a {...props}>{children}</a>,
}));

const fetchMock = vi.fn();
const executeMock = vi.fn();

const fillValidForm = async () => {
  const user = userEvent.setup();
  render(<ContactForm />);
  await user.type(screen.getByLabelText("Name *"), "Ada Lovelace");
  await user.type(screen.getByLabelText("E-Mail *"), "ada@example.com");
  await user.type(screen.getByLabelText("Betreff *"), "Eine Frage");
  await user.type(screen.getByLabelText("Nachricht *"), "Hallo aus dem Test.");
  await user.click(screen.getByRole("checkbox"));
  return user;
};

beforeEach(() => {
  vi.stubGlobal("fetch", fetchMock);
  vi.stubGlobal("grecaptcha", { execute: executeMock });
  fetchMock.mockReset();
  executeMock.mockReset();
  executeMock.mockResolvedValue("test-recaptcha-token");
});

describe("ContactForm", () => {
  it("shows validation errors when submitted empty", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: "Nachricht senden" }));

    expect(
      await screen.findAllByText("Dieses Feld ist ein Pflichtfeld"),
    ).toHaveLength(4);
    expect(
      screen.getByText("Bitte akzeptiere unsere Datenschutzerklärung"),
    ).toBeInTheDocument();
  });

  it("submits valid data and shows the confirmation dialog", async () => {
    fetchMock.mockResolvedValue({ ok: true });
    const user = await fillValidForm();

    await user.click(screen.getByRole("button", { name: "Nachricht senden" }));

    expect(executeMock).toHaveBeenCalledWith("test-recaptcha-site-key", {
      action: "submit",
    });
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/contact-inquiry",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          name: "Ada Lovelace",
          email: "ada@example.com",
          subject: "Eine Frage",
          message: "Hallo aus dem Test.",
          recaptchaToken: "test-recaptcha-token",
        }),
      }),
    );
    expect(await screen.findByRole("dialog")).toHaveTextContent(
      "Anfrage erhalten",
    );
  });

  it("shows the error dialog when the request fails", async () => {
    fetchMock.mockResolvedValue({ ok: false });
    const user = await fillValidForm();

    await user.click(screen.getByRole("button", { name: "Nachricht senden" }));

    expect(await screen.findByRole("dialog")).toHaveTextContent(
      "Unerwarteter Fehler",
    );
  });
});
