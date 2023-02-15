import sanitizeHtml from "sanitize-html";

// TODO prüfen, welche Tags & Attribute erlaubt werden sollten

export function sanitizeHTMLField(fieldToBeSanatized: string) {
  return sanitizeHtml(fieldToBeSanatized, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
  });
}
