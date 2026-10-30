contenidoEntrada = `
<section>
    <h2>Ecuaciones de Primer Grado</h2>
    <p>En esta entrada exploramos las ecuaciones de primer grado (o lineales), su procedimiento general de resolución y sus diferentes aplicaciones en el desarrollo de software y la vida diaria.</p>

    <hr>

    <h3>1. Procedimiento General de Resolución</h3>
    <p>Para resolver cualquier ecuación de primer grado, se aplica el siguiente procedimiento paso a paso:</p>
    <ol>
        <li><strong>Eliminar signos de agrupación:</strong> Si existen paréntesis <code>()</code>, corchetes <code>[]</code> o llaves <code>{}</code>, elimina los signos multiplicando de adentro hacia afuera aplicando la propiedad distributiva o cuidando el cambio de signos si hay un signo negativo enfrente.</li>
        <li><strong>Eliminar denominadores:</strong> Si la ecuación contiene fracciones, calcula el Mínimo Común Múltiplo (MCM) de todos los denominadores y multiplica <strong>cada término</strong> de la ecuación por dicho MCM para convertirla en una ecuación entera.</li>
        <li><strong>Agrupar términos:</strong> Mueve todos los términos con la incógnita a un lado de la igualdad (usualmente al lado izquierdo) y los términos independientes (números) al otro lado.</li>
        <li><strong>Reducir términos semejantes:</strong> Suma o resta los términos semejantes en cada lado de la igualdad.</li>
        <li><strong>Despejar la incógnita:</strong> Divide ambos lados entre el coeficiente que multiplica a la incógnita para aislarla.</li>
        <li><strong>Comprobar:</strong> Sustituye el valor obtenido en la ecuación original para verificar que se cumpla la igualdad.</li>
    </ol>

    <hr>

    <h3>2. Ejemplos Resueltos por Tipo</h3>

    <h4>A. Ecuación Entera</h4>
    <p><strong>Ecuación:</strong> 4<i>x</i> - 9 = <i>x</i> + 15</p>
    <ul>
        <li><strong>Paso 1 (Agrupar):</strong> 4<i>x</i> - <i>x</i> = 15 + 9</li>
        <li><strong>Paso 2 (Reducir):</strong> 3<i>x</i> = 24</li>
        <li><strong>Paso 3 (Despejar):</strong> <i>x</i> = 24 / 3 &rarr; <strong><i>x</i> = 8</strong></li>
    </ul>
    <p><strong>Comprobación:</strong><br>
    Lado izquierdo: 4(8) - 9 = 32 - 9 = 23<br>
    Lado derecho: (8) + 15 = 23<br>
    <strong>23 = 23 &check;</strong></p>

    <h4>B. Ecuación Fraccionaria</h4>
    <p><strong>Ecuación:</strong> (<i>x</i> / 4) + (<i>x</i> / 6) = 10</p>
    <ul>
        <li><strong>Paso 1 (MCM):</strong> El MCM de 4 y 6 es 12.</li>
        <li><strong>Paso 2 (Multiplicar por MCM):</strong> 12 &middot; (<i>x</i> / 4) + 12 &middot; (<i>x</i> / 6) = 12 &middot; 10 &rarr; 3<i>x</i> + 2<i>x</i> = 120</li>
        <li><strong>Paso 3 (Reducir):</strong> 5<i>x</i> = 120</li>
        <li><strong>Paso 4 (Despejar):</strong> <i>x</i> = 120 / 5 &rarr; <strong><i>x</i> = 24</strong></li>
    </ul>
    <p><strong>Comprobación:</strong><br>
    (24 / 4) + (24 / 6) = 6 + 4 = 10<br>
    <strong>10 = 10 &check;</strong></p>

    <h4>C. Ecuación con Signos de Agrupación</h4>
    <p><strong>Ecuación:</strong> 4<i>x</i> - 2(<i>x</i> - 3) = 18</p>
    <ul>
        <li><strong>Paso 1 (Eliminar paréntesis):</strong> 4<i>x</i> - 2<i>x</i> + 6 = 18</li>
        <li><strong>Paso 2 (Reducir):</strong> 2<i>x</i> + 6 = 18</li>
        <li><strong>Paso 3 (Agrupar):</strong> 2<i>x</i> = 18 - 6 &rarr; 2<i>x</i> = 12</li>
        <li><strong>Paso 4 (Despejar):</strong> <i>x</i> = 12 / 2 &rarr; <strong><i>x</i> = 6</strong></li>
    </ul>
    <p><strong>Comprobación:</strong><br>
    Lado izquierdo: 4(6) - 2(6 - 3) = 24 - 2(3) = 24 - 6 = 18<br>
    Lado derecho: 18<br>
    <strong>18 = 18 &check;</strong></p>

    <h4>D. Ecuación con Literales</h4>
    <p><strong>Ecuación:</strong> Despejar <i>x</i> de <em>mx + k = px + q</em></p>
    <ul>
        <li><strong>Paso 1 (Agrupar):</strong> <i>m</i><em>x</em> - <i>p</i><em>x</em> = <i>q</i> - <i>k</i></li>
        <li><strong>Paso 2 (Factorizar x):</strong> <em>x</em>(<i>m</i> - <i>p</i>) = <i>q</i> - <i>k</i></li>
        <li><strong>Paso 3 (Despejar):</strong> <strong><em>x</em> = (<i>q</i> - <i>k</i>) / (<i>m</i> - <i>p</i>)</strong> <em>(con m &ne; p para evitar la división entre cero)</em></li>
    </ul>
    <p><strong>Comprobación con valores numéricos (m = 5, k = 4, p = 2, q = 16):</strong><br>
    <em>x</em> = (16 - 4) / (5 - 2) = 12 / 3 = 4<br>
    Sustituyendo en la ecuación original: 5(4) + 4 = 2(4) + 16 &rarr; 20 + 4 = 8 + 16 &rarr; <strong>24 = 24 &check;</strong></p>

    <hr>

    <h3>3. Problema de Planteamiento (Aplicado a Software)</h3>
    <p><strong>Enunciado:</strong> Un desarrollador organiza su jornada de trabajo en un sprint semanal dividiendo sus horas lectivas en tres actividades: dedica la <strong>mitad del total de horas</strong> a la programación del backend, <strong>un tercio del total</strong> al diseño de pruebas y control de calidad (QA), y los <strong>4 días restantes de trabajo (equivalentes a 8 horas)</strong> a la documentación de endpoints y despliegue. &iquest;Cuántas horas en total trabaja en el proyecto a la semana?</p>

    <ol>
        <li><strong>Incógnita:</strong> <em>h</em> = número total de horas semanales dedicadas al proyecto.</li>
        <li><strong>Traducción al lenguaje algebraico:</strong>
            <ul>
                <li>Horas en backend: <em>h</em> / 2</li>
                <li>Horas en QA: <em>h</em> / 3</li>
                <li>Horas en documentación y despliegue: 8</li>
                <li>Total de horas: <em>h</em></li>
            </ul>
        </li>
        <li><strong>Ecuación:</strong> (<em>h</em> / 2) + (<em>h</em> / 3) + 8 = <em>h</em></li>
        <li><strong>Solución:</strong>
            <ul>
                <li>Multiplicamos todo por el MCM (6): 6 &middot; (<em>h</em> / 2) + 6 &middot; (<em>h</em> / 3) + 6 &middot; (8) = 6 &middot; <em>h</em></li>
                <li>3<em>h</em> + 2<em>h</em> + 48 = 6<em>h</em></li>
                <li>5<em>h</em> + 48 = 6<em>h</em></li>
                <li>48 = 6<em>h</em> - 5<em>h</em> &rarr; <strong><em>h</em> = 48</strong></li>
            </ul>
        </li>
        <li><strong>Validación contra el enunciado:</strong>
            <ul>
                <li>Total de horas obtenidas: <strong>48 horas</strong>.</li>
                <li>Backend (mitad): 48 / 2 = 24 horas.</li>
                <li>QA (un tercio): 48 / 3 = 16 horas.</li>
                <li>Documentación y despliegue: 8 horas.</li>
                <li>Suma: 24 + 16 + 8 = 48 horas. &check;</li>
                <li>La solución es lógica, entera y positiva.</li>
            </ul>
        </li>
    </ol>
</section>`;