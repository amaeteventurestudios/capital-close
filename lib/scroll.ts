export function getScrollSection(id: string): HTMLElement | null {
  if (typeof document === "undefined") return null;

  return (
    document.getElementById(id) ||
    document.querySelector<HTMLElement>(`[data-scroll-section="${id}"]`)
  );
}

export function scrollToSection(id: string) {
  const section = getScrollSection(id);
  section?.scrollIntoView({ behavior: "smooth", block: "start" });
}
