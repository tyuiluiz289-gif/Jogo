# Crônicas de Cinza & Fogo — v0.2

Capítulos **1–2 integrados**: romance inicial com Lyra, forja do Borin (3 escolhas), evento aleatório na estrada e **mini-boss Sombra de Ferro** (difícil, mas vencível), com drop **Núcleo de Ferro**.

## Teste rápido (PWA)
- Abra `index.html` no navegador do celular/PC.
- Use **Adicionar à tela inicial** no Chrome Android.
- Funciona offline (service worker). Save no localStorage (`rpg_ccf_v02`).

## Gerar APK (via Capacitor/Android Studio)
Este pacote é web puro. Para APK, use o scaffolding do pacote anterior (v0.1) ou inicialize Capacitor aqui:
```bash
npm create @capacitor/app@latest   # ou adicione @capacitor/android e @capacitor/cli
# Configure webDir como '.' e mova este conteúdo.
```
