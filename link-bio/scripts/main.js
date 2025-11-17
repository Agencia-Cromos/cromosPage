function typeText(element, text, options) {
  const speed = options?.speed ?? 45;
  const delay = options?.delay ?? 0;
  const append = options?.append ?? false;

  return new Promise((resolve) => {
    if (!element) {
      resolve();
      return;
    }

    const baseText = append ? element.textContent ?? "" : "";
    element.textContent = baseText;

    setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        element.textContent = baseText + text.slice(0, index + 1);
        index += 1;
        if (index >= text.length) {
          clearInterval(interval);
          resolve();
        }
      }, speed);
    }, delay);
  });
}

async function startHeroTyping() {
  const main = document.querySelector(".js-type-main");
  const sub = document.querySelector(".js-type-sub");

  const mainText = main?.getAttribute("data-text") ?? "";
  const subText = sub?.getAttribute("data-text") ?? "";

  await typeText(main, mainText, { speed: 55, delay: 80 });
  await typeText(sub, subText, { speed: 28, delay: 120 });
}

function scheduleLinksReveal(startDelayMs = 600) {
  const links = document.querySelector(".links");

  setTimeout(() => {
    if (links) {
      links.classList.add("links--visible");
    }
  }, startDelayMs);
}

async function runIntro() {
  const intro = document.querySelector(".code-intro");
  const codeElement = document.querySelector(".js-code-line");
  const page = document.querySelector(".page-content");

  if (!intro || !codeElement || !page) {
    if (page) {
      page.classList.add("page-content--visible");
    }
    await startHeroTyping();
    scheduleLinksReveal();
    return;
  }

  const lines = [
    "const profile = {",
    "  name: 'Natã Spitz Alves',",
    "  role: 'Dev Web & Mobile',",
    "  stack: ['UX/UI', 'IA aplicada'],",
    "  links: ['Agência', 'Portfólio', 'WhatsApp', 'LinkedIn', 'TikTok']",
    "};",
    "",
    "renderLinkBio(profile);",
  ];

  // Digita o "código" linha a linha
  // eslint-disable-next-line no-restricted-syntax
  for (let i = 0; i < lines.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await typeText(codeElement, (i === 0 ? "" : "\n") + lines[i], {
      speed: 32,
      delay: i === 0 ? 260 : 120,
      append: true,
    });
  }

  setTimeout(() => {
    intro.classList.add("code-intro--hidden");
    page.classList.add("page-content--visible");
    startHeroTyping().catch(() => {});
    scheduleLinksReveal(500);
  }, 420);
}

document.addEventListener("DOMContentLoaded", () => {
  runIntro().catch(() => {
    const intro = document.querySelector(".code-intro");
    const page = document.querySelector(".page-content");
    if (intro) intro.classList.add("code-intro--hidden");
    if (page) page.classList.add("page-content--visible");
    startHeroTyping().catch(() => {});
    scheduleLinksReveal(400);
  });
});
