
import DOMPurify from "dompurify";

export function sanitizeHtml(dirty) {
  if (typeof dirty !== "string") {
    return "";
  }

  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [
      "b",
      "strong",
      "i",
      "em",
      "u",
      "p",
      "br",
      "ul",
      "ol",
      "li",
      "a",
    ],
    ALLOWED_ATTR: ["href", "title"],
    ALLOW_DATA_ATTR: false,
  });
}
