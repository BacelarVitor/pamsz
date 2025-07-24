# 💖 pamsz

Um projeto feito com carinho para alguém especial.

<p align="center">
  <img src="https://i.imgur.com/CK8Hs1J.mp4" width="250" />
</p>

**pamsz** é um site minimalista, fofo e interativo feito com [SvelteKit](https://kit.svelte.dev), criado originalmente como um presente digital para a Pamela. A proposta é simples: enviar carinho de um jeito leve, divertido e inesperado — como um correio elegante digital.

## ✨ Funcionalidades

- 🎞️ Exibição de imagens e vídeos fofos (como se fossem GIFs)
- 🌧️ "Chuva de carinho": imagens/elementos caem na tela com animações suaves
- 🔁 Geração aleatória de mídias
- 🫶 Interface responsiva, feita com amor
- 🛜 Deploy via GitHub Pages

> 💡 O projeto pode evoluir para permitir que qualquer pessoa envie experiências visuais personalizadas para alguém especial, como um correio fofo digital (ex: namoradx, ficante, crush, amigo).

## 📦 Tecnologias

- [SvelteKit](https://kit.svelte.dev)
- [Vite](https://vitejs.dev)
- [Adapter Static](https://github.com/sveltejs/kit/tree/main/packages/adapter-static)
- Hospedagem via GitHub Pages
- Imagens/Vídeos via [Imgur CDN](https://imgur.com)

## 🚀 Deploy

O deploy é feito automaticamente via GitHub Actions para GitHub Pages, a cada push na branch `master`.

Caso queira rodar localmente:

```bash
git clone https://github.com/BacelarVitor/pamsz.git
cd pamsz
npm install
npm run dev
