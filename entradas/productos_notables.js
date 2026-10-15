contenidoEntrada = `
<section>
    <h2>Productos notables</h2>
    <p>Los productos notables son multiplicaciones de expresiones algebraicas que siguen reglas fijas, lo que permite resolverlos de forma directa sin necesidad de efectuar la multiplicación término por término.</p>

    <!-- 1. Binomio al cuadrado -->
    <h3>1. Binomio al cuadrado</h3>
    <p><strong>Regla:</strong> Es igual al cuadrado del primer término, más (o menos) el doble producto del primer término por el segundo, más el cuadrado del segundo término.</p>
    <p><strong>Ejemplo:</strong> Resolver (3<i>x</i> + 5)<sup>2</sup></p>
    <ul>
        <li><strong>Paso 1:</strong> Elevar al cuadrado el primer término: (3<i>x</i>)<sup>2</sup> = 9<i>x</i><sup>2</sup>.</li>
        <li><strong>Paso 2:</strong> Calcular el doble del primero por el segundo: 2 &middot; (3<i>x</i>) &middot; (5) = 30<i>x</i>.</li>
        <li><strong>Paso 3:</strong> Elevar al cuadrado el segundo término: (5)<sup>2</sup> = 25.</li>
        <li><strong>Resultado final:</strong> 9<i>x</i><sup>2</sup> + 30<i>x</i> + 25.</li>
    </ul>
    <p><strong>Comprobación por el método de la tabla:</strong></p>
    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <td>&middot;</td>
            <td><strong>3<i>x</i></strong></td>
            <td><strong>+5</strong></td>
        </tr>
        <tr>
            <td><strong>3<i>x</i></strong></td>
            <td>9<i>x</i><sup>2</sup></td>
            <td>+15<i>x</i></td>
        </tr>
        <tr>
            <td><strong>+5</strong></td>
            <td>+15<i>x</i></td>
            <td>25</td>
        </tr>
    </table>
    <p><em>Suma de elementos:</em> 9<i>x</i><sup>2</sup> + 15<i>x</i> + 15<i>x</i> + 25 = <strong>9<i>x</i><sup>2</sup> + 30<i>x</i> + 25</strong></p>

    <hr>

    <!-- 2. Binomio al cubo -->
    <h3>2. Binomio al cubo</h3>
    <p><strong>Regla:</strong> Es igual al cubo del primer término, más (o menos) el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, más (o menos) el cubo del segundo término.</p>
    <p><strong>Ejemplo:</strong> Resolver (2<i>x</i> - 3)<sup>3</sup></p>
    <ul>
        <li><strong>Paso 1:</strong> Cubo del primer término: (2<i>x</i>)<sup>3</sup> = 8<i>x</i><sup>3</sup>.</li>
        <li><strong>Paso 2:</strong> Triple del cuadrado del primero por el segundo: 3 &middot; (2<i>x</i>)<sup>2</sup> &middot; (-3) = 3 &middot; (4<i>x</i><sup>2</sup>) &middot; (-3) = -36<i>x</i><sup>2</sup>.</li>
        <li><strong>Paso 3:</strong> Triple del primero por el cuadrado del segundo: 3 &middot; (2<i>x</i>) &middot; (-3)<sup>2</sup> = 6<i>x</i> &middot; (9) = +54<i>x</i>.</li>
        <li><strong>Paso 4:</strong> Cubo del segundo término: (-3)<sup>3</sup> = -27.</li>
        <li><strong>Resultado final:</strong> 8<i>x</i><sup>3</sup> - 36<i>x</i><sup>2</sup> + 54<i>x</i> - 27.</li>
    </ul>
    <p><strong>Comprobación por el método de la tabla:</strong></p>
    <p>Primero resolvemos el cuadrado (2<i>x</i> - 3)<sup>2</sup> = 4<i>x</i><sup>2</sup> - 12<i>x</i> + 9, y luego lo multiplicamos por (2<i>x</i> - 3):</p>
    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <td>&middot;</td>
            <td><strong>4<i>x</i><sup>2</sup></strong></td>
            <td><strong>-12<i>x</i></strong></td>
            <td><strong>+9</strong></td>
        </tr>
        <tr>
            <td><strong>2<i>x</i></strong></td>
            <td>8<i>x</i><sup>3</sup></td>
            <td>-24<i>x</i><sup>2</sup></td>
            <td>+18<i>x</i></td>
        </tr>
        <tr>
            <td><strong>-3</strong></td>
            <td>-12<i>x</i><sup>2</sup></td>
            <td>+36<i>x</i></td>
            <td>-27</td>
        </tr>
    </table>
    <p><em>Suma de elementos:</em> 8<i>x</i><sup>3</sup> + (-24<i>x</i><sup>2</sup> - 12<i>x</i><sup>2</sup>) + (18<i>x</i> + 36<i>x</i>) - 27 = <strong>8<i>x</i><sup>3</sup> - 36<i>x</i><sup>2</sup> + 54<i>x</i> - 27</strong></p>

    <hr>

    <!-- 3. Binomios con término común -->
    <h3>3. Binomios con término común</h3>
    <p><strong>Regla:</strong> Es igual al cuadrado del término común, más la suma algebraica de los términos no comunes multiplicada por el término común, más el producto de los términos no comunes.</p>
    <p><strong>Ejemplo:</strong> Resolver (<i>x</i> + 7)(<i>x</i> - 4)</p>
    <ul>
        <li><strong>Paso 1:</strong> Cuadrado del término común: (<i>x</i>)<sup>2</sup> = <i>x</i><sup>2</sup>.</li>
        <li><strong>Paso 2:</strong> Suma de no comunes por el común: (7 - 4) &middot; <i>x</i> = 3 &middot; <i>x</i> = +3<i>x</i>.</li>
        <li><strong>Paso 3:</strong> Producto de los términos no comunes: (7) &middot; (-4) = -28.</li>
        <li><strong>Resultado final:</strong> <i>x</i><sup>2</sup> + 3<i>x</i> - 28.</li>
    </ul>
    <p><strong>Comprobación por el método de la tabla:</strong></p>
    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <td>&middot;</td>
            <td><strong><i>x</i></strong></td>
            <td><strong>+7</strong></td>
        </tr>
        <tr>
            <td><strong><i>x</i></strong></td>
            <td><i>x</i><sup>2</sup></td>
            <td>+7<i>x</i></td>
        </tr>
        <tr>
            <td><strong>-4</strong></td>
            <td>-4<i>x</i></td>
            <td>-28</td>
        </tr>
    </table>
    <p><em>Suma de elementos:</em> <i>x</i><sup>2</sup> + 7<i>x</i> - 4<i>x</i> - 28 = <strong><i>x</i><sup>2</sup> + 3<i>x</i> - 28</strong></p>

    <hr>

    <!-- 4. Binomios conjugados -->
    <h3>4. Binomios conjugados</h3>
    <p><strong>Regla:</strong> El producto de dos binomios conjugados es igual al cuadrado del primer término menos el cuadrado del segundo término, dando como resultado una diferencia de cuadrados.</p>
    <p><strong>Ejemplo:</strong> Resolver (4<i>x</i> + 3)(4<i>x</i> - 3)</p>
    <ul>
        <li><strong>Paso 1:</strong> Cuadrado del primer término: (4<i>x</i>)<sup>2</sup> = 16<i>x</i><sup>2</sup>.</li>
        <li><strong>Paso 2:</strong> Menos el cuadrado del segundo término: -(3)<sup>2</sup> = -9.</li>
        <li><strong>Resultado final:</strong> 16<i>x</i><sup>2</sup> - 9.</li>
    </ul>
    <p><strong>Comprobación por el método de la tabla:</strong></p>
    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <td>&middot;</td>
            <td><strong>4<i>x</i></strong></td>
            <td><strong>+3</strong></td>
        </tr>
        <tr>
            <td><strong>4<i>x</i></strong></td>
            <td>16<i>x</i><sup>2</sup></td>
            <td>+12<i>x</i></td>
        </tr>
        <tr>
            <td><strong>-3</strong></td>
            <td>-12<i>x</i></td>
            <td>-9</td>
        </tr>
    </table>
    <p><em>Suma de elementos:</em> 16<i>x</i><sup>2</sup> + 12<i>x</i> - 12<i>x</i> - 9 = <strong>16<i>x</i><sup>2</sup> - 9</strong></p>
</section>`;