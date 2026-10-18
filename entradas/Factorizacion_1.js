contenidoEntrada = `
<section>
    <h2>Blog de Álgebra: Factorización I</h2>
    <p>Factorizar es deshacer una multiplicación. Cuando nos dan un polinomio expresado como resultado final, el objetivo de la factorización es encontrar los factores que lo producen. A continuación, explicamos los tres casos fundamentales vistos en esta primera etapa.</p>

    <hr>

    <h3>1. Término Común</h3>
    <h4>Cómo reconocerlo</h4>
    <p>Se reconoce porque todos los términos del polinomio comparten un elemento: un divisor común en los coeficientes numéricos (MCD) y/o una o más variables presentes en cada uno de los términos.</p>

    <h4>Procedimiento</h4>
    <p>Primero, calculamos el Máximo Común Divisor (MCD) de los coeficientes numéricos. Luego, identificamos las variables que se repiten en todos los términos y tomamos cada una de ellas elevada a su menor exponente. Este producto forma el factor común. Finalmente, dividimos cada término del polinomio original entre el factor común y escribimos el resultado dentro de un paréntesis.</p>

    <h4>Ejemplo resuelto</h4>
    <p>Factorizar el polinomio: <strong>18x⁴y² - 12x³y³ + 6x²y</strong></p>
    <ul>
        <li><strong>MCD de coeficientes (18, 12, 6):</strong> 6</li>
        <li><strong>Variables comunes con menor exponente:</strong> x² e y</li>
        <li><strong>Factor común:</strong> 6x²y</li>
        <li><strong>División término a término:</strong>
            <ul>
                <li>(18x⁴y²) ÷ (6x²y) = 3x²y</li>
                <li>(-12x³y³) ÷ (6x²y) = -2xy²</li>
                <li>(6x²y) ÷ (6x²y) = 1</li>
            </ul>
        </li>
    </ul>
    <p><strong>Resultado:</strong> 6x²y(3x²y - 2xy² + 1)</p>

    <h4>Comprobación (multiplicando de regreso)</h4>
    <p>
        6x²y · (3x²y - 2xy² + 1) <br>
        = (6x²y)(3x²y) + (6x²y)(-2xy²) + (6x²y)(1) <br>
        = <strong>18x⁴y² - 12x³y³ + 6x²y</strong>
    </p>

    <hr>

    <h3>2. Trinomio Cuadrado Perfecto (TCP)</h3>
    <h4>Cómo reconocerlo</h4>
    <p>Está formado por exactamente tres términos. El primer y el tercer término deben ser positivos y tener raíz cuadrada exacta. Además, al multiplicar esas dos raíces entre sí y luego por dos, debemos obtener como resultado el término central.</p>

    <h4>Procedimiento</h4>
    <p>Obtenemos la raíz cuadrada exacta del primer término y la del tercer término. Verificamos que el término central sea el doble producto de ambas raíces. Si se cumple esta condición, construimos un binomio con las dos raíces obtenidas, separadas por el signo del término central del trinomio, y elevamos todo el binomio al cuadrado.</p>

    <h4>Ejemplo resuelto</h4>
    <p>Factorizar el polinomio: <strong>25x² - 30x + 9</strong></p>
    <ul>
        <li><strong>Raíz cuadrada del primer término (25x²):</strong> 5x</li>
        <li><strong>Raíz cuadrada del tercer término (9):</strong> 3</li>
        <li><strong>Verificación del término de en medio:</strong> 2 · (5x) · (3) = 30x (Coincide)</li>
        <li><strong>Signo del término central:</strong> Negativo (-)</li>
    </ul>
    <p><strong>Resultado:</strong> (5x - 3)²</p>

    <h4>Comprobación (multiplicando de regreso)</h4>
    <p>
        (5x - 3)² <br>
        = (5x)² - 2(5x)(3) + (3)² <br>
        = <strong>25x² - 30x + 9</strong>
    </p>

    <hr>

    <h3>3. Diferencia de Cuadrados</h3>
    <h4>Cómo reconocerlo</h4>
    <p>Consta de únicamente dos términos separados por un signo de resta (diferencia). Ambos términos deben tener raíz cuadrada exacta.</p>

    <h4>Procedimiento</h4>
    <p>Extraemos la raíz cuadrada de cada uno de los dos términos. Con las raíces obtenidas formamos dos binomios: uno con la suma de las raíces y el otro con la resta de las mismas (binomios conjugados). El resultado es el producto de estos dos binomios.</p>

    <h4>Ejemplo resuelto</h4>
    <p>Factorizar el polinomio: <strong>16x² - 81y²</strong></p>
    <ul>
        <li><strong>Raíz cuadrada del primer término (16x²):</strong> 4x</li>
        <li><strong>Raíz cuadrada del segundo término (81y²):</strong> 9y</li>
    </ul>
    <p><strong>Resultado:</strong> (4x + 9y)(4x - 9y)</p>

    <h4>Comprobación (multiplicando de regreso)</h4>
    <p>
        (4x + 9y)(4x - 9y) <br>
        = (4x)(4x) + (4x)(-9y) + (9y)(4x) + (9y)(-9y) <br>
        = 16x² - 36xy + 36xy - 81y² <br>
        = <strong>16x² - 81y²</strong>
    </p>

    <hr>

    <h3>Ida y Regreso: Relación con Productos Notables</h3>
    <p>La factorización y los productos notables son procesos inversos en el álgebra. La multiplicación nos lleva del binomio/factor al polinomio extendido (ida), mientras que la factorización parte del polinomio para regresar a sus factores originales (regreso):</p>
    <table>
        <thead>
            <tr>
                <th>Caso de Factorización (Regreso)</th>
                <th>Producto Notable (Ida)</th>
                <th>Relación Álgebraica</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Término Común</strong></td>
                <td>Propiedad Distributiva</td>
                <td>ab + ac ⇄ a(b + c)</td>
            </tr>
            <tr>
                <td><strong>Trinomio Cuadrado Perfecto</strong></td>
                <td>Binomio al Cuadrado</td>
                <td>a² ± 2ab + b² ⇄ (a ± b)²</td>
            </tr>
            <tr>
                <td><strong>Diferencia de Cuadrados</strong></td>
                <td>Binomios Conjugados</td>
                <td>a² - b² ⇄ (a + b)(a - b)</td>
            </tr>
        </tbody>
    </table>
</section>`;