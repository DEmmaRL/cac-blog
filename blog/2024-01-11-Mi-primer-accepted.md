---
slug: mi-primer-accepted
title: Mi primer Accepted
authors: [demmarl]
tags: [hola]
---

import Highlight from '@site/src/components/Highlight';

## Introducción

En este tutorial aprenderás cómo abordar y resolver tu primer problema en Codeforces. Usaremos como ejemplo el problema [231A - Team](https://codeforces.com/problemset/problem/231/A).

<!-- truncate -->

## Requisitos previos
- Conocimientos básicos de C++.
- Cuenta de Codeforces (Consulta cómo crear una cuenta en: [**Codeforces getting started**](../2024-01-11-codeforces-getting-started.md)).

## Paso 1: Leer el Problema

Lee cuidadosamente el enunciado. En el caso de **231A - Team**, el problema describe tres amigos que intentan resolver problemas en un concurso. Implementarán la solución si al menos dos de ellos están seguros de cómo hacerlo. 

**Entrada:**
- Un número entero `n` que representa el número de problemas.
- `n` líneas, cada una con tres valores binarios (0 o 1), que indican si cada amigo confía en la solución del problema.

**Salida:**
- Un entero que indica cuántos problemas serán resueltos.

### Ejemplo

#### Entrada:
```
3
1 1 0
1 1 1
1 0 0
```
#### Salida:
```
2
```

### Explicación:
Los amigos resolverán los dos primeros problemas porque al menos dos de ellos confían en las soluciones.

## Paso 2: Diseñar el Enfoque

El problema se puede dividir en pasos simples:
1. Leer el valor de `n`.
2. Iterar sobre las `n` líneas de entrada.
3. Contar cuántas líneas tienen al menos dos valores iguales a 1.
4. Imprimir el resultado.

### Pseudocódigo
```plaintext
inicializar contador a 0
leer n
por cada línea:
    leer tres números a, b, c
    si a + b + c >= 2:
        incrementar contador
imprimir contador
```

## Paso 3: Implementar la Solución en C++

Aquí está el código en C++ para resolver el problema:

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int count = 0;
    for (int i = 0; i < n; i++) {
        int a, b, c;
        cin >> a >> b >> c;
        if (a + b + c >= 2) {
            count++;
        }
    }

    cout << count << endl;
    return 0;
}
```

## Paso 4: Probar el Código Localmente

1. Copia y pega el código en tu editor favorito (por ejemplo, VS Code o Code::Blocks).
2. Usa los ejemplos proporcionados para probarlo.
3. Asegúrate de manejar casos límite, como:
    - Solo un problema (`n = 1`).
    - Ningún problema tiene al menos dos personas seguras.

## Paso 5: Enviar la Solución

1. Dirígete a la página del problema en Codeforces.
2. Haz clic en "Submit".
3. Pega tu código en el formulario de envío.
4. Selecciona el lenguaje (C++) y envía tu solución.

Si todo está bien, ¡deberías obtener un **Accepted**!

## Consejos Adicionales

- Lee cuidadosamente los límites de tiempo y memoria del problema.
- Usa ejemplos personalizados para probar tu solución.
- Familiarízate con las funciones básicas de entrada y salida en C++.

¡Buena suerte resolviendo más problemas en Codeforces! 🚀