module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    // Puedes agregar mapeos para importaciones de módulos aquí si es necesario
  },
  setupFilesAfterEnv: [
    // Aquí puedes agregar archivos de configuración específicos de tus pruebas, si los tienes
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  // Otras opciones de configuración aquí
};
