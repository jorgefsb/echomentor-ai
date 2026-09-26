/* EchoMentor AI landing · i18n (es · en · ro)
   Static text is translated in place by matching the Spanish source string.
   Dynamic demo data (profiles, captions, feedback) lives in DATA per language. */
(function (global) {
  'use strict';

  /* Spanish source -> [English, Romanian] */
  var T = {
    'EchoMentor AI, inicio': ['EchoMentor AI, home', 'EchoMentor AI, acasă'],
    'Secciones': ['Sections', 'Secțiuni'],
    'Idioma': ['Language', 'Limba'],
    'Clase': ['Class', 'Lecție'],
    'Temario': ['Syllabus', 'Programă'],
    'Perfil': ['Profile', 'Profil'],
    'Pizarrón': ['Whiteboard', 'Tablă'],
    'Actividades': ['Activities', 'Activități'],
    'Ayuda': ['Help', 'Ajutor'],
    'Entrar': ['Sign in', 'Intră'],
    'Estado': ['Status', 'Stare'],

    'Temario del curso de ejemplo': ['Sample course syllabus', 'Programa cursului demonstrativ'],
    'Temario · Unreal Engine 5': ['Syllabus · Unreal Engine 5', 'Programă · Unreal Engine 5'],
    'Qué es un motor de juego': ['What a game engine is', 'Ce este un motor de joc'],
    'Moverte por el editor': ['Getting around the editor', 'Cum te miști prin editor'],
    'Blueprints: tu primer interruptor': ['Blueprints: your first switch', 'Blueprints: primul tău întrerupător'],
    'Luces y ambiente': ['Lights and atmosphere', 'Lumini și atmosferă'],
    'Quiz de repaso': ['Review quiz', 'Quiz de recapitulare'],
    'Proyecto: un nivel jugable': ['Project: a playable level', 'Proiect: un nivel jucabil'],
    'Perfil: principiante · sesiones de 20 min': ['Profile: beginner · 20 min sessions', 'Profil: începător · sesiuni de 20 min'],
    'Tu perfil': ['Your profile', 'Profilul tău'],
    '“Soy diseñadora y nunca he programado.”': ['“I’m a designer and I’ve never coded.”', '„Sunt designer și n-am programat niciodată.”'],
    'Clase adaptada': ['Class adapted', 'Lecție adaptată'],
    'Clase 3 de 6': ['Class 3 of 6', 'Lecția 3 din 6'],
    'Demo con datos de ejemplo': ['Demo with sample data', 'Demo cu date de exemplu'],
    'Diapositiva 2 · Blueprints': ['Slide 2 · Blueprints', 'Slide-ul 2 · Blueprints'],
    'Cuando el jugador entra al área, la luz cambia. Tres nodos y cero líneas de código.': ['When the player walks into the area, the light changes. Three nodes, zero lines of code.', 'Când jucătorul intră în zonă, lumina se schimbă. Trei noduri și zero linii de cod.'],
    'Diagrama: evento de entrada, cambiar visibilidad, luz': ['Diagram: enter event, toggle visibility, light', 'Diagramă: eveniment de intrare, schimbare vizibilitate, lumină'],
    'al entrar al área': ['on entering the area', 'la intrarea în zonă'],
    'prende o apaga': ['turns on or off', 'aprinde sau stinge'],
    'la luz del cuarto': ['the room light', 'lumina camerei'],
    'Simulación en vivo': ['Live simulation', 'Simulare live'],
    'Simulación en vivo: el jugador entra al área y la luz se prende': ['Live simulation: the player enters the area and the light turns on', 'Simulare live: jucătorul intră în zonă și lumina se aprinde'],
    'área': ['area', 'zonă'],
    'jugador': ['player', 'jucător'],
    'Profe Echo': ['Prof. Echo', 'Prof. Echo'],
    'Chat de la clase': ['Class chat', 'Chatul lecției'],
    'Clase en vivo · 3 en el salón': ['Live class · 3 in the room', 'Lecție live · 3 în sală'],
    'Lía · compañera IA': ['Lía · AI classmate', 'Lía · colegă AI'],
    'Tomás · compañero IA': ['Tomás · AI classmate', 'Tomás · coleg AI'],
    '¿El evento se dispara cada vez que alguien entra?': ['Does the event fire every time someone walks in?', 'Evenimentul se declanșează de fiecare dată când intră cineva?'],
    'Cada vez. Por eso sirve para puertas, trampas y luces.': ['Every time. That’s why it works for doors, traps and lights.', 'De fiecare dată. De aceea merge pentru uși, capcane și lumini.'],
    'Mira la simulación de abajo: cuando el punto entra al área, la luz se prende.': ['Watch the simulation below: when the dot enters the area, the light turns on.', 'Uită-te la simularea de jos: când punctul intră în zonă, lumina se aprinde.'],
    'Yo lo usaría para abrir una puerta secreta.': ['I’d use it to open a secret door.', 'Eu l-aș folosi ca să deschid o ușă secretă.'],
    'TÚ': ['YOU', 'TU'],
    'Tú': ['You', 'Tu'],
    'voz transcrita': ['transcribed voice', 'voce transcrisă'],
    '¿Y si quiero que la luz parpadee?': ['What if I want the light to flicker?', 'Și dacă vreau ca lumina să clipească?'],
    'Con un Timeline. Lo vemos en el pizarrón en un momento.': ['With a Timeline. We’ll see it on the whiteboard in a moment.', 'Cu un Timeline. Îl vedem pe tablă imediat.'],
    'Pregunta lo que quieras, con texto o voz': ['Ask anything, by text or voice', 'Întreabă orice, în scris sau cu vocea'],
    ', tu salón de clases con IA': [', your AI classroom', ', sala ta de clasă cu AI'],
    'Escribe qué quieres aprender y arma el curso completo: temario, clases con voz, pizarrón y actividades. Todo adaptado a quien eres.': ['Type what you want to learn and it builds the whole course: syllabus, voiced lessons, whiteboard and activities. All adapted to who you are.', 'Scrie ce vrei să înveți și construiește tot cursul: programă, lecții cu voce, tablă și activități. Totul adaptat la cine ești.'],
    'Ver cómo funciona': ['See how it works', 'Vezi cum funcționează'],
    'Beta para miembros del Club UETC · by UETC · Arden A.C.': ['Beta for Club UETC members · by UETC · Arden A.C.', 'Beta pentru membrii Club UETC · by UETC · Arden A.C.'],

    'Nuevo curso': ['New course', 'Curs nou'],
    '¿Qué quieres aprender hoy?': ['What do you want to learn today?', 'Ce vrei să înveți azi?'],
    'Un tema, una meta o un documento': ['A topic, a goal or a document', 'Un subiect, un obiectiv sau un document'],
    'o sube un PDF': ['or upload a PDF', 'sau încarcă un PDF'],
    'Generando temario': ['Generating syllabus', 'Se generează programa'],
    'Esperando tu tema': ['Waiting for your topic', 'Aștept subiectul tău'],
    'Leyendo tu perfil del Aprendiz': ['Reading your Learner profile', 'Citesc profilul tău de cursant'],
    'Ordenando de lo simple a lo complejo': ['Ordering from simple to complex', 'Ordonez de la simplu la complex'],
    'Eligiendo el tipo de escena para cada clase': ['Choosing the scene type for each class', 'Aleg tipul de scenă pentru fiecare lecție'],
    'Diapositivas': ['Slides', 'Slide-uri'],
    'Simulación': ['Simulation', 'Simulare'],
    'Proyecto': ['Project', 'Proiect'],
    'Código': ['Code', 'Cod'],
    'Temario listo. Puedes editarlo antes de generar las clases.': ['Syllabus ready. You can edit it before the classes are generated.', 'Programa e gata. O poți edita înainte de a genera lecțiile.'],
    'Editar temario': ['Edit syllabus', 'Editează programa'],

    'Perfil del Aprendiz': ['Learner profile', 'Profilul cursantului'],
    'Cuéntale quién eres. El curso se reescribe para ti.': ['Tell it who you are. The course rewrites itself for you.', 'Spune-i cine ești. Cursul se rescrie pentru tine.'],
    'Qué sabes, qué quieres lograr, cuánto tiempo tienes y cómo aprendes mejor.': ['What you know, what you want to achieve, how much time you have and how you learn best.', 'Ce știi, ce vrei să obții, cât timp ai și cum înveți cel mai bine.'],
    'Volver a la demo': ['Back to the demo', 'Înapoi la demo'],
    'Perfiles de ejemplo': ['Sample profiles', 'Profiluri exemplu'],
    'Diseñadora sin código': ['Designer, no code', 'Designer fără cod'],
    'Ingeniero en C++': ['C++ engineer', 'Inginer C++'],
    '30 min al día': ['30 min a day', '30 min pe zi'],
    'Demostración con 3 adaptaciones de ejemplo. En la plataforma, la IA reescribe todo a partir de lo que escribas, hasta 4000 caracteres.': ['Demo with 3 sample adaptations. On the platform, the AI rewrites everything from what you write, up to 4000 characters.', 'Demo cu 3 adaptări exemplu. Pe platformă, AI-ul rescrie totul pornind de la ce scrii, până la 4000 de caractere.'],
    'Tu curso · Unreal Engine 5': ['Your course · Unreal Engine 5', 'Cursul tău · Unreal Engine 5'],
    'Así te lo explica': ['How it explains it to you', 'Cum ți-l explică'],
    'Nivel del quiz': ['Quiz level', 'Nivelul quizului'],
    'Ritmo': ['Pace', 'Ritm'],

    'Pizarrón · Profe Echo está dibujando': ['Whiteboard · Prof. Echo is drawing', 'Tablă · Prof. Echo desenează'],
    'Pizarrón: entrar prende la luz, salir la apaga, un Timeline la hace parpadear': ['Whiteboard: entering turns the light on, leaving turns it off, a Timeline makes it flicker', 'Tablă: intrarea aprinde lumina, ieșirea o stinge, un Timeline o face să clipească'],
    'entra al área': ['enters the area', 'intră în zonă'],
    'prende / apaga': ['on / off', 'aprinde / stinge'],
    'luz': ['light', 'lumină'],
    'sale del área': ['leaves the area', 'iese din zonă'],
    'pregunta de Lía: al salir, se apaga': ['Lía’s question: turn it off on exit', 'întrebarea Líei: la ieșire, se stinge'],
    'parpadeo': ['flicker', 'clipire'],
    'Conversación de la clase': ['Class conversation', 'Conversația lecției'],
    'Profe Echo, Lía, Tomás y tú': ['Prof. Echo, Lía, Tomás and you', 'Prof. Echo, Lía, Tomás și tu'],
    'Te lo dibujo: entra el jugador, el evento se dispara y la luz cambia.': ['Let me draw it: the player walks in, the event fires and the light changes.', 'Hai să-ți desenez: jucătorul intră, evenimentul se declanșează și lumina se schimbă.'],
    '¿Y al salir se queda prendida?': ['And when they leave, does it stay on?', 'Și când iese, rămâne aprinsă?'],
    'Buena pregunta. Sumamos EndOverlap al mismo nodo. Míralo en el pizarrón.': ['Good question. We add EndOverlap to the same node. Look at the whiteboard.', 'Bună întrebare. Adăugăm EndOverlap la același nod. Uită-te pe tablă.'],
    '¿Puedo hacer que parpadee?': ['Can I make it flicker?', 'Pot s-o fac să clipească?'],
    'Sí, con un Timeline que mueve la intensidad. Lo practicas en la siguiente actividad.': ['Yes, with a Timeline that drives the intensity. You’ll practice it in the next activity.', 'Da, cu un Timeline care modifică intensitatea. Exersezi asta în activitatea următoare.'],

    'Aquí no solo miras. Juegas con lo que aprendes.': ['Here you don’t just watch. You play with what you learn.', 'Aici nu doar privești. Te joci cu ce înveți.'],
    'Cada clase trae actividades que responden: quizzes que califican, simulaciones que calculan y botones en tu idioma. Estas tres funcionan de verdad.': ['Every class comes with activities that respond: quizzes that grade, simulations that compute and buttons in your language. These three really work.', 'Fiecare lecție vine cu activități care răspund: quizuri care notează, simulări care calculează și butoane în limba ta. Acestea trei chiar funcționează.'],
    'Quiz de ejemplo': ['Sample quiz', 'Quiz exemplu'],
    'Quiz · califica al instante': ['Quiz · grades instantly', 'Quiz · notează pe loc'],
    'El jugador entra al área. ¿Qué nodo se dispara primero?': ['The player walks into the area. Which node fires first?', 'Jucătorul intră în zonă. Ce nod se declanșează primul?'],
    'Elige una respuesta.': ['Pick an answer.', 'Alege un răspuns.'],
    'Simulación de salto': ['Jump simulation', 'Simulare de săritură'],
    'Simulación · física de salto': ['Simulation · jump physics', 'Simulare · fizica săriturii'],
    '¿Tu personaje alcanza la plataforma de 200 cm?': ['Does your character reach the 200 cm platform?', 'Personajul tău ajunge pe platforma de 200 cm?'],
    'Impulso de salto': ['Jump impulse', 'Impulsul săriturii'],
    'Gravedad': ['Gravity', 'Gravitație'],
    'Idioma de las actividades': ['Activity language', 'Limba activităților'],
    'Idiomas · 12 disponibles': ['Languages · 12 available', 'Limbi · 12 disponibile'],
    'Los botones de cada actividad salen en el idioma de tu curso.': ['Each activity’s buttons show up in your course’s language.', 'Butoanele fiecărei activități apar în limba cursului tău.'],
    'La interfaz completa de la plataforma también está en estos 12 idiomas.': ['The full platform interface is also available in these 12 languages.', 'Interfața completă a platformei este disponibilă în aceste 12 limbi.'],

    'Qué hace EchoMentor AI': ['What EchoMentor AI does', 'Ce face EchoMentor AI'],
    'Todo lo que viste arriba, en una lista. Filtra por lo que te interesa.': ['Everything you saw above, in one list. Filter by what you care about.', 'Tot ce ai văzut mai sus, într-o listă. Filtrează după ce te interesează.'],
    'Filtrar funciones': ['Filter features', 'Filtrează funcțiile'],
    'Busca: voz, quiz, PDF, idiomas': ['Search: voice, quiz, PDF, languages', 'Caută: voce, quiz, PDF, limbi'],
    'Tema o documento': ['Topic or document', 'Subiect sau document'],
    'Escribe un tema o sube un PDF y la IA arma el curso completo: temario, clases y actividades.': ['Type a topic or upload a PDF and the AI builds the whole course: syllabus, classes and activities.', 'Scrie un subiect sau încarcă un PDF și AI-ul construiește tot cursul: programă, lecții și activități.'],
    'Temario editable': ['Editable syllabus', 'Programă editabilă'],
    'Revisa y ajusta el temario antes de generar las clases.': ['Review and adjust the syllabus before the classes are generated.', 'Revizuiește și ajustează programa înainte de generarea lecțiilor.'],
    'Hasta 4000 caracteres sobre ti. El maestro los lee en cada clase para ajustar nivel, ejemplos y ritmo.': ['Up to 4000 characters about you. The teacher reads them in every class to adjust level, examples and pace.', 'Până la 4000 de caractere despre tine. Profesorul le citește la fiecare lecție ca să ajusteze nivelul, exemplele și ritmul.'],
    'Maestro y compañeros IA': ['AI teacher and classmates', 'Profesor și colegi AI'],
    'Explican en voz alta, dibujan en el pizarrón y discuten contigo en tiempo real.': ['They explain out loud, draw on the whiteboard and discuss with you in real time.', 'Explică cu voce tare, desenează pe tablă și discută cu tine în timp real.'],
    'Pregunta con tu voz': ['Ask with your voice', 'Întreabă cu vocea'],
    'Habla o escribe en medio de la clase y te responden en el momento.': ['Speak or type in the middle of class and get an answer on the spot.', 'Vorbește sau scrie în mijlocul lecției și primești răspuns pe loc.'],
    'Actividades interactivas': ['Interactive activities', 'Activități interactive'],
    'Quizzes que califican, simulaciones, juegos, visualizaciones 3D, mapas mentales y programación en línea.': ['Quizzes that grade, simulations, games, 3D visualizations, mind maps and online coding.', 'Quizuri care notează, simulări, jocuri, vizualizări 3D, hărți mentale și programare online.'],
    'Aprendizaje por proyectos': ['Project-based learning', 'Învățare prin proiecte'],
    'Retos tipo proyecto para aplicar lo aprendido, no solo repasarlo.': ['Project-style challenges to apply what you learned, not just review it.', 'Provocări de tip proiect ca să aplici ce ai învățat, nu doar să recapitulezi.'],
    '12 idiomas': ['12 languages', '12 limbi'],
    'Interfaz y cursos en español, inglés, portugués, francés, alemán, ruso, japonés, coreano, chino, vietnamita y árabe.': ['Interface and courses in Spanish, English, Portuguese, French, German, Russian, Japanese, Korean, Chinese, Vietnamese and Arabic.', 'Interfață și cursuri în spaniolă, engleză, portugheză, franceză, germană, rusă, japoneză, coreeană, chineză, vietnameză și arabă.'],
    'Llévatelo': ['Take it with you', 'Ia-l cu tine'],
    'Exporta tus diapositivas editables en .pptx o páginas interactivas en .html.': ['Export editable slides as .pptx or interactive pages as .html.', 'Exportă slide-uri editabile în .pptx sau pagini interactive în .html.'],
    'Hecho en UETC': ['Made at UETC', 'Făcut la UETC'],
    'Nace de la metodología de gamedev de UETC y Arden A.C. Sirve para Unreal y para cualquier cosa que quieras aprender.': ['Born from the UETC and Arden A.C. gamedev methodology. Works for Unreal and for anything else you want to learn.', 'Născut din metodologia de gamedev UETC și Arden A.C. Merge pentru Unreal și pentru orice altceva vrei să înveți.'],
    'Acceso': ['Access', 'Acces'],
    'Beta para miembros del Club UETC. Unirte al Club es gratis.': ['Beta for Club UETC members. Joining the Club is free.', 'Beta pentru membrii Club UETC. Înscrierea în Club e gratuită.'],
    'Nada con esa palabra. Prueba con voz, quiz o idiomas.': ['Nothing with that word. Try voice, quiz or languages.', 'Nimic cu acest cuvânt. Încearcă voce, quiz sau limbi.'],

    'Entrar a EchoMentor AI': ['Sign in to EchoMentor AI', 'Intră în EchoMentor AI'],
    'Tu código de miembro': ['Your member code', 'Codul tău de membru'],
    'Código de miembro del Club UETC': ['Club UETC member code', 'Cod de membru Club UETC'],
    'Escribe tu código del Club UETC': ['Type your Club UETC code', 'Scrie codul tău din Club UETC'],
    'Entras directo a la plataforma y tu sesión se queda guardada en este navegador.': ['You go straight into the platform and stay signed in on this browser.', 'Intri direct pe platformă și rămâi autentificat în acest browser.'],
    '¿Ya entraste antes aquí?': ['Signed in here before?', 'Ai mai intrat de aici?'],
    'Abrir la plataforma': ['Open the platform', 'Deschide platforma'],
    '¿Primera vez?': ['First time?', 'Prima dată?'],
    'El acceso es para miembros del Club UETC': ['Access is for Club UETC members', 'Accesul este pentru membrii Club UETC'],
    'Únete gratis a la comunidad de gamedev de UETC y ahí recibes tu código.': ['Join the UETC gamedev community for free and get your code there.', 'Alătură-te gratuit comunității de gamedev UETC și acolo primești codul.'],
    'Entra al Club UETC': ['Join the Club UETC', 'Intră în Club UETC'],
    'Busca tu código de EchoMentor AI': ['Find your EchoMentor AI code', 'Găsește codul tău EchoMentor AI'],
    'Vuelve aquí y escríbelo': ['Come back here and type it', 'Revino aici și scrie-l'],
    'Unirme al Club UETC': ['Join the Club UETC', 'Intră în Club UETC'],
    'Código de esta página': ['Source of this page', 'Codul acestei pagini']
  };

  function prof(name, badge, text, plan, ex, level, levelName, pace) {
    return { name: name, badge: badge, text: text, plan: plan, ex: ex, level: level, levelName: levelName, pace: pace };
  }

  var DATA = {
    es: {
      htmlLang: 'es-MX', langTag: 'es-MX',
      title: 'EchoMentor AI · Plataforma de aprendizaje adaptativo con IA · by UETC',
      desc: 'Tu salón de clases con IA. Escribe qué quieres aprender y EchoMentor AI arma el curso: temario, clases con voz, pizarrón y actividades, adaptado a quien eres. Beta para miembros del Club UETC.',
      caption: 'Cuando el jugador entra al área, el evento se dispara. Lo conectamos a la luz y listo: tu primer interruptor.',
      topic: 'Quiero hacer mi primer nivel en Unreal Engine 5',
      profiles: {
        g: prof('Genérico', 'Curso genérico', '', [['Qué es un motor de juego','Diapositivas'],['Moverte por el editor','Diapositivas'],['Blueprints: tu primer interruptor','Simulación'],['Luces y ambiente','Pizarrón'],['Quiz de repaso','Quiz'],['Proyecto: un nivel jugable','Proyecto']], 'Un Blueprint es un sistema visual de programación: conectas nodos y cada uno hace una acción.', 2, 'Intermedio', '6 clases de 30 min'),
        a: prof('Diseñadora sin código', 'Reescrito para ti', 'Soy diseñadora gráfica y nunca he programado. Aprendo mejor con ejemplos visuales y poco a poco.', [['El editor como lienzo: forma, luz y color','Diapositivas'],['Tu escena como un moodboard en 3D','Pizarrón'],['Blueprints sin miedo: cajas y flechas','Simulación'],['Materiales: pinta tu mundo','Diapositivas'],['Quiz visual con imágenes','Quiz'],['Proyecto: un rincón jugable con tu estilo','Proyecto']], 'Un Blueprint es como un diagrama de flujo en tu programa de diseño: cada caja hace una cosa y las flechas dicen en qué orden.', 1, 'Inicial', '10 clases de 20 min, un concepto a la vez'),
        b: prof('Ingeniero en C++', 'Reescrito para ti', 'Estudio ingeniería y programo en C++. Quiero ir directo al grano y ver cómo se conecta con código.', [['Arquitectura de UE5 en 10 minutos','Diapositivas'],['Actores, componentes y ciclo de vida','Pizarrón'],['Blueprints vs C++: cuándo usar cada uno','Simulación'],['Exponer funciones de C++ a Blueprints','Código'],['Quiz técnico','Quiz'],['Proyecto: sistema de interacción reutilizable','Proyecto']], 'BeginOverlap es el delegado OnComponentBeginOverlap que enlazarías en C++. El Blueprint solo dibuja esa llamada como grafo.', 3, 'Avanzado', '4 clases de 45 min, sin rodeos'),
        c: prof('30 min al día', 'Reescrito para ti', 'Hago juegos de mesa con mis hijos los fines de semana. Tengo 30 minutos al día para aprender.', [['De tablero a pantalla: reglas que ya conoces','Diapositivas'],['Tu primer escenario en 30 minutos','Proyecto'],['Blueprints: un dado que rueda','Simulación'],['Turnos y puntos','Pizarrón'],['Mini quiz de 5 preguntas','Quiz'],['Proyecto: un juego de mesa digital para jugar en familia','Proyecto']], 'Un Blueprint es como el reglamento de tu juego de mesa: cuando alguien cae en una casilla, pasa algo.', 2, 'Intermedio', '12 sesiones cortas de 30 min')
      },
      status: { clase: 'Clase 3 de 6 · Profe Echo está explicando', temario: 'Nuevo curso · generando temario', perfil: 'Perfil del Aprendiz · el curso se adapta a lo que escribes', pizarron: 'Pizarrón en vivo · Profe Echo, Lía y Tomás', actividades: 'Actividades interactivas · quiz, simulación, idiomas', ayuda: 'Ayuda · qué hace EchoMentor AI', entrar: 'Acceso para miembros del Club UETC' },
      msg: { invalido: 'Ese código no funcionó. Revísalo en el Club UETC e intenta de nuevo.', espera: 'Demasiados intentos seguidos. Espera un minuto y vuelve a intentar.', origen: 'No pudimos validar desde esta página. Abre la plataforma directo e ingresa ahí.' },
      ui: { demo: 'Demostración con datos de ejemplo', real: 'Acceso real a la plataforma', hold: 'Mantén presionado para hablar', listening: 'Escuchando…', typing: 'Sigue escribiendo: nivel, meta, tiempo', adapted: 'Adaptado a tu texto', entering: 'Entrando…', emptyCode: 'Escribe tu código de miembro.', edit: 'Editar temario', done: 'Listo', courseLang: 'Español (México)', panelLang: 'es-MX', waiting: 'Esperando tu tema' },
      quiz: { right: '<b>Correcto.</b> BeginOverlap se dispara en el momento en que el jugador entra al área.', wrong: '<b>Casi.</b> ', why: { 0: 'Tick corre cada frame, no cuando alguien entra.', 2: 'BeginPlay corre una vez, cuando arranca el nivel.', 3: 'Toggle Visibility es la acción, no el evento que la dispara.' }, answer: ' La respuesta es BeginOverlap.' },
      sim: { max: 'Altura máxima: ', reach: 'Alcanzas la plataforma.', short: function (n) { return 'Te faltan ' + n + ' cm.'; }, note: ' Gravedad por defecto de Unreal: 980 cm/s².' }
    },
    en: {
      htmlLang: 'en', langTag: 'EN',
      title: 'EchoMentor AI · Adaptive AI learning platform · by UETC',
      desc: 'Your AI classroom. Type what you want to learn and EchoMentor AI builds the course: syllabus, voiced lessons, whiteboard and activities, adapted to who you are. Beta for Club UETC members.',
      caption: 'When the player walks into the area, the event fires. We connect it to the light and that’s it: your first switch.',
      topic: 'I want to make my first level in Unreal Engine 5',
      profiles: {
        g: prof('Generic', 'Generic course', '', [['What a game engine is','Slides'],['Getting around the editor','Slides'],['Blueprints: your first switch','Simulation'],['Lights and atmosphere','Whiteboard'],['Review quiz','Quiz'],['Project: a playable level','Project']], 'A Blueprint is a visual scripting system: you connect nodes and each one performs an action.', 2, 'Intermediate', '6 classes of 30 min'),
        a: prof('Designer, no code', 'Rewritten for you', 'I’m a graphic designer and I’ve never coded. I learn best with visual examples, one step at a time.', [['The editor as a canvas: shape, light and color','Slides'],['Your scene as a 3D moodboard','Whiteboard'],['Blueprints without fear: boxes and arrows','Simulation'],['Materials: paint your world','Slides'],['Visual quiz with images','Quiz'],['Project: a playable corner in your style','Project']], 'A Blueprint is like a flowchart in your design app: each box does one thing and the arrows set the order.', 1, 'Beginner', '10 classes of 20 min, one concept at a time'),
        b: prof('C++ engineer', 'Rewritten for you', 'I study engineering and code in C++. I want to get straight to the point and see how it connects to code.', [['UE5 architecture in 10 minutes','Slides'],['Actors, components and lifecycle','Whiteboard'],['Blueprints vs C++: when to use each','Simulation'],['Exposing C++ functions to Blueprints','Code'],['Technical quiz','Quiz'],['Project: a reusable interaction system','Project']], 'BeginOverlap is the OnComponentBeginOverlap delegate you would bind in C++. The Blueprint just draws that call as a graph.', 3, 'Advanced', '4 classes of 45 min, no detours'),
        c: prof('30 min a day', 'Rewritten for you', 'I make board games with my kids on weekends. I have 30 minutes a day to learn.', [['From board to screen: rules you already know','Slides'],['Your first scene in 30 minutes','Project'],['Blueprints: a rolling die','Simulation'],['Turns and points','Whiteboard'],['5-question mini quiz','Quiz'],['Project: a digital board game to play as a family','Project']], 'A Blueprint is like your board game’s rulebook: when someone lands on a square, something happens.', 2, 'Intermediate', '12 short 30 min sessions')
      },
      status: { clase: 'Class 3 of 6 · Prof. Echo is explaining', temario: 'New course · generating syllabus', perfil: 'Learner profile · the course adapts to what you write', pizarron: 'Live whiteboard · Prof. Echo, Lía and Tomás', actividades: 'Interactive activities · quiz, simulation, languages', ayuda: 'Help · what EchoMentor AI does', entrar: 'Access for Club UETC members' },
      msg: { invalido: 'That code didn’t work. Check it in the Club UETC and try again.', espera: 'Too many attempts in a row. Wait a minute and try again.', origen: 'We couldn’t validate from this page. Open the platform directly and sign in there.' },
      ui: { demo: 'Demo with sample data', real: 'Real access to the platform', hold: 'Hold to talk', listening: 'Listening…', typing: 'Keep typing: level, goal, time', adapted: 'Adapted to your text', entering: 'Signing in…', emptyCode: 'Type your member code.', edit: 'Edit syllabus', done: 'Done', courseLang: 'English', panelLang: 'en-US', waiting: 'Waiting for your topic' },
      quiz: { right: '<b>Correct.</b> BeginOverlap fires the moment the player walks into the area.', wrong: '<b>Almost.</b> ', why: { 0: 'Tick runs every frame, not when someone walks in.', 2: 'BeginPlay runs once, when the level starts.', 3: 'Toggle Visibility is the action, not the event that triggers it.' }, answer: ' The answer is BeginOverlap.' },
      sim: { max: 'Max height: ', reach: 'You reach the platform.', short: function (n) { return 'You are ' + n + ' cm short.'; }, note: ' Unreal’s default gravity: 980 cm/s².' }
    },
    ro: {
      htmlLang: 'ro', langTag: 'RO',
      title: 'EchoMentor AI · Platformă de învățare adaptivă cu AI · by UETC',
      desc: 'Sala ta de clasă cu AI. Scrie ce vrei să înveți și EchoMentor AI construiește cursul: programă, lecții cu voce, tablă și activități, adaptate la cine ești. Beta pentru membrii Club UETC.',
      caption: 'Când jucătorul intră în zonă, evenimentul se declanșează. Îl legăm de lumină și gata: primul tău întrerupător.',
      topic: 'Vreau să fac primul meu nivel în Unreal Engine 5',
      profiles: {
        g: prof('Generic', 'Curs generic', '', [['Ce este un motor de joc','Slide-uri'],['Cum te miști prin editor','Slide-uri'],['Blueprints: primul tău întrerupător','Simulare'],['Lumini și atmosferă','Tablă'],['Quiz de recapitulare','Quiz'],['Proiect: un nivel jucabil','Proiect']], 'Un Blueprint este un sistem vizual de programare: conectezi noduri și fiecare face o acțiune.', 2, 'Intermediar', '6 lecții de 30 min'),
        a: prof('Designer fără cod', 'Rescris pentru tine', 'Sunt designer grafic și n-am programat niciodată. Învăț cel mai bine cu exemple vizuale, pas cu pas.', [['Editorul ca o pânză: formă, lumină și culoare','Slide-uri'],['Scena ta ca un moodboard 3D','Tablă'],['Blueprints fără teamă: cutii și săgeți','Simulare'],['Materiale: pictează-ți lumea','Slide-uri'],['Quiz vizual cu imagini','Quiz'],['Proiect: un colț jucabil în stilul tău','Proiect']], 'Un Blueprint e ca o diagramă de flux în aplicația ta de design: fiecare cutie face un lucru, iar săgețile dau ordinea.', 1, 'Începător', '10 lecții de 20 min, câte un concept pe rând'),
        b: prof('Inginer C++', 'Rescris pentru tine', 'Studiez ingineria și programez în C++. Vreau să merg direct la subiect și să văd cum se leagă de cod.', [['Arhitectura UE5 în 10 minute','Slide-uri'],['Actori, componente și ciclu de viață','Tablă'],['Blueprints vs C++: când folosești fiecare','Simulare'],['Expunerea funcțiilor C++ către Blueprints','Cod'],['Quiz tehnic','Quiz'],['Proiect: un sistem de interacțiune reutilizabil','Proiect']], 'BeginOverlap este delegatul OnComponentBeginOverlap pe care l-ai lega în C++. Blueprint-ul doar desenează acel apel ca graf.', 3, 'Avansat', '4 lecții de 45 min, fără ocolișuri'),
        c: prof('30 min pe zi', 'Rescris pentru tine', 'Fac jocuri de societate cu copiii mei în weekend. Am 30 de minute pe zi ca să învăț.', [['De la tabla de joc la ecran: reguli pe care le știi deja','Slide-uri'],['Prima ta scenă în 30 de minute','Proiect'],['Blueprints: un zar care se rostogolește','Simulare'],['Ture și puncte','Tablă'],['Mini quiz de 5 întrebări','Quiz'],['Proiect: un joc de societate digital de jucat în familie','Proiect']], 'Un Blueprint e ca regulamentul jocului tău de societate: când cineva ajunge pe o căsuță, se întâmplă ceva.', 2, 'Intermediar', '12 sesiuni scurte de 30 min')
      },
      status: { clase: 'Lecția 3 din 6 · Prof. Echo explică', temario: 'Curs nou · se generează programa', perfil: 'Profilul cursantului · cursul se adaptează la ce scrii', pizarron: 'Tablă live · Prof. Echo, Lía și Tomás', actividades: 'Activități interactive · quiz, simulare, limbi', ayuda: 'Ajutor · ce face EchoMentor AI', entrar: 'Acces pentru membrii Club UETC' },
      msg: { invalido: 'Codul nu a funcționat. Verifică-l în Club UETC și încearcă din nou.', espera: 'Prea multe încercări la rând. Așteaptă un minut și încearcă din nou.', origen: 'Nu am putut valida de pe această pagină. Deschide direct platforma și intră de acolo.' },
      ui: { demo: 'Demo cu date de exemplu', real: 'Acces real la platformă', hold: 'Ține apăsat ca să vorbești', listening: 'Ascult…', typing: 'Continuă să scrii: nivel, obiectiv, timp', adapted: 'Adaptat la textul tău', entering: 'Se intră…', emptyCode: 'Scrie codul tău de membru.', edit: 'Editează programa', done: 'Gata', courseLang: 'Română', panelLang: 'en-US', waiting: 'Aștept subiectul tău' },
      quiz: { right: '<b>Corect.</b> BeginOverlap se declanșează în momentul în care jucătorul intră în zonă.', wrong: '<b>Aproape.</b> ', why: { 0: 'Tick rulează la fiecare frame, nu când intră cineva.', 2: 'BeginPlay rulează o singură dată, când pornește nivelul.', 3: 'Toggle Visibility este acțiunea, nu evenimentul care o declanșează.' }, answer: ' Răspunsul este BeginOverlap.' },
      sim: { max: 'Înălțime maximă: ', reach: 'Ajungi pe platformă.', short: function (n) { return 'Îți lipsesc ' + n + ' cm.'; }, note: ' Gravitația implicită în Unreal: 980 cm/s².' }
    }
  };

  /* Keywords the demo uses to pick an adaptation from free text, in all three languages. */
  var CUES = {
    a: ['diseñ', 'visual', 'nunca', 'principiante', 'dibuj', 'arte', 'ilustr', 'no sé programar', 'design', 'never', 'beginner', 'draw', 'art', 'no code', 'niciodat', 'începător', 'desen', 'artă', 'vizual'],
    b: ['c++', 'program', 'ingenier', 'código', 'codigo', 'desarroll', 'python', 'javascript', 'c#', 'senior', 'engineer', 'developer', 'inginer', 'dezvolt'],
    c: ['minutos', 'tiempo', 'hij', 'familia', 'fines de semana', 'trabajo', 'al día', 'minutes', 'time', 'kids', 'family', 'weekend', 'a day', 'minute', 'timp', 'copii', 'familie', 'pe zi']
  };

  var LANGS = ['es', 'en', 'ro'];
  function pick() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q && LANGS.indexOf(q) > -1) return q;
    try { var s = localStorage.getItem('em-lang'); if (s && LANGS.indexOf(s) > -1) return s; } catch (e) {}
    var nav = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'es']);
    for (var i = 0; i < nav.length; i++) {
      var two = String(nav[i]).slice(0, 2).toLowerCase();
      if (LANGS.indexOf(two) > -1) return two;
    }
    return 'en';
  }

  var src = new WeakMap(), last = new WeakMap();
  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];
  var SKIP = 'script, style, textarea, [data-no-i18n]';
  function translate(s, lang) {
    if (lang === 'es') return s;
    var k = s.trim(), v = T[k];
    return v ? s.replace(k, v[lang === 'en' ? 0 : 1]) : s;
  }
  function apply(root, lang) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement;
        return p && p.closest(SKIP) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = w.nextNode())) {
      var cur = n.nodeValue;
      if (!src.has(n) || last.get(n) !== cur) src.set(n, cur);
      var out = translate(src.get(n), lang);
      if (out !== cur) n.nodeValue = out;
      last.set(n, n.nodeValue);
    }
    root.querySelectorAll('[' + ATTRS.join('],[') + ']').forEach(function (el) {
      if (el.closest('[data-no-i18n]')) return;
      ATTRS.forEach(function (a) {
        if (!el.hasAttribute(a)) return;
        var key = 'data-i18n-' + a;
        if (!el.hasAttribute(key)) el.setAttribute(key, el.getAttribute(a));
        el.setAttribute(a, translate(el.getAttribute(key), lang));
      });
    });
  }

  global.EMI18N = { T: T, DATA: DATA, CUES: CUES, LANGS: LANGS, pick: pick, apply: apply };
})(window);
