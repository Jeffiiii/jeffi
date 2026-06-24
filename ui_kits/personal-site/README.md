# Personal Site — UI Kit

A redesign of Jeffi's personal website (`github.com/Jeffiiii/jeffi`) in the style of
[laplace.live](https://laplace.live) — a clean, dark, single-accent VTuber hub — re-skinned
to **Elysia pink**. Built from the design-system components.

## Screens / surfaces
- `SiteNav.jsx` — sticky blurred nav (logo · section links · language toggle · Chat CTA).
- `SiteHero.jsx` — big gradient wordmark, tagline, tag chips, CTAs, and the **Elysia avatar
  invite card** (the headline integration).
- `MusicPlayer.jsx` — `MusicSection` (now-playing + multi-source playlist) **and** the
  persistent `MiniPlayer` bar fixed at the bottom (laplace's signature).
- `Sections.jsx` — `Gallery` (image grid + hover overlay) and `Skills` (tech grid).
- `ElysiaDock.jsx` — floating launcher that opens a compact Elysia chat panel, reusing
  `ElysiaChatPanel` from the Elysia Chat kit.

`index.html` composes them into the live homepage with bilingual EN/中文 toggle and
ambient petal particles.

> Imagery uses `picsum.photos` placeholders (as the original did) — swap in Jeffi's own
> gallery photos for production.
