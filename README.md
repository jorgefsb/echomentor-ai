# EchoMentor AI · landing

Landing pública de **EchoMentor AI**, la plataforma de aprendizaje adaptativo con IA de **UETC · Arden A.C.**

**En vivo:** https://echomentor.jorgesuarez.com.mx

La página se comporta como el producto: una clase ya corriendo, un temario que se arma solo, un perfil del Aprendiz que reescribe el curso, un pizarrón que se dibuja y actividades que funcionan de verdad. Todo con datos de ejemplo, marcado como demo en la propia página.

Disponible en **español, inglés y rumano**: selector ES · EN · RO en la barra, detección automática del idioma del navegador y enlaces directos con `?lang=es`, `?lang=en` o `?lang=ro`.

## Cómo entran los miembros

El formulario de acceso hace un `POST` normal (funciona sin JavaScript) al conector de la plataforma. La plataforma valida el código, deja la sesión iniciada y entra directo. El código nunca viaja en la URL y la landing no tiene backend.

¿No tienes código? Únete gratis al [Club UETC](https://club.uetc.mx).

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | La página completa: marcado, estilos y lógica de la demo |
| `i18n.js` | Traducciones (es · en · ro) y datos de la demo por idioma |
| `scrollcraft.js` / `scrollcraft.css` | Motor de scroll, sin modificar |
| `assets/` | Marca UETC, favicon e imagen para compartir |
| `BRIEF.md` | Brief de diseño: gramática, curva de emoción, pico y movimiento firma |
| `FINGERPRINTS.md` | Registro de huellas para que la siguiente landing no sea un calco de esta |
| `CNAME` | Dominio de GitHub Pages |

## Local

```bash
npx serve .   # o cualquier servidor estático
```

## Créditos

- Hecha con [scroll-craft](https://github.com/nateherkai/scroll-craft) (MIT, © Nate Herk). Ver `THIRD_PARTY_LICENSE-scrollcraft.txt`.
- Tipografías: Archivo y Geist vía Google Fonts.
- © 2026 UETC · Arden A.C. Todos los derechos reservados sobre marca y contenido.
