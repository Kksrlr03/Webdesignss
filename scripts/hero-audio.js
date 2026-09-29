(() => {
  const button = document.getElementById('hero-audio-toggle');
  const audio = document.getElementById('hero-studio-audio');
  const state = document.getElementById('hero-audio-state');
  if (!button || !audio || !state) return;

  audio.loop = true;
  audio.volume = 0.65;

  button.addEventListener('click', async () => {
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
      button.setAttribute('aria-pressed', 'false');
      button.setAttribute('aria-label', 'Play sound');
      state.textContent = 'Sound off';
      return;
    }

    audio.muted = false;
    audio.volume = 0.65;
    try {
      await audio.play();
      button.setAttribute('aria-pressed', 'true');
      button.setAttribute('aria-label', 'Stop sound');
      state.textContent = 'Sound on';
    } catch {
      button.setAttribute('aria-pressed', 'false');
      button.setAttribute('aria-label', 'Sound unavailable');
      state.textContent = 'Sound unavailable';
    }
  });

  audio.addEventListener('error', () => {
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute('aria-label', 'Sound unavailable');
    state.textContent = 'Sound unavailable';
  });
})();