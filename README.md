# EchoMentor AI · landing

Landing pública de **EchoMentor AI**, la plataforma de aprendizaje adaptativo con IA de **UETC · Arden A.C.**

**En vivo:** https://echomentor.uetc.mx

La página se comporta como el producto: una clase ya corriendo, un temario que se arma solo, un perfil del Aprendiz que reescribe el curso, un pizarrón que se dibuja y actividades que funcionan de verdad. Todo con datos de ejemplo, marcado como demo en la propia página.

Disponible en **español, inglés y rumano** (la plataforma ya tiene 13 idiomas, rumano incluido): selector ES · EN · RO en la barra, detección automática del idioma del navegador y enlaces directos con `?lang=es`, `?lang=en` o `?lang=ro`.

## Cómo entran los miembros

El formulario de acceso hace un `POST` normal (funciona sin JavaScript) al conector de la plataforma. La plataforma valida el código, deja la sesión iniciada y entra directo. El código nunca viaja en la URL y la landing no tiene backend.

¿No tienes código? Únete gratis al [Club UETC](https://club.uetc.mx).

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | La página completa: marcado, estilos y lógica de la demo |
| `i18n.js` | Traducciones (es · en · ro) y datos de la demo por idioma |
| `scrollcraft.js` / `scrollcraft.css` | Motor de scroll, sin modificar |
| `assets/` | Símbolo oficial UETC, ícono de app, fuentes, cielo de noche e imagen para compartir |
| `BRIEF.md` | Brief de diseño: gramática, curva de emoción, pico y movimiento firma |
| `FINGERPRINTS.md` | Registro de huellas para que la siguiente landing no sea un calco de esta |
| `CNAME` | Dominio de GitHub Pages |

## Marca

Sigue el [brandkit de Arden v2.4](https://brandkit.uetc.mx) como pieza de UETC: fondo noche `#120C33`, acento amarillo UETC `#F6D023`, Montserrat para títulos y Rubik para texto, símbolo de puntos de UETC. El amarillo solo va en trazos, números, pines y botones; los rellenos de selección usan el índigo del brandkit.

## Local

```bash
npx serve .   # o cualquier servidor estático
```

## Créditos

- Hecha con [scroll-craft](https://github.com/nateherkai/scroll-craft) (MIT, © Nate Herk). Ver `THIRD_PARTY_LICENSE-scrollcraft.txt`.
- Tipografías: Montserrat y Rubik (OFL), autoalojadas en `assets/fonts/`, tal como las entrega el [brandkit de Arden](https://brandkit.uetc.mx).
- © 2026 UETC · Arden A.C. Todos los derechos reservados sobre marca y contenido.

<!-- HERDR-CONTEXT:START -->
## Contexto del proyecto y clasificación en Herdr

Presentación web de EchoMentor, producto educativo de UETC/Arden.

**Espacio:** `02 LAB | ARD | EchoMentor`. **Unidad:** Arden / UETC / Brandcade.

### Clasificación

La etiqueta LAB identifica una clasificación de catálogo pendiente de revalidación; no implica inactividad. Los números ordenan navegación; no son un ranking de ingresos.

Se conserva la documentación original y el crédito a sus autores. Esta sección no certifica disponibilidad actual ni modifica el runtime. Actualizada el 28-oct-2026.

<!-- HERDR-CONTEXT:END -->
