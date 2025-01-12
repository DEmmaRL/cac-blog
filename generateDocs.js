const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Ruta al JSON principal de datos
const jsonPath = path.join(__dirname, 'src', 'data', 'presentations.json');
// Ruta de la carpeta de documentos
const docsPath = path.join(__dirname, 'docs', 'Presentaciones');

// Cargar datos del JSON
const data = require(jsonPath);

// Función para eliminar archivos existentes
const deleteExistingFiles = () => {
  if (fs.existsSync(docsPath)) {
    fs.readdirSync(docsPath).forEach((section) => {
      const sectionPath = path.join(docsPath, section);
      fs.readdirSync(sectionPath).forEach((file) => {
        fs.unlinkSync(path.join(sectionPath, file));
      });
      fs.rmdirSync(sectionPath);
    });
  }
};

// Función para generar `_category_.json` en la carpeta general
const generateMainCategory = () => {
  const mainCategoryPath = path.join(docsPath, '_category_.json');
  const mainCategoryContent = {
    label: 'Presentaciones',
    position: 1,
    link: {
      type: 'generated-index',
      description: 'Sección principal de todas las presentaciones organizadas por años o categorías.',
    },
  };
  fs.writeFileSync(mainCategoryPath, JSON.stringify(mainCategoryContent, null, 2));
};

// Función para generar archivos .mdx y los _category_.json
const generateDocs = () => {
  Object.keys(data).forEach((section) => {
    const sectionPath = path.join(docsPath, section);

    // Crear carpeta de la sección si no existe
    if (!fs.existsSync(sectionPath)) {
      fs.mkdirSync(sectionPath, { recursive: true });
    }

    // Crear el archivo `_category_.json` para la sección
    const categoryJsonPath = path.join(sectionPath, '_category_.json');
    const categoryJsonContent = {
      label: section,
      position: undefined, // Dejar indefinido para orden alfabético
      link: {
        type: 'generated-index',
        description: `Presentaciones de la sección ${section}`,
      },
    };

    fs.writeFileSync(categoryJsonPath, JSON.stringify(categoryJsonContent, null, 2));

    // Generar los archivos de presentaciones dentro de la sección
    data[section].forEach((presentation) => {
      const filePath = path.join(sectionPath, `${presentation.title.replace(/ /g, '-')}.mdx`);
      console.log(`Generando archivo ${filePath}`);
      const content = `
---
title: ${presentation.title}
sidebar_position: ${presentation.sidebarPosition || 1}
---

# ${presentation.title}

**Descripción:** ${presentation.description}

[Ver presentación completa](${presentation.slidesLink})

**Categorías:** ${presentation.categories.join(', ')}
`;
      fs.writeFileSync(filePath, content.trim());
    });
  });

  console.log('¡Documentos generados exitosamente!');
};

// Función principal
const main = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('¿Quieres eliminar las presentaciones que existen ya en presentaciones? (Y/N) ', (answer) => {
    if (answer.toLowerCase() === 'y') {
      deleteExistingFiles();
      console.log('Archivos existentes eliminados.');
    }

    // Crear la categoría principal
    generateMainCategory();

    // Generar documentos y categorías por sección
    generateDocs();
    rl.close();
  });
};

main();
