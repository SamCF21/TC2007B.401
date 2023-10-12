import React from "react";
import { Route } from "react-router-dom";
import darkTheme from "./theme";
import { Admin, Resource, CustomRoutes, Layout } from "react-admin";
import { MyAppBar } from "./MyAppBar";
import { TicketList, TicketEdit, TicketCreate } from "./TicketList";
import { dataProvider } from "./dataProvider";
import Registrarse from "./registrarse";
import authProvider from "./authProvider";
import MyLoginPage from "./MyLoginPage";
import { i18nProvider } from "./i18nProvider";

const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;

const App = () => {
  return (
    <Admin
      loginPage={MyLoginPage}
      theme={darkTheme}
      dataProvider={dataProvider}
      layout={MyLayout}
      darkTheme={{ palette: { mode: "dark" } }}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
    >
      <Resource
        name="tickets"
        list={TicketList}
        edit={TicketEdit}
        create={TicketCreate}
      />
      <CustomRoutes>
        <Route path="/registrarse" element={<Registrarse />} />
      </CustomRoutes>
    </Admin>
  );
};
export default App;

// import React from "react";
// import { Route } from "react-router-dom";
// import { Admin, Resource, CustomRoutes } from "react-admin";
// import { TicketList, TicketEdit, TicketCreate } from "./TicketList";
// import { dataProvider } from "./dataProvider";
// import Registrarse from "./registrarse";
// import authProvider from "./authProvider";
// import { i18nProvider } from "./i18nProvider";

// const App = () => {
//   return (
//     <Admin
//       dataProvider={dataProvider}
//       authProvider={authProvider}
//       i18nProvider={i18nProvider}
//     >
//       <Resource
//         name="tickets"
//         list={TicketList}
//         edit={TicketEdit}
//         create={TicketCreate}
//       />
//       <CustomRoutes>
//         <Route path="/registrarse" element={<Registrarse />} />
//       </CustomRoutes>
//     </Admin>
//   );
// };
// export default App;
