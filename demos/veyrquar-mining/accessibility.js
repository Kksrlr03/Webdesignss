// Preserve the original visuals while making its div-based links keyboard operable.
fetch('./ui-state.json').then(response => response.json()).then(({links}) => {
  const entries = Object.entries(links).sort(([a], [b]) => {
    const first = document.getElementById(a), second = document.getElementById(b);
    return first?.contains(second) ? -1 : second?.contains(first) ? 1 : 0;
  });
  for (const [id, link] of entries) {
    const element = document.getElementById(id);
    if (!element || link.type !== 'external') continue;
    const ancestor = element.parentElement?.closest('[role="link"]');
    if (ancestor) continue;
    element.setAttribute('role', 'link');
    element.setAttribute('tabindex', '0');
    if (!element.textContent.trim()) element.setAttribute('aria-label', new URL(link.url).hostname);
    element.addEventListener('keydown', event => {
      if (event.key === 'Enter') { event.preventDefault(); element.click(); }
    });
  }
}).catch(() => {});
