# La boca como espejo del cuerpo — artículo web

Página única (`index.html`, sin dependencias externas de código, solo imágenes
enlazadas por URL) con el artículo "Enfermedades sistémicas con manifestaciones
orales visibles", ilustrado con 12 fotografías clínicas reales:
8 de licencia libre de Wikimedia Commons y 4 cedidas/citadas de Elsevier España
y El Español (con crédito y enlace a la fuente en cada pie de foto).

---

## 1. Cómo generar tú mismo el PDF con todas las imágenes (más simple)

Como tú sí tienes acceso a internet, **no hace falta subir nada a GitHub ni a
Vercel para conseguir el PDF ilustrado**. Basta con abrir el archivo local en
un navegador real, porque este sí puede descargar las imágenes desde Wikimedia,
Elsevier y El Español al momento de renderizar la página:

1. Descomprime este `.zip` en tu computadora.
2. Haz doble clic en `index.html` (o ábrelo con Chrome/Edge: clic derecho →
   "Abrir con" → tu navegador). Se abrirá como `file:///.../index.html`.
3. Espera unos segundos a que carguen todas las imágenes (verifica que no
   quede ningún ícono de "imagen rota").
4. Presiona `Ctrl+P` (Windows/Linux) o `Cmd+P` (Mac).
5. En "Destino" elige **Guardar como PDF**.
6. Antes de guardar, entra a "Más ajustes" y activa la casilla
   **"Gráficos de fondo"** (Background graphics) — así se conservan los
   colores, el degradado de la cabecera y los recuadros.
7. Tamaño de papel: A4. Márgenes: "Predeterminado" o "Ninguno" según prefieras.
8. Haz clic en "Guardar". Listo: tendrás un PDF con las 12 fotografías ya
   incrustadas como imágenes reales, no como enlaces.

Esto funciona igual de bien si más adelante publicas la página en Vercel:
simplemente repites los mismos pasos pero abriendo la URL pública en vez del
archivo local.

### Alternativa sin usar "Imprimir"
Si prefieres una herramienta dedicada:
- https://www.sejda.com/html-to-pdf (subes el `index.html` o pegas la URL)
- La extensión de Chrome "GoFullPage" o "Print Friendly & PDF"

Ambas producen el mismo resultado: un PDF con las imágenes ya incrustadas.

---

## 2. Cómo subir la página a GitHub (para tenerla online)

1. Crea un repositorio nuevo en https://github.com/new (público o privado).
2. Sube `index.html` con el botón **"Add file → Upload files"** en la web de
   GitHub, o desde la terminal:
   ```bash
   git init
   git add index.html README.md
   git commit -m "Artículo: enfermedades sistémicas con manifestaciones orales"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```

## 3. Cómo publicarlo en Vercel

1. Entra a https://vercel.com e inicia sesión con tu cuenta de GitHub.
2. "Add New… → Project" → selecciona el repositorio recién creado.
3. Vercel detecta que es un sitio estático; no hace falta configurar nada
   ("Framework Preset": Other). Clic en "Deploy".
4. En un par de minutos tendrás una URL pública tipo
   `https://tu-repo.vercel.app` con el artículo ya online.

---

## Créditos de las imágenes

| Sección | Fuente | Licencia |
|---|---|---|
| Diabetes (lengua geográfica) | Wikimedia Commons | Dominio público / libre |
| Anemia ferropénica (queilitis angular) | Wikimedia Commons — Matthew Ferguson | CC BY-SA 3.0 |
| Peutz-Jeghers | Wikimedia Commons | Libre |
| Kawasaki | Wikimedia Commons | Libre |
| Escorbuto | Wikimedia Commons | Libre |
| VIH (candidiasis) | Wikimedia Commons — CDC PHIL | Dominio público |
| VIH (sarcoma de Kaposi) | Wikimedia Commons — CDC PHIL | Dominio público |
| Liquen plano oral | Wikimedia Commons | CC BY-SA 4.0 |
| Enfermedad de Crohn | Elsevier España (revista *Piel*) | Derechos reservados — uso educativo/cita |
| Lupus eritematoso sistémico | Elsevier España (*Reumatología Clínica*) | Derechos reservados — uso educativo/cita |
| Leucemia | El Español | Derechos reservados — uso educativo/cita |
| Síndrome de Sjögren | Elsevier España (*Reumatología Clínica*) | Derechos reservados — uso educativo/cita |

Las cuatro imágenes con derechos reservados se muestran con fines
exclusivamente educativos y de cita, con crédito visible y enlace directo a la
fuente original en cada pie de foto. Si vas a publicar este artículo de forma
pública/comercial, ten en cuenta que —a diferencia de las imágenes de
Wikimedia Commons— estas cuatro no tienen licencia libre explícita, así que lo
más prudente es mantener siempre el crédito y el enlace, o sustituirlas por
alternativas de Wikimedia Commons si buscas una licencia totalmente abierta.
"# articulo-manifestaciones-orales" 
