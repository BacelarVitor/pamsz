<script>
  import "../global.css";
  import { page } from "$app/stores";

  // Tabs do app
  const tabs = [
    { href: "/pamsz",      label: "Chuva", icon: "🌧️" },
    { href: "/pamsz/mural", label: "Mural", icon: "🖼️" },
    { href: "/pamsz/carta?code=ESQUILO", label: "Carta", icon: "💌" },
  ];

  const bottomPadding = 84; // espaço para a barra no mobile
</script>

<main class="container" style={`padding-bottom:${bottomPadding}px`}>
  <slot />
</main>

<!-- Bottom Tab Bar (mostra só no mobile) -->
<nav class="bottom-nav" role="navigation" aria-label="Navegação principal">
  {#each tabs as t}
    <a
      class="tab"
      href={t.href}
      aria-current={$page.url.pathname === t.href ? "page" : undefined}
      data-active={$page.url.pathname === t.href}
    >
      <span class="icon" aria-hidden="true">{t.icon}</span>
      <span class="label">{t.label}</span>
    </a>
  {/each}
</nav>

<style>
  /* seu padding-top original */
  main { padding-top: 3rem; }

  /* Bottom nav fixa */
  .bottom-nav{
    position: fixed;
    left: 0; right: 0; bottom: 0;
    padding: max(8px, env(safe-area-inset-bottom));
    background: rgba(20,22,28,.92);
    backdrop-filter: blur(8px);
    border-top: 1px solid rgba(255,255,255,.08);
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 4px; z-index: 10000;
  }
  .tab{
    --hit: 48px;
    min-height: var(--hit);
    padding: 6px 4px 8px;
    border-radius: 12px;
    text-decoration: none;
    color: #eaeaf0; text-align: center; font-size: .86rem;
    display:flex; flex-direction:column; align-items:center; justify-content:center;
  }
  .tab[data-active="true"]{ background: rgba(255,255,255,.10); }
  .icon{ font-size: 1.25rem; line-height: 1; }
  .label{ margin-top: 2px; }

  /* Mostra só no mobile */
  @media (min-width: 768px){ 
    .bottom-nav{ display:none; }
    /* no desktop você pode remover o padding extra se quiser */
    main { padding-bottom: 0 !important; }
  }
</style>