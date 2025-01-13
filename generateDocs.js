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
// TODO : BUG: Hay un error en esta función que no elimina correctamente los archivos
const deleteExistingFiles = () => {
    if (fs.existsSync(docsPath)) {
      fs.readdirSync(docsPath).forEach((section) => {
        const sectionPath = path.join(docsPath, section);
        if (fs.lstatSync(sectionPath).isDirectory()) {
          fs.readdirSync(sectionPath).forEach((file) => {
            fs.unlinkSync(path.join(sectionPath, file));
          });
          fs.rmdirSync(sectionPath);
        } else {
          fs.unlinkSync(sectionPath);
        }
      });
    }
  };
  

// Función para crear carpetas y archivos de categorías
const createCategoryJson = (folderPath, label, description) => {
  const categoryJsonPath = path.join(folderPath, '_category_.json');
  const content = {
    label,
    link: {
      type: 'generated-index',
      description,
    },
  };
  fs.writeFileSync(categoryJsonPath, JSON.stringify(content, null, 2));
};

// Función para generar documentos en subsecciones
const generateSubsectionDocs = (sectionPath, subsectionName, subsectionData) => {
  const subsectionPath = path.join(sectionPath, subsectionName);

  // Crear carpeta de la subsección si no existe
  if (!fs.existsSync(subsectionPath)) {
    fs.mkdirSync(subsectionPath, { recursive: true });
  }

  // Crear el archivo "_category_.json" para la subsección
  createCategoryJson(subsectionPath, subsectionName, subsectionData.description);

  // Generar  presentaciones dentro de la subsección
  subsectionData.presentations.forEach((presentation) => {
    const safeTitle = presentation.title.replace(/[^a-zA-Z0-9_-]/g, '-');
    const filePath = path.join(subsectionPath, `${safeTitle}.mdx`);
    console.log(`Generando archivo ${filePath}`);
    const content = `
---
title: ${presentation.title}
sidebar_position: ${presentation.sidebarPosition || 1}
---

# ${presentation.title}

${presentation.description}

[Ver presentación completa](${presentation.slidesLink})

**Categorías:** ${presentation.categories.join(', ')}
`;
    fs.writeFileSync(filePath, content.trim());
  });
};

const generateDocs = () => {
  Object.keys(data).forEach((section) => {
    const sectionData = data[section];
    const sectionPath = path.join(docsPath, section);

    // Crear carpeta de la sección principal
    if (!fs.existsSync(sectionPath)) {
      fs.mkdirSync(sectionPath, { recursive: true });
    }

    // Crear `_category_.json` para la sección principal, está en 
    createCategoryJson(sectionPath, section, sectionData.description);

    // Procesar subsecciones dentro de la sección
    Object.keys(sectionData.sections).forEach((subsectionName) => {
      const subsectionData = sectionData.sections[subsectionName];
      generateSubsectionDocs(sectionPath, subsectionName, subsectionData);
    });
  });

  console.log('¡Documentos generados exitosamente!');
};

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

    // Generar documentos y categorías
    generateDocs();
    rl.close();
  });
};

main();
