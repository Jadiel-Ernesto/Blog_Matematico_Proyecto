contenidoEntrada = `
<section>
    <h2>Blog de Álgebra: Factorización II</h2>
    <p>En esta segunda parte completamos el estudio de los casos de factorización, abordando polinomios con cubos perfectos y trinomios que no forman un cuadrado perfecto. Al final, integramos todos los métodos vistos en una estrategia general.</p>

    <hr>

    <h3>1. Suma y Diferencia de Cubos</h3>
    <h4>Cómo reconocerlo</h4>
    <p>Consta de exactamente dos términos sumándose o restándose, donde ambos coeficientes tienen raíz cúbica exacta y los exponentes de sus variables son múltiplos de 3.</p>

    <h4>Procedimiento</h4>
    <p>Extraemos la raíz cúbica de cada uno de los dos términos. El resultado estará formado por el producto de un binomio y un trinomio:</p>
    <ul>
        <li><strong>Binomio:</strong> Contiene las dos raíces cúbicas obtenidas. Su signo es el <strong>mismo</strong> que el de la expresión original.</li>
        <li><strong>Trinomio:</strong> Se forma con el cuadrado de la primera raíz, el producto de ambas raíces y el cuadrado de la segunda raíz.</li>
        <li><strong>Regla de signos (MOS):</strong> El binomio lleva el <strong>M</strong>ismo signo, el término medio del trinomio lleva el signo <strong>O</strong>puesto, y el último término del trinomio es <strong>S</strong>iempre positivo.</li>
    </ul>

    <h4>Ejemplo resuelto</h4>
    <p>Factorizar el polinomio: <strong>27x³ - 64y⁶</strong></p>
    <ul>
        <li><strong>Raíz cúbica del primer término (27x³):</strong> 3x</li>
        <li><strong>Raíz cúbica del segundo término (64y⁶):</strong> 4y²</li>
        <li><strong>Construcción del binomio (Mismo signo):</strong> (3x - 4y²)</li>
        <li><strong>Construcción del trinomio:</strong>
            <ul>
                <li>Cuadrado del primero: (3x)² = 9x²</li>
                <li>Producto de las raíces (Signo Opuesto): +(3x)(4y²) = +12xy²</li>
                <li>Cuadrado del segundo (Siempre positivo): +(4y²)² = +16y⁴</li>
            </ul>
        </li>
    </ul>
    <p><strong>Resultado:</strong> (3x - 4y²)(9x² + 12xy² + 16y⁴)</p>

    <h4>Comprobación (multiplicando de regreso)</h4>
    <p>
        (3x - 4y²)(9x² + 12xy² + 16y⁴) <br>
        = 3x(9x² + 12xy² + 16y⁴) - 4y²(9x² + 12xy² + 16y⁴) <br>
        = (27x³ + 36x²y² + 48xy⁴) - (36x²y² + 48xy⁴ + 64y⁶) <br>
        = 27x³ + 36x²y² - 36x²y² + 48xy⁴ - 48xy⁴ - 64y⁶ <br>
        = <strong>27x³ - 64y⁶</strong>
    </p>

    <hr>

    <h3>2. Trinomios de la forma x² + bx + c</h3>
    <h4>Cómo reconocerlo</h4>
    <p>Es un trinomio ordenado de grado 2 donde el coeficiente del término cuadrático (x²) es exactamente igual a 1.</p>

    <h4>Procedimiento</h4>
    <p>Se abren dos paréntesis escribiendo la raíz del término cuadrático (x) al inicio de cada uno. Luego, buscamos dos números (m y n) que multiplicados den como resultado el término independiente "c", y cuya suma algebraica sea igual al coeficiente "b".</p>

    <h4>Ejemplo resuelto</h4>
    <p>Factorizar el polinomio: <strong>x² - 8x + 12</strong></p>
    <ul>
        <li><strong>Raíz del término cuadrático:</strong> x</li>
        <li><strong>Búsqueda de factores de c (+12) que sumen b (-8):</strong>
            <ul>
                <li>(-1) · (-12) = 12 → Suma: -13</li>
                <li>(-2) · (-6) = 12 → Suma: -8 (Coincide)</li>
            </ul>
        </li>
    </ul>
    <p><strong>Resultado:</strong> (x - 2)(x - 6)</p>

    <h4>Comprobación (multiplicando de regreso)</h4>
    <p>
        (x - 2)(x - 6) <br>
        = x² - 6x - 2x + 12 <br>
        = <strong>x² - 8x + 12</strong>
    </p>

    <hr>

    <h3>3. Trinomios de la forma ax² + bx + c (Aspa Simple)</h3>
    <h4>Cómo reconocerlo</h4>
    <p>Es un trinomio ordenado donde el coeficiente del término cuadrático "a" es diferente de 1 (y no es un trinomio cuadrado perfecto directo).</p>

    <h4>Procedimiento</h4>
    <p>Descomponemos el primer término (ax²) en dos factores verticales en la columna izquierda, y el término independiente (c) en dos factores en la columna derecha. Multiplicamos en cruz (en aspa) y sumamos los resultados. Si la suma coincide con el término central (bx), agrupamos los factores leídos de forma horizontal (por renglón).</p>

    <h4>Ejemplo resuelto</h4>
    <p>Factorizar el polinomio: <strong>3x² + 11x - 4</strong></p>
    <ul>
        <li><strong>Descomposición columna izquierda (3x²):</strong> 3x y x</li>
        <li><strong>Descomposición columna derecha (-4):</strong> -1 y +4</li>
        <li><strong>Prueba en aspa:</strong>
            <ul>
                <li>(3x) · (+4) = 12x</li>
                <li>(x) · (-1) = -1x</li>
                <li>Suma: 12x - 1x = 11x (Coincide con el término central)</li>
            </ul>
        </li>
        <li><strong>Lectura por renglones:</strong> Renglón 1: (3x - 1), Renglón 2: (x + 4)</li>
    </ul>
    <p><strong>Resultado:</strong> (3x - 1)(x + 4)</p>

    <h4>Comprobación (multiplicando de regreso)</h4>
    <p>
        (3x - 1)(x + 4) <br>
        = (3x)(x) + (3x)(4) + (-1)(x) + (-1)(4) <br>
        = 3x² + 12x - x - 4 <br>
        = <strong>3x² + 11x - 4</strong>
    </p>

    <hr>

    <h3>Estrategia General de Factorización</h3>
    <p>Para factorizar cualquier polinomio correctamente, se debe seguir este flujo sistemático ordenado por cantidad de términos:</p>
    
    <ol>
        <li><strong>Paso 1: Factor Común</strong><br> Extraer siempre en primer lugar el Máximo Común Divisor (MCD) y/o las variables comunes presentes en todos los términos.</li>
        <li><strong>Paso 2: Conteo de Términos</strong><br> Según la cantidad de términos que queden dentro del paréntesis, evaluar los siguientes casos:
            <ul>
                <li><strong>2 Términos:</strong>
                    <ul>
                        <li>¿Es una resta con raíces cuadradas exactas? → <em>Diferencia de Cuadrados: a² - b² = (a + b)(a - b)</em></li>
                        <li>¿Tienen raíz cúbica exacta? → <em>Suma o Diferencia de Cubos: a³ ± b³ = (a ± b)(a² ∓ ab + b²)</em></li>
                    </ul>
                </li>
                <li><strong>3 Términos:</strong>
                    <ul>
                        <li>¿Los extremos tienen raíz cuadrada exacta y el término medio es el doble producto? → <em>Trinomio Cuadrado Perfecto: (a ± b)²</em></li>
                        <li>¿Empieza con x² (coeficiente 1)? → <em>Trinomio x² + bx + c (buscar dos números)</em></li>
                        <li>¿Empieza con ax² (coeficiente ≠ 1)? → <em>Trinomio ax² + bx + c (Aspa Simple)</em></li>
                    </ul>
                </li>
                <li><strong>4 Términos:</strong>
                    <ul>
                        <li>¿Se pueden agrupar de dos en dos o de tres en uno? → <em>Factor Común por Agrupación</em></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Paso 3: Reducción Completa</strong><br> Revisar si alguno de los factores resultantes se puede volver a factorizar hasta llevar la expresión a su mínima forma.</li>
    </ol>
</section>`;