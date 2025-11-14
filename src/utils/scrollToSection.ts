export function scrollToSection(sectionId: string) {
  if (typeof window === "undefined") {
    return;
  }

  const target = document.getElementById(sectionId);
  if (!target) {
    return;
  }

  const header = document.querySelector<HTMLElement>('[data-site-header="true"]');
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
  const offset = Math.max(targetPosition - headerHeight, 0);

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
}
